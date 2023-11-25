const mongoose = require("mongoose");

const Products = new mongoose.Schema({

    name: {
        type: String,
    },
    image: {
        type: String,
    },
    price: {
        type: String,
    },
    details: {
        type: String,
    }
  }
);
  
const productModel = mongoose.model("Product",Products);
module.exports = productModel;