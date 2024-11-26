
import express from 'express'
import connectDB from './db/index.js';

const app=express()

connectDB()
.then(()=>{
    app.listen(3000,()=>{
        console.log('server is running on port 3000')
    })
})
.catch((err) => console.error('mongodb connection error',err));

