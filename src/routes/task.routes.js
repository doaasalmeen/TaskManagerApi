import express from "express";
import taskController from "../controllers/task.controller.js";
import validateTask from "../middleware/validateTask.js";
import validatePatch from "../middleware/validatePatch.js";
const router = express.Router();

router.get("/tasks", taskController.getTasks);
router.get("/tasks/:id", taskController.getTaskById);
router.post("/tasks", validateTask ,taskController.createTask);
router.put("/tasks/:id", validateTask, taskController.replaceTask);
router.patch("/tasks/:id", validatePatch, taskController.updateTask);
router.delete("/tasks/:id", taskController.deleteTask);

export default router;