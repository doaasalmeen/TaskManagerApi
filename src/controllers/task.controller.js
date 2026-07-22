const tasks = [];
function createTask (req, res) {
    const task = {
        id : tasks.length + 1,
        title : req.body.title,
        completed : false
    };
    tasks.push(task);
    res.status(201).json(task);
}
function getTasks (req, res) {
    res.json(tasks);
}

module.exports = {
    createTask,
    getTasks,
};