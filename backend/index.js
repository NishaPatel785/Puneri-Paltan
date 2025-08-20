import dotenv from "dotenv"
dotenv.config();
import cors from "cors"
import express from "express";
import mongoose  from "mongoose";
import categoryRoute from "./route/players.category.route";
import playerRoute from "./route/players.route"
import newsCategoryRoute from "./route/news.category.route"
import newsRoute from "./route/news.route"
import path from "path"


const app=express();

app.use(express.json());
app.use(cors());

const PORT=process.env.PRO_PORT  || 5001;
app.use('/node-files', express.static(path.join(__dirname, 'uploads', 'players')));
app.use('/news-files',express.static("uploads"))

//MOngoDb connectivity
mongoose
.connect(process.env.DB_URL)
.then(()=>console.log("Connected"))
.catch((err)=> console.log(err));

app.listen(PORT, () =>{
    console.log("Server is running on port:" + process.env.PRO_PORT);
});

app.use("/api/v1",playerRoute)
app.use("/api/v1",categoryRoute)
app.use("/api/v1",newsCategoryRoute)
app.use("/api/v1",newsRoute)




