const app = require("./app");
const connectMongoDB = require("./db");
require("dotenv").config();

const server = async () => {
  await connectMongoDB();

  app.listen(3000, () => {
    console.log("Server listening on port 3000");
  });
};

server();
