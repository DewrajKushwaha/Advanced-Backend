import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'


const app=express()

// enable middleware
app.use(cors())

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:'16kb'}))
app.use(express.static("public"))

app.use(cookieParser())

//routes import
import userRoutes from './routes/user.router.js'

//routes declaration
app.use("/api/v1/users",userRoutes)

// the url makes like this
// http://localhost:3000/api/v1/users/

export{app}