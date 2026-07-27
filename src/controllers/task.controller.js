import taskService from "../services/task.service.js";
import asyncHandler from "../utils/asyncHandler.js";

async function getTasks (req, res) {
    const tasks = await taskService.getTasks();
    return res.status(200).json(tasks);
}
async function getTaskById (req, res){
    const id = Number(req.params.id);
    const task = await taskService.getTaskById(id);
    if(!task){
        return res.status(404).json({
            message: "Task not found"
        });
    }
    return res.status(200).json(task);
}
async function createTask (req, res) {
    const task = await taskService.createTask(req.body.title);
    res.status(201).json(task);
}
async function replaceTask(req, res){
    const id = Number(req.params.id);
    const task = await taskService.replaceTask(id, req.body);
    if(!task){
        return res.status(404).json({
            message : "Task not found"
        });
    }
    return res.status(200).json(task);
}
async function updateTask(req, res){
    const id = Number(req.params.id);
    const task = await taskService.updateTask(id, req.body);
    if(!task){
        return res.status(404).json({
            message : "Task not found"
        });
    }
    return res.status(200).json(task);
}
async function deleteTask(req, res){
    const id = Number(req.params.id);
    const deletedTask = await taskService.deleteTask(id);
    if(!deletedTask){
        return res.status(404).json({
            message : "Task not found"
        });
    }
    return res.status(200).json(deletedTask);
}

export default {
    getTasks: asyncHandler(getTasks),
    getTaskById: asyncHandler(getTaskById),
    createTask: asyncHandler(createTask),
    replaceTask: asyncHandler(replaceTask),
    updateTask: asyncHandler(updateTask),
    deleteTask: asyncHandler(deleteTask),
};