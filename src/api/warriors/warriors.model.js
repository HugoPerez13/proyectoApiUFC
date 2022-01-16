const mongoose = require("mongoose");

const warriorsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true  },
    weight: { type: String, required: true },
    height: { type: String,required: true },
    record: { type: String, required: true},
    category: { type: String, required: true},
    img: { type: String, required: true},
  },

  {
    timestamps: true,
  }
);

const Warriors = mongoose.model("warriors", warriorsSchema);
module.exports = Warriors;
