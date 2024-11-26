import mongoose from 'mongoose'
import { DB_URI ,DB_NAME } from './constants.js';
import express from 'express'
// import connectDB from './db/index.js';


// connectDB()

const app=express()




//method 1
// we use here eppic function
;(async()=>{
    try{
        // connect to database
       await mongoose.connect(`${DB_URI}/${DB_NAME}`)

       //if my db is not able to connect then we use it
       app.on("error",(err)=>{
        console.log("db is not connected")
        throw err
       })
       
       app.listen(3000,()=>{
        console.log("server is running on port 3000")
       })

    }
    catch(err){
        console.error("Error: ",err)
        throw err
    }
})()

