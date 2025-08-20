import mongoose from "mongoose";

const Schema=mongoose.Schema;

const  NewsSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    img:{
        type:String,
        default:null
    },
    CreatedAt:{
        type:Date,
        default:Date.now()
    },
    Success:{
        type:Number,
        default:1
    }

})

export default mongoose.model("news",NewsSchema)