
import mongoose from "mongoose";

const medicalSchema=new mongoose.Schema({},{ timestamps :true})

export const medicalReport =mongoose.model('medicalReport',medicalSchema)

