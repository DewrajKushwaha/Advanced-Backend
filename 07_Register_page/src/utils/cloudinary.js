import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

//upload an image 


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null

        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto'
        })
        console.log("Image uploaded", response.url)

        fs.unlinkSync(localFilePath)
        return response
    }
    catch (err) {
        console.log("the file is not uploaded")
        fs.unlinkSync(localFilePath)
        return null
    }
}
export { uploadOnCloudinary }