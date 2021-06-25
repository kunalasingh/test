const { query } = require("express");
const Workout = require("../models/Workout");

exports.getAllWorkouts = async (req, res) => {
  try {
    // console.log("req.query =  ", req.query);

    let queryObj = { ...req.query };
    // 1. Query Object
    const excludedFields = ["fields", "page", "sort", "limit"];
    excludedFields.forEach((field) => delete queryObj[field]);
    // console.log("queryObj =  ", queryObj);

    // 2. Filtering

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`);
    // console.log(JSON.parse(queryStr));
    let query = Workout.find(JSON.parse(queryStr));

    // 3. Sorting
    // console.log("sort: ", req.query.sort);
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      console.log(sortBy);
      query = query.sort(sortBy);
    } else {
      query = query.sort("title");
    }

    //4. Limiting Fields
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    } else {
      query = query.select("-__v");
    }

    //5. Pagination
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 3;
    const skip = (page - 1) * limit;

    query = query.skip(skip).limit(limit);

    if (req.query.page) {
      const numWorkouts = await Workout.countDocuments();
      if (page >= numWorkouts) throw new Error("Page is too high");
    }

    // Get Workouts
    const workouts = await query;
    //console.log("workout =  ", workouts);

    res.json({
      status: "success",
      workouts,
    });
  } catch (err) {
    console.log("getAllWorkouts Error! ", err);
    res.status(404).json({
      status: "failure",
      message: "Post didnt work",
      error: err,
    });
  }
};

exports.postWorkout = async (req, res) => {
  try {
    const workout = await Workout.create(req.body);
    res.json({
      status: "success",
      message: "Workout added successfully",
      workout,
    });
  } catch (err) {
    console.log("PostWorkout Error: ", err);
    res.status(404).json({
      status: "failure",
      message: "Post didnt work",
      error: err,
    });
  }
};

exports.getWorkout = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);
    res.status(200).json({
      status: "success",
      workout,
    });
  } catch (err) {
    console.log("getWorkout Error", err);
    res.status(500).json({
      status: "failure",
      message: "getWorkout Error",
      error: err,
    });
  }
};

exports.updateWorkout = async (req, res) => {
  try {
    const workout = await Workout.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      workout,
    });
  } catch (err) {
    console.log("PostWorkout Error: ", err);
    res.status(404).json({
      status: "failure",
      message: "Update didnt work",
      error: err,
    });
  }
};

exports.deleteWorkout = async (req, res) => {
  try {
    await Workout.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Workout Deleted successfully",
    });
  } catch (err) {
    console.log("PostWorkout Error: ", err);
    res.status(404).json({
      status: "failure",
      message: "Delete didnt work",
      error: err,
    });
  }
};
