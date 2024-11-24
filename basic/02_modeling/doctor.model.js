import mongoose, { mongo } from "mongoose";

const doctorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    experienceInYears:{
        type:Number,
        required:true
    },
    worksInHospitals:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"hospitalReport",
    }
},{timestamps:true})

export const doctorRecord=mongoose.model('doctorRecord',doctorRecord)