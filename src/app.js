import express from "express";
import router from "./routes/task.routes.js";
import errorHandler from "./middleware/errorHandler.js";
import logger from "./middleware/logger.js";
const app = express();

app.use(express.json());
app.use(logger);
app.use(router);

app.use(errorHandler);
export default app;

