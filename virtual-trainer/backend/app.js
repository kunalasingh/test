const express = require("express");
const workoutRouter = require("./routes/workoutRoutes");
const userRouter = require("./routes/userRoutes");
const clientRouter = require("./routes/clientRoutes");
const app = express();

// ---------------------------------  Middlewares ----------------------------
app.use(express.json());

//  --------------------------------- Routing -------------------------------------
app.use("/vt/api/v1/workouts", workoutRouter);
app.use("/vt/api/v1/users", userRouter);
app.use("/vt/api/v1/clients", clientRouter);

module.exports = app;
