
import express from "express";
import { addNewsCategory, getNewsCategorys } from "../controller/news.category.controller";

const router=express.Router()

router.post("/add-newscategory",addNewsCategory);
router.get("/get-newscategorys",getNewsCategorys);


export default router;