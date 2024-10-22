
import connectDB from "./db/index.js";
 
import dotenv from "dotenv"
dotenv.config({
    path:"./env"
})

// first better approch for connect db by useing imedite 

// import express from express 
// const app=express()
// ;(async()=>{
//     try {
//        await mongoose.connect(`{process.env.MONGODB_URI}/${DB_NAME}`)

//        app.on("error",(error)=>{
//         console.error(error)
//         throw error
//        })
//        app.listen(process.env.PORT,()=>{
//         console.log("server is running on port ",process.env.PORT)
//         })
        
//     } catch (error) {
//         console.log('error', error)
//         throw error
//     }
// })()

connectDB()