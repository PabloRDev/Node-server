const Album = require("../models/chojin.model");
const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");

const createAlbum = async (req, res, next) => {
  try {
    const newAlbum = new Album();
    newAlbum.title = req.body.title;
    newAlbum.year = req.body.year;
    const chojinDb = await newAlbum.save();
    return res.json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: { album: chojinDb },
    });
  } catch (error) {
    return next(error);
  }
};

const getAllAlbum = async (req, res, next) => {
  try {
    const Albums = await Album.find().populate("songs");
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: { albums: Albums },
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = { createAlbum, getAllAlbum };
