import express from "express";
import taskController from "../controllers/task.controller.js";
import { 
    createTaskSchema, 
    replaceTaskSchema, 
    taskIdSchema, 
    updateTaskSchema 
    } from 
    "../validators/task.validator.js";
import validate from "../middleware/validateTask.js";

const router = express.Router();

router.get(
    "/tasks", 
    taskController.getTasks
);
router.get(
    "/tasks/:id", 
    validate(taskIdSchema, "params"),
    taskController.getTaskById
);
router.post(
    "/tasks", 
    validate(createTaskSchema),
    taskController.createTask
);
router.put(
    "/tasks/:id", 
    validate(taskIdSchema, "params"),
    validate(replaceTaskSchema),
    taskController.replaceTask
);
router.patch(
    "/tasks/:id", 
    validate(taskIdSchema, "params"),
    validate(updateTaskSchema),
    taskController.updateTask);
router.delete(
    "/tasks/:id", 
    validate(taskIdSchema, "params"),
    taskController.deleteTask
);

export default router;