const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/virtualTrainer";

const connectMongoDB = async () => {
  const connection = await mongoose.connect(url, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("Mongo database connected");
};

module.exports = connectMongoDB;
