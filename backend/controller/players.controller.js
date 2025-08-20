import playersModel from "../model/players.model";
import fs from "fs";
import path from "path";
import multer from "multer";
import playersCategoryModel from "../model/players.category.model";
import { create } from "domain";


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = "./uploads/players";
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

export const addPlayer = async (req, res) => {
  try {
    // Handle file uploads
    upload.fields([
      { name: "profile_image", maxCount: 1 },
      { name: "full_image", maxCount: 1 },
      { name: "bg_image", maxCount: 1 },
      { name: "mobile_image", maxCount: 1 }
    ])(req, res, async function (err) {
      if (err) {
        return res.status(400).json({ message: err.message });
      }

      // Retrieve file paths if they exist
      const profileImage = req.files["profile_image"]
        ? req.files["profile_image"][0].filename
        : null;
      
      const fullImage = req.files["full_image"]
        ? req.files["full_image"][0].filename
        : null;
      const bgimage = req.files["bg_image"]
        ? req.files["bg_image"][0].filename
        : null;
      const mobileImage = req.files["mobile_image"]
        ? req.files["mobile_image"][0].filename
        : null;

      // Destructure player data from req.body
      const {
        f_name,
        l_name,
        category,
        jersey_no,
        position,
        date_of_birth,
        nationality,
        Matches_played,
        total_points,
        most_points_in_a_match,
        not_out_percentage,
        no_of_super_raids,
        super_10s,
        avg_raid_points,
        no_of_super_tackles,
        total_tacle_points
      } = req.body;

      // Validation of required fields
      if (!f_name || !l_name || !category) {
        return res.status(400).json({
          message: "First Name, Last Name, and Category are required.",
          success: false
        });
      }

      // Create a new player record in the database
      const playerData = await playersModel.create({
        f_name,
        l_name,
        category,
        jersey_no,
        position,
        date_of_birth,
        nationality,
        Matches_played,
        total_points,
        most_points_in_a_match,
        not_out_percentage,
        no_of_super_raids,
        super_10s,
        avg_raid_points,
        no_of_super_tackles,
        total_tacle_points,
        profile_image: profileImage,
        full_image: fullImage,
        bg_image:bgimage,
        mobile_image:mobileImage,
      });

      const categoryDoc=await playersCategoryModel.findById(category);
      categoryDoc.players.push(playerData._id);
      await categoryDoc.save()

      return res.status(200).json({
        data: playerData,
        message: "Player added successfully",
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


export const getPlayers = async (req, res) => {
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

        const playersData = await playersModel.find(filter).populate('category','name')
            .skip(skip)
            .limit(Number(limit))
            .sort(sortValue);

        return res.status(200).json({
            data: playersData,
            filepath: "http://localhost:6001/node-files/",
            message: "Players fetched successfully",
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

export const getPlayer = async (req, res) => {
    try {
        const playerId = req.params.playerId;

        const playerData = await playersModel.findById(playerId);

        if (!playerData) {
            return res.status(404).json({
                message: "Player not found",
                success: false
            });
        }

        return res.status(200).json({
            data: playerData,
            filepath: "http://localhost:6001/node-files/",
            message: "Player found",
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




export const updatePlayer = async (req, res) => {
  try {
    const updateimgFiles = upload.fields([
      { name: "profile_image", maxCount: 1 },
      { name: "full_image", maxCount: 1 },
      { name: "bg_image", maxCount: 1 }, 
      { name: "mobile_image", maxCount: 1 }, 
    ]);

    updateimgFiles(req, res, async function (err) {
      if (err) return res.status(400).json({ message: err.message });

      const id = req.params.id;
      const { f_name, l_name, jersey_no, category, position, date_of_birth, nationality, Matches_played, total_points, most_points_in_a_match, not_out_percentage, no_of_super_raids, avg_raid_points, super_10s, no_of_super_tackles, total_tacle_points } = req.body;

      const proData = await playersModel.findById(id);
      if (!proData) {
        return res.status(404).json({ message: "Player not found", success: false });
      }

      const pro_img = req.files["profile_image"] ? req.files["profile_image"][0].filename : proData.profile_image;
      const full_img = req.files["full_image"] ? req.files["full_image"][0].filename : proData.full_image;
      const bg_img = req.files["bg_image"] ? req.files["bg_image"][0].filename : proData.bg_image;
      const mobile_img = req.files["mobile_image"] ? req.files["mobile_image"][0].filename : proData.bg_image;

      if (req.files["profile_image"]) {
        const oldProImg = proData.profile_image;
        if (fs.existsSync('./uploads/player' + oldProImg)) {
          fs.unlinkSync('./uploads/player' + oldProImg);
        }
      }

      if (req.files["full_image"]) {
        const oldFullImg = proData.full_image;
        if (fs.existsSync('./uploads/player' + oldFullImg)) {
          fs.unlinkSync('./uploads/player' + oldFullImg);
        }
      }

      if (req.files["bg_image"]) {
        const oldBgImg = proData.bg_image;
        if (fs.existsSync('./uploads/player' + oldBgImg)) {
          fs.unlinkSync('./uploads/player' + oldBgImg);
        }
      }
      if (req.files["mobile_image"]) {
        const oldMoImg = proData.bg_image;
        if (fs.existsSync('./uploads/player' + oldMoImg)) {
          fs.unlinkSync('./uploads/player' + oldMoImg);
        }
      }

      const updatedData = await playersModel.updateOne({ _id: id }, {
        $set: {
          f_name,
          l_name,
          category,
          profile_image: pro_img,
          full_image: full_img,
          bg_image: bg_img,
          mobile_image: mobile_img,
          jersey_no,
          position,
          date_of_birth,
          nationality,
          Matches_played,
          total_points,
          most_points_in_a_match,
          not_out_percentage,
          no_of_super_raids,
          avg_raid_points,
          super_10s,
          no_of_super_tackles,
          total_tacle_points,
        },
      });

      if (updatedData.modifiedCount > 0) {
        return res.status(200).json({
          message: "Player Updated Successfully",
          success: true,
        });
      }

      return res.status(400).json({ message: "Bad Request", success: false });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};


export const deletePlayer = async (req, res) => {
  try {
      const playerId = req.params.playerId;

      // Fetch the player data to get the image file paths
      const playerData = await playersModel.findById(playerId);

      if (!playerData) {
          return res.status(404).json({
              message: "Player not found",
              success: false
          });
      }

      // Delete images from the file system if they exist
      if (playerData.profile_image) {
          const profileImagePath = path.join(__dirname, "..", "uploads", "players", playerData.profile_image);
          if (fs.existsSync(profileImagePath)) {
              fs.unlinkSync(profileImagePath);
          }
      }

      if (playerData.full_image) {
          const fullImagePath = path.join(__dirname, "..", "uploads", "players", playerData.full_image);
          if (fs.existsSync(fullImagePath)) {
              fs.unlinkSync(fullImagePath);
          }
      }
      if (playerData.bg_image) {
          const bgImagePath = path.join(__dirname, "..", "uploads", "players", playerData.bg_image);
          if (fs.existsSync(bgImagePath)) {
              fs.unlinkSync(bgImagePath);
          }
      }

      // Delete player record from the database
      const playerDelete = await playersModel.deleteOne({ _id: playerId });

      if (playerDelete.deletedCount > 0) {
          return res.status(200).json({
              message: "Deleted player and associated images successfully",
              success: true
          });
      }

      return res.status(404).json({
          message: "Player not found",
          success: false
      });
  } catch (error) {
      console.error(error);
      return res.status(500).json({
          message: "Internal server error",
          success: false
      });
  }
};