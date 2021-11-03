const express = require("express");
const router = express.Router();

const {
  createAlbum,
  getAllAlbum,
} = require("../controllers/chojin.controllers");

router.post("/create", createAlbum);
router.get("/", getAllAlbum);

module.exports = router;
