import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2" // we use here to insert middleware 


const videoSchema=new Schema(
    {
        videoFile:{
            type:String, //cloudinary url
            required:true
        },
        thumbnail:{
            type:String, //cloudinary url
            required:true
        },
        title:{
            type:String, 
            required:true
        },
        description:{
            type:String, 
            required:true
        },
        duration:{
            type:String, //cloudinary url
            required:true
        },
        views:{
            type:Number,
            default:0
        },
        isPublished:{
            type:Boolean,
            default:true
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref:"U ser"
        }

},{
    timestamps:true
})

videoSchema.plugin(mongooseAggregatePaginate)
export const Video=mongoose.model("Video",videoSchema)