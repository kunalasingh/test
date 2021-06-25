const { findByIdAndUpdate } = require("../models/User");
const User = require("../models/User");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      users,
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: "get all users didnt work",
      error,
    });
  }
};
exports.postUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json({
      status: "success",
      user,
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: "post user didnt work",
      error,
    });
  }
};
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      status: "success",
      user,
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: "get user didnt work",
      error,
    });
  }
};
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      user,
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: "update user didnt work",
      error,
    });
  }
};
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: "delete user didnt work",
      error,
    });
  }
};
