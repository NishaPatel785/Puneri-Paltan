

import mongoose from "mongoose";

const Schema=mongoose.Schema;

const NewsCategorySchema=new Schema({
    name:{
        type:String,
        required:true
    },
    data:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"news"
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

export default mongoose.model("newsCategory",NewsCategorySchema)