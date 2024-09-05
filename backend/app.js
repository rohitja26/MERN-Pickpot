const express = require("express");
const mongoose = require('mongoose');

const cors = require('cors');
const MyError = require("./model/error");
const location_route = require("./routes/locations_route");
const user_route = require("./routes/users_route");
const app = express();

app.use(cors());
app.use(express.json()); //built in middle ware
app.use("/uploads/users", express.static(`${__dirname}\\uploads\\users`));

app.use("/api/locations", location_route); //location route middleware custom made
app.use("/api/users", user_route); //user route middleware custom made

app.use("*", (req, res, next) => {
  return next(new MyError("Cannot find path", 404));
});

app.use((error, req, res, next) => {
  //error middleware custom made
  if (res.headerSent) {
    next(error);
  }
  res.status(error.code || 500);
  res.json({
    result: "fail",
    message: error.message || "Something bad happened",
  });
});

mongoose.connect('mongodb+srv://jainrohit0002:qwert12345@cluster0.mvzwisx.mongodb.net/picpot?retryWrites=true&w=majority').then(
  () => {
    app.listen(5000, () => {
      console.log("server running @ 5000");
    });
  }).catch((error) => {
    console.log(error);
  });


//mongodb+srv://jainrohit0002:qwert12345@cluster0.mvzwisx.mongodb.net/picpot?retryWrites=true&w=majority