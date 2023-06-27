const mongoose = require("mongoose");
const menuSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      default: [],
      required: true,
    },
    calories:{
      type: Number,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const MenuModel = new mongoose.model("menu", menuSchema);
module.exports = MenuModel;
