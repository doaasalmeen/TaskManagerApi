const express = require("express");
const taskRoute = require("./routes/task.routes");
const errorHandler = require("./middleware/errorHandler");
const logger = require("./middleware/logger");
const app = express();

app.use(express.json());
app.use(logger);
app.use(taskRoute);

app.use(errorHandler);
module.exports = app;

