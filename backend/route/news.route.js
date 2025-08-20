import express from "express";
import { addNews, getNews } from "../controller/news.controller";


const router = express.Router();

router.post("/add-news", addNews);
router.get("/get-news", getNews);

export default router;