import newsModel from "../model/news.model";
import fs from "fs";
import path from "path";
import multer from "multer";
import newsCategoryModel from "../model/news.category.model";


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = "./uploads/news";
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const orgName = file.originalname;
    const name = path.parse(orgName).name;
    const ext = path.parse(orgName).ext;
    const unique = Date.now();
    cb(null, `${name}-${unique}${ext}`);
  }
});

// Instance of multer for single file uploads
const upload = multer({ storage: storage });

export const addNews = async (req, res) => {
  try {
    // Handle file uploads
    upload.fields([
      { name: "img", maxCount: 1 },
    
    ])(req, res, async function (err) {
      if (err) {
        return res.status(400).json(console.error(err),{ message: err.message });
      }

  
      const Img = req.files["img"]
        ? req.files["img"][0].filename
        : null;
   
      const {
        title,
        date,
        link,
        category

      } = req.body;


      const newsData = await newsModel.create({
        title: title,
        date: date, 
        link: link,
        category: category,
        img: Img
     });

      const categoryDoc=await newsCategoryModel.findById(category);
      categoryDoc.data.push(newsData._id);
      await categoryDoc.save()

      return res.status(200).json({
        data: newsData,
        message: "news added successfully",
        success: true
      });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message || "Internal server error",
      success: false
    });
  }
};



export const getNews = async (req, res) => {
    try {
        const { limit = 10, page = 1, search = '', sort = 'na' } = req.query;

        const skip = (page - 1) * limit;

        let filter = {};
        if (search) {
            const rgx = (x) => {
                return new RegExp(`.*${x}.*`, 'i');
            };
            const searchRgx = rgx(search);
            filter = {
                $or: [
                    { f_name: { $regex: searchRgx } },
                    { l_name: { $regex: searchRgx } },
                    { nationality: { $regex: searchRgx } }
                ]
            };
        }

        let sortValue = { _id: 1 };
        if (sort === 'na') {
            sortValue = { _id: -1 };
        } else if (sort === 'htl') {
            sortValue = { total_points: -1 };
        } else if (sort === 'lth') {
            sortValue = { total_points: 1 };
        }

        const newsData = await newsModel.find(filter).populate('category','name')
            .skip(skip)
            .limit(Number(limit))
            .sort(sortValue);

        return res.status(200).json({
            data: newsData,
            filepath: "http://localhost:6001/news-files/news",
            message: "news fetched successfully",
            success: true
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};



