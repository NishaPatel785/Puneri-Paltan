

import mongoose from "mongoose";

const Schema=mongoose.Schema;

const categorySchema=new Schema({
    name:{
        type:String,
        required:true
    },
    players:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"players"
    }],
    CreatedAt:{
        type:Date,
        default:Date.now()
    },
    Success:{
        type:Number,
        default:1
    }

})

export default mongoose.model("category",categorySchema)