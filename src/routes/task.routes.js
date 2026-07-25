const express = require("express");

const router = express.Router();

const taskController = require("../controllers/task.controller");
const validateTask = require("../middleware/validateTask");

router.get("/tasks", taskController.getTasks);
router.post("/tasks", validateTask ,taskController.createTask);

module.exports = router;