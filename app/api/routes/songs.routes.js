const express = require("express");
const router = express.Router();

const {
  createSong,
  getAllSongs,
  getSongById,
} = require("../controllers/songs.controllers");

router.post("/create", createSong);
router.get("/", getAllSongs);
router.get("/:songId", getSongById);

module.exports = router;
