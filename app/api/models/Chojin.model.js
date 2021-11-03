const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  songs: [{ type: Schema.Types.ObjectId, ref: "song", required: true }],
});

const Album = mongoose.model("album", AlbumSchema);
module.exports = Album;
