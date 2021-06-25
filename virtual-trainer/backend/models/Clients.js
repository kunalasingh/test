const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "../.env" });

//console.log("test", process.env.DB_HOST);

const ClientsSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "username is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
});

ClientsSchema.methods.getToken = (id) => {
  const token = jwt.sign(
    { exp: Math.floor(Date.now() / 1000) + 60 * 15, id },
    `${process.env.JWT_SECRET}`
  );
  console.log("Token:", token);
  return token;
};

const Clients = mongoose.model("Client", ClientsSchema);

module.exports = Clients;
