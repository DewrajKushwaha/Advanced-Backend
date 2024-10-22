import mongoose, { Schema } from "mongoose"

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true,
        lowecase: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    fullname: {
        type: String,
        required: true,
        index: true,
        trim: true,

    },
    avatar: {
        type: String,
        required: true,
      
    },
    coverImage: {
        type: String,
      
    },
    watchHistory:{
        type:Schema.Types.ObjectId,
        ref: 'Video'
    },
    password:{
        type:String,
        required:[true,'Password is required!']
    }

},
{
    timestamps:true
}
)

export const User = mongoose.model("User", userSchema)