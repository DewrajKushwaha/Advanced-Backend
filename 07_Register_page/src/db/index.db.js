import mongoose from "mongoose";
import 'dotenv/config'

const connectDB= async()=>{
    try {
        const connectionInstance= await mongoose.connect(`${process.env.DB_URI}/${process.env.DB_NAME}`)
        console.log(`MongoDB Connected successfully. : ${connectionInstance.connection.host}`)
        
    } catch (error) {
        console.error("MongoDB connection error from index.db.js file :",error)
        process.exit(1)
    }
}

export default connectDB