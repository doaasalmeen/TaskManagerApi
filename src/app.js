const express = require("express");
const taskRoute = require("./routes/task.routes");
const app = express();

app.use(express.json());
app.use(taskRoute);

module.exports = app;

