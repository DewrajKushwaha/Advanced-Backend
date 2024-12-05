import mongoose, { isValidObjectId } from "mongoose"
import { Video } from "../models/video.model.js"
import { User } from "../models/user.model.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"

// get all videos from seaching from database
const getAllVideos = asyncHandler(async (req, res) => {
    const {
        page = 1,
        limit = 10,
        query,
        sortBy = "creatdAt",
        sortType = 'desc',
        userId
    } = req.query
    //TODO: get all videos based on query, sort, pagination
    /**
     * Find the query based tital and description
     * check is published or not
     * sort the videos based on the sortBy and sortType
     * pagination the videos based on the page and limit
     * return the videos 
     * 
     */
    const videos = await Video.aggregate(
        [
            ...(query ? [
                {
                    $match: {
                        $or: [
                            { title: { $regex: query, $options: "i" } },
                            { description: { $regex: query, $options: "i" } }
                        ]
                    }
                }
            ] : []),
            {
                $match: {
                    isPublished: true
                }
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'owner',
                    foreignField: "_id",
                    as: "owner",
                    pipeline: [
                        {
                            $project: {
                                username: 1,
                                fullName: 1,
                                avatar: 1,
                            }
                        }
                    ]
                }
            },
            {
                $addFields: {
                    owner: {
                        $arrayElemAt: ["$owner", 0]
                    }
                }
            },
            {
                $project: {
                    _id: 1,
                    owner: 1,
                    videoFile: 1,
                    thumbnail: 1,
                    createdAt: 1,
                    description: 1,
                    title: 1,
                    duration: 1,
                    views: 1,
                    isPublished: 1,
                }
            },
            {
                $sort: {
                    [sortBy]: sortType === "asc" ? 1 : -1
                }
            },
            {
                $skip: (page - 1) * limit
            },
            {
                $limit: parseInt(limit)
            }
        ]
    )

    if (!videos) {
        throw new ApiError(404, "Video not found")
    }

    return res
        .status(200)
        .json(new ApiResponse(200,
            videos,
            "Video fatched successfully"
        ))

})

const publishAVideo = asyncHandler(async (req, res) => {
    // TODO: get video, upload to cloudinary, create video


    const { title, description } = req.body

    if (!(title && description)) {
        throw new ApiError(400, "Title and description  are required")
    }



    let thumbnailLocalPath;
    if (req.files && Array.isArray(req.files.thumbnail) && req.files.thumbnail.length > 0) {
        thumbnailLocalPath = req.files.thumbnail[0].path
    }
    let videoLocalPath;
    if (req.files && Array.isArray(req.files.videoFile) && req.files.videoFile.length > 0) {
        videoLocalPath = req.files.videoFile[0].path
    }


    if (!(videoLocalPath && thumbnailLocalPath)) {
        throw new ApiError(400, "Video and thumbnail are required")
    }

    const videoFile = await uploadOnCloudinary(videoLocalPath)
    const thumbnailFile = await uploadOnCloudinary(thumbnailLocalPath)


    if (!(videoFile && thumbnailFile)) {
        throw new ApiError(500, "Video and Thumbnail not uploaded successfully");

    }

    const video = await Video.create({
        title: title,
        description: description,
        videoFile: videoFile.secure_url,
        thumbnail: thumbnailFile.secure_url,
        duration: videoFile.duration,
        isPublished: true,
        owner: req.user?._id
    })

    if (!video) {
        throw new ApiError(500, "Video not created")
    }

    return res
        .status(201)
        .json(new ApiResponse(201, video, "Video published successfully"))


})

const getVideoById = asyncHandler(async (req, res) => {
    const { videoId } = req.params

    //TODO: get video by id

    if (!(videoId && mongoose.isValidObjectId(videoId))) {
        throw new ApiError(400, " Video not avilable ")
    }

    const video = await Video.aggregate([
        {
            $match: {
                _id: new mongoose.Types.ObjectId(videoId)
            }
        },
        
        {
            //Left join likes collections
            $lookup: {
                from: "likes",
                localField: "_id",
                foreignField: "video",
                as: "likes"
            }
        },
        {
            // add fields to above likes collection 
            $addFields: {
                likesCount: { $size: "$likes" },
                isLiked: {
                    $cond: {
                        if: {
                            $in: [req.user?._id, "$likes.likedBy"]
                        },
                        then: true,
                        else: false
                    }
                }
            }
        },
        {
            $lookup: {
                from: "users",
                localField: "owner",
                foreignField: "_id",
                as: "owner",
                pipeline: [
                    {
                        $lookup: {
                            from: "subscriptions",
                            localField: "_id",
                            foreignField: "channel",
                            as: "subscribers"
                        }
                    },
                    // add some fileds in owner collections 
                    {
                        $addFields: {
                            subscriberCount: {
                                $size: "$subscribers"
                            },
                            isSubscribed: {
                                $cond: {
                                    if: {
                                        $in: [req.user?._id, "$subscribers.subscriber"]
                                    },
                                    then: true,
                                    else: false
                                }
                            }
                        }

                    },
                    {
                        $project: {
                            fullName: 1,
                            username: 1,
                            avatar: 1,
                            isSubscribed: 1,
                            subscriberCount: 1,
                        }
                    }
                ]
            }

        },
        {
            $addFields: {
                owner:
                {
                    $first: "$owner"
                }
            }
        },
        {
            $project: {
                videoFile: 1,
                thumbnail: 1,
                title: 1,
                description: 1,
                duration: 1,
                views: 1,
                owner: 1,
                createdAt: 1,
                comments: 1,
                likesCount: 1,
                isLiked: 1,
                subscriberCount: 1,
                isSubscribed: 1,
            }
        }
    ])

    if (!video.length) {
        throw new ApiError(404, "Video not exists")
    }

    await Video.findByIdAndUpdate(videoId, {
        $inc: { views: 1 }
    })

    await User.findByIdAndUpdate(req.user?._id, {
        $addToSet: {
            watchHistory: videoId
        }
    })
    console.log("total video is : ",video)

    return res
        .status(200)
        .json(new ApiResponse(
            200,
            video[0],
            "Video watched successfully",
        ))

})

const updateVideo = asyncHandler(async (req, res) => {
    //TODO: update video details like title, description, thumbnail
    const { videoId } = req.params
    const {title, description}=req.body
    const thumbnailLocalPath=req.file?.path


    if(!videoId){
        throw new ApiError(404, "Video not exists")
    }
    if (!(title && description)) {
        throw new ApiError(400,"Title and description is requried")
    }

    if(!thumbnailLocalPath){
        throw new ApiError(400,"Thumbnail is required")
    }

    const thumbnail= await uploadOnCloudinary(thumbnailLocalPath)
    if (!thumbnail.url) {
        throw new ApiError(500,"Error while uploading on cloudinary ")
    }

    const video= await Video.findByIdAndUpdate(
        videoId,
        {
            $set:{
                title: req.body.title,
                description: req.body.description,
                thumbnail:thumbnail.url
            },
            
        },
        {new: true}
    )

    return res
    .status(200)
    .json(
        new ApiResponse(200,
            video,
            "Videos title, thumbnail and description updated successfully",
        )
    )

})

const deleteVideo = asyncHandler(async (req, res) => {
    const { videoId } = req.params
    //TODO: delete video
})

const togglePublishStatus = asyncHandler(async (req, res) => {
    const { videoId } = req.params
})

export {
    getAllVideos,
    publishAVideo,
    getVideoById,
    updateVideo,
    deleteVideo,
    togglePublishStatus
}
