const express = require("express");

const workoutController = require("../controllers/workoutControllers");

const router = express.Router();

router
  .route("/")
  .get(workoutController.getAllWorkouts)
  .post(workoutController.postWorkout);

router
  .route("/:id")
  .get(workoutController.getWorkout)
  .patch(workoutController.updateWorkout)
  .delete(workoutController.deleteWorkout);

module.exports = router;
