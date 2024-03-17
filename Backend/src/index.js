require("express-async-errors");
const express = require("express");
const cors = require("cors");
const userRoute = require("./route/users.route");
const postRoute = require("./route/posts.route");
const sequelize = require("./config/db");
const syncDB = require("./config/syncDB");
require("dotenv").config();

const app = express();
const port = 8080 || process.env.port;
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/user", userRoute);
app.use("/post", postRoute);
app.get("/", (req, res) => {
  res.send("Hello This is Home Page");
});

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log("db connected");
    await syncDB();
    console.log("listeneing port", port);
  } catch (error) {
    console.log(error.message);
  }
});
