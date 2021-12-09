const express = require("express");
const server = express();
const cors = require("cors");
const helmet = require("helmet");

//GLOBACL MIDDLEWARE
server.use(express.json());

//IMPORT ROUTERS
const welcomeRouter = require("./welcome-router");
const jobsRouter = require("../jobs/jobs-router");

//SERVER endpoints --------->
server.use("/", welcomeRouter);
server.use("/api/jobs", jobsRouter);

//middleware for CATCH ERROR on all endpoints
server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "500 error: Something went wrong",
  });
});

module.exports = server;
