const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SongSchema = new Schema(
  {
    name: { type: String, require: true, unique: true },
    duration: { type: String, require: true },
    feat: { type: String },
  },
  { timestamps: true }
);

const song = mongoose.model("song", SongSchema);
module.exports = song;
