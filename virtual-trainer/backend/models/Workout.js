const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title is required"],
  },
  duration: Number,
  description: String,
  difficulty: String,
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
