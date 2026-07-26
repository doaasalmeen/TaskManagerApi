const express = require("express");

const router = express.Router();

const taskController = require("../controllers/task.controller");
const validateTask = require("../middleware/validateTask");

router.get("/tasks", taskController.getTasks);
router.get("/tasks/:id", taskController.getTaskById);
router.post("/tasks", validateTask ,taskController.createTask);
router.put("/tasks/:id", validateTask, taskController.replaceTask);
router.patch("/tasks/:id", validateTask, taskController.updateTask);
router.delete("/tasks/:id", taskController.deleteTask);

module.exports = router;