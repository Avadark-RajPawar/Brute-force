const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/ECommerce", {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex:true
  })
  .then(() => {
    console.log(`Connected to the database successfully`);
  })
  .catch(() => {
    console.log(`Failed to connect`);
  });
