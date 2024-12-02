import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'
import dotenv from 'dotenv'
dotenv.config({
    path: './.env'
})


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
        
        fs.unlinkSync(localFilePath)
        return response
    }
    catch (err) {
        console.log("the file is not uploaded on the cloudinary ")
        fs.unlinkSync(localFilePath)
        return null
    }
}
export { uploadOnCloudinary }