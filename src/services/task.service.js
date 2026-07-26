const tasks = require('../data/tasks');
function getTasks(){
    return tasks;
}
function getTaskById(id){
    return tasks.find(task => task.id === id);
}
function createTask(title){
    const task = {
        id : tasks.length + 1,
        title,
        completed:false
    };
    tasks.push(task);
    return task;
}
function replaceTask(id, data){
    const index = tasks.findIndex(task => task.id === id);
    if(index === -1){
        return null;
    }
    const updatedTask = {
        id,
        title : data.title,
        completed : data.completed
    }
    tasks[index] = updatedTask;
    return updatedTask;
}
function updateTask(id, data){
    const task = tasks.find(task => task.id === id);
    if(!task){
        return null;
    }
    Object.assign(task, data);
    return task;
}
function deleteTask(id){
    const index = tasks.findIndex(task => task.id === id);
    if(index === -1){
        return false;
    }
    tasks.splice(index, 1);
    return true;
}

module.exports = {
    getTasks,
    getTaskById,
    createTask,
    replaceTask,
    updateTask,
    deleteTask,
};