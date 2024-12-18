import mongoose from 'mongoose'

const patientSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    diagonsedWith:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    bloodGroup:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:['Male','Female','Other'],
        required:true
    },
    admittedIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'hospitalRecord',
    }

},{timestamps:true})

export const PatientRecord=mongoose.model('PatientRecord',patientSchema)