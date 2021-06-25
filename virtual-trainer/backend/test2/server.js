const connectDatabase = require("./database");
const app = require("./app");

const server = async () => {
  await connectDatabase();

  app.listen(4000, () => console.log("Server started at port 3004"));
};
server();
