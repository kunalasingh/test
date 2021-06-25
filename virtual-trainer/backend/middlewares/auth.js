const Client = require("../models/Clients");
const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
  console.log(req.headers);
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    const token = req.headers.authorization.split(" ")[1];
    console.log("Extracted token", token);
    console.log("decode token here...");

    var decoded = jwt.verify(token, `${process.env.JWT_SECRET}`);
    console.log(decoded); // bar
    let user = await User.findById(decoded.id);

    req.user = user;
    console.log("Found user", user);
    next();
  }

  // User is availabe in request object
  req.user = user;
  console.log("Found user", user);
  next();
};
