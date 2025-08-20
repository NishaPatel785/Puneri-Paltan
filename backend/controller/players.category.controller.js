import playersCategoryModel from "../model/players.category.model";


export const addCategory =async(req,res)=>{
    try {
        const {name}=req.body;

        const categoryData=new playersCategoryModel({
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

export const getCategorys=async(req,res)=>{
    try {
        const categories=await playersCategoryModel.find() .populate("players");

        res.status(200).json({
            data:categories,
            filepath: "http://localhost:6001/node-files/",
            message:"Fetched",
            success:true
        })
        
    } catch (error) {
        res.status(500).json({
            message:"Internal server error",
            success:false
        })
    }
}

export const getCategory=async(req,res)=>{

    try {
        const categoryid=req.params.categoryid;
        const categoryData=await playersCategoryModel.findOne({_id:categoryid }).populate("players");
        
        
        res.status(200).json({
            data:categoryData,
            message:"Single category data",
            success:true,
        })
        
    } catch (error) {
        res.status(500).json({
            message:"Internal server error",
            success:false,
        })
    }
}


export const UpdateCategory=async(req,res)=>{
    try {
        const categoryid=req.params.categoryid;
        const {name}=req.body;    
        const categoryUpdate=await playersCategoryModel.updateOne({_id:categoryid},{$set:{
            name:name

        }});
        if(categoryUpdate.modifiedCount >0){
            return res.status(200).json({
                message:"Updated",
                success:true
            })
            
        }
        return res.status(500).json({
            message:"Something is wrong",
            success:false

            
        })

        
    } catch (error) {
        res.status(500).json({
            message:"Internal server error",
            success:false
        })
    }
}

export const DeleteCategory=async (req,res)=>{
    try {

        const categoryid=req.params.categoryid;

        const categoryDelete=await playersCategoryModel.deleteOne({_id:categoryid});

        if(categoryDelete.deletedCount > 0){
            return res.status(200).json({
                message:"Category successfully deleted",
                success:true,
            })

        }
        return res.status(500).json({
            message:"Category not found",
            success:false
        })
    } catch (error) {
        res.status(500).json({
              message:"Internal server error",
              success:false
        })
    }
}