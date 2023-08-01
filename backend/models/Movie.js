const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Define collection and schema
let Movie = new Schema(
  {
    plot: {
      type: String,
    },
    genres: {
      type: [String],
    },
    runtime: {
      type: Number,
    },
    cast: {
      type: [String],
    },
    poster: {
      type: String,
    },
    title: {
      type: String,
    },
  },
  {
    collection: "movies",
  }
);
module.exports = mongoose.model("Movie", Movie);

