const Song = require("../models/Songs.model");
const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");

const createSong = async (req, res, next) => {
  try {
    const newSong = new Song();
    newSong.name = req.body.name;
    newSong.duration = req.body.duration;
    newSong.feat = req.body.feat;
    const SongDb = await newSong.save();
    return res.json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: { song: SongDb.name },
    });
  } catch (error) {
    return next(error);
  }
};

const getAllSongs = async (req, res, next) => {
  try {
    const song = await Song.find();
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: { song: song },
    });
  } catch (error) {
    return next(error);
  }
};

const getSongById = async (req, res, next) => {
  try {
    const { songId } = req.params;
    const songById = await Song.findById(songId);
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: { song: songById },
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = { createSong, getAllSongs, getSongById };
