const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/productRoutes");

app.use(express.json());

app.use("/", userRouter);
app.use("/products", productRouter);

module.exports = app;
