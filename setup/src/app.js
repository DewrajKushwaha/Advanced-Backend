import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGINe,
    credentials: true
}))

//use midilware
//set json limit
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))



//routes import
import userRouter from './routes/user.routers.js'



//routers declaration
app.use('/api/v1/users',userRouter)
 

export {app}