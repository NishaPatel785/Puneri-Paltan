import express from "express";
import { addPlayer, deletePlayer, getPlayer, getPlayers, updatePlayer } from "../controller/players.controller";

const router = express.Router();

router.post("/add-player", addPlayer);
router.get("/get-players", getPlayers);
router.get("/get-player/:playerId", getPlayer);
router.put("/update-player/:id", updatePlayer);
router.delete("/delete-player/:playerId", deletePlayer);

export default router;
