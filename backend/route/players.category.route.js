import express from "express";
import{addCategory, DeleteCategory, getCategory, UpdateCategory,getCategorys} from "../controller/players.category.controller"


const router=express.Router()

router.post("/add-category",addCategory);
router.get("/get-categorys",getCategorys);
router.get("/get-category/:categoryid",getCategory);
router.put("/update-category/:categoryid",UpdateCategory);
router.delete("/delete-category/:categoryid",DeleteCategory);

export default router;