const mongoose = require("mongoose");

const moviesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Movies", moviesSchema);
