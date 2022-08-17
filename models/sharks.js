const mongoose = require("mongoose");

const sharkSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  character: {
    type: String,
  },
});

const Shark = mongoose.model("Shark", sharkSchema);
module.exports = Shark;
