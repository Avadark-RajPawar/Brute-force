const mongoose = require("mongoose");

const User = new mongoose.Schema({

    // createdBy: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: "User",
    // },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
        required : true,
    }
  }
);
  
const userModel = mongoose.model("Registration", User);
module.exports = userModel;
// const Register = new mongoose.model('Registration', User);