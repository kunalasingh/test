const mongoose = require("mongoose");
const fs = require("fs");
const Workout = require("../models/Workout");
const { pathToFileURL } = require("url");
require("dotenv").config({path: "../.env"});

//console.log(process.env.DB_HOST, process.env.DB_PORT, process.env.DB_NAME);
const url = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

mongoose
  .connect(url, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongoose Database Connected!"));

const workouts = JSON.parse(fs.readFileSync(`${__dirname}/workouts.json`));

//Import Data

const importData = async () => {
  try {
    exportData();
    await Workout.create(workouts);
    console.log("Data imported successfully!");
  } catch (er) {
    console.log(er);
  }
  process.exit();
};

// Delete Data

const deleteData = async () => {
  try {
    exportData();
    await Workout.deleteMany();
    console.log("Data deleted successfully!");
  } catch (er) {
    console.log(er);
  }
  process.exit();
};

//Copy Data
const exportData = async () => {
  try {
    console.log("inside export");
    let data = String(await Workout.find());
    console.log("data fetched", data);

    data = `------------------------------------------------------${Date.now()}
      ${data}`;
    fs.appendFileSync(`${__dirname}/backup.txt`, data, () => {
      console.log("inside write file");
    });
    console.log("data uploaded");
  } catch (er) {
    console.log(er);
  }
  process.exit();
};

//Run function from command Line
if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
} else if (process.argv[2] === "--export") {
  exportData();
} else {
  console.log("Command not suported.");
  process.exit();
}
