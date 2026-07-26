const taskService = require('../services/task.service')

function getTasks (req, res) {
    const tasks = taskService.getTasks();
    return res.status(200).json(tasks);
}
function getTaskById (req, res){
    const id = Number(req.params.id);
    const task = taskService.getTaskById(id);
    if(!task){
        return res.status(404).json({
            message: "Task not found"
        });
    }
    return res.status(200).json(task);
}
function createTask (req, res) {
    const task = taskService.createTask(req.body.title)
    res.status(201).json(task);
}
function replaceTask(req, res){
    const id = Number(req.params.id);
    const task = taskService.replaceTask(id, req.body);
    if(!task){
        return res.status(404).json({
            message : "Task not found"
        });
    }
    return res.status(200).json(task);
}
function updateTask(req, res){
    const id = Number(req.params.id);
    const task = taskService.updateTask(id, req.body);
    if(!task){
        return res.status(404).json({
            message : "Task not found"
        });
    }
    return res.status(200).json(task);
}
function deleteTask(req, res){
    const id = Number(req.params.id);
    const deleted = taskService.deleteTask(id);
    if(!deleted){
        return res.status(404).json({
            message : "Task not found"
        });
    }
    return res.sendStatus(204);
}

module.exports = {
    getTasks,
    getTaskById,
    createTask,
    replaceTask,
    updateTask,
    deleteTask,
};