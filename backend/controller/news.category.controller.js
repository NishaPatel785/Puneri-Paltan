import newsCategoryModel from "../model/news.category.model";

export const addNewsCategory =async(req,res)=>{
    try {
        const {name}=req.body;

        const categoryData=new newsCategoryModel({
            name:name,
            
            
     });
     await categoryData.save();

     res.status(201).json({
         data:categoryData,
         message: "Inserted Successfully",
         success:true,
     })

        
    } catch (error) {
        res.status(500).json({
            message:"Internal server error",
            success:false
        })
    }
}



export const getNewsCategorys=async(req,res)=>{
    try {
        const categories=await newsCategoryModel.find().populate("data");

        res.status(200).json({
            data:categories,
            filepath: "http://localhost:6001/news-files/news/",
            message:"Fetched",
            success:true
        })
        
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message:"Internal server error",
            success:false
        })
    }
}