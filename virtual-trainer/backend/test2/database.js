const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect("mongodb://localhost:27017/task1", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log("database connected...");
    });
};

module.exports = connectDatabase;
