const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
require("./conn");
const userModel = require("./models/User");
const productModel = require("./models/Products");
const { Console } = require("console");
var products = productModel.find({});

const port = process.env.PORT || 3000;

const index = path.join(__dirname, "../Public");
app.use(express.static(index));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

// app.get("/index", (req, res) => {
//   products.exec((err, data) => {
//     if (err) throw err;
//     res.render("index", { details: data });
//   });
// });

app.get("/index", (req, res) => {
  res.render("index");
});

app.get("/account", (req, res) => {
  res.render("Account", { message: "" });
});
app.get("/details", (req, res) => {
  res.render("Details");
});
app.get("/payment", (req, res) => {
  res.render("Payment");
});

app.listen(port, (req, res) => {
  console.log(`server is running on port ${port}`);
});

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // let passwordRegex = new RegExp(
    //   /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$)/
    // );
    if (password.length < 6) {
      res.render("Account", { message: "Password length must be > 6" });
    } else if (!password.match(/[0-9]/)) {
      res.render("Account", { message: "Password must contain numbers" });
    } else if (!password.match(/[A-Z]/)) {
      res.render("Account", { message: "Password must contain uppercase" });
    } else if (!password.match(/[!\@\#\$\%\^\&\*]/)) {
      res.render("Account", {
        message: "Password must contain (!,@,#,$,%,^,&,*)",
      });
    } else {
      let user = new userModel({
        username,
        email,
        password,
      });

      const saved = await user.save();
      res.status(200).render("index", { message: "Registered Successfully" });
    }
  } catch (err) {
    // console.log(error);
    res.status(400).send(err);
  }
});

app.post("/login", async (req, res) => {
  let { logname, logpassword } = req.body;
  try {
    const user = await userModel.findOne({
      username: logname,
    });

    if (!user) {
      res.render("Account", { message: "Invalid username !!" });
    } else if (user && user.password != logpassword) {
      res.render("Account", { message: "Invalid password !!" });
    } else {
      res.status(200).render("index");
    }
  } catch (err) {
    res.status(400).send(err);
  }
});
