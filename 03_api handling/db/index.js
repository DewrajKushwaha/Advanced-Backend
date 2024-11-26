import mongoose from "mongoose";
import { DB_NAME, DB_URI } from "../constants.js";

const connectDB=async ()=>{
    try {

        const connectionInstance=await mongoose.connect(`${DB_URI}/${DB_NAME}`)
        console.log(`MongoDB Connected: ${connectionInstance.connection.host}`)
        
    } catch (error) {
        console.error("Mongo DB connection error ",error)
        process.exit(1)
    }
}


export default connectDB