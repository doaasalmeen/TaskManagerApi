const express = require("express");

const app = express();

const tasks = [];

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello Express!");
});

app.get("/about", (req, res) => {
    res.send("Welcome to the Task Manager API");
})

app.get("/health", (req, res) => {
    res.json({
        status: "ok",
    });
})

app.get("/tasks", (req, res) => {
    res.json(tasks);
})

app.post("/tasks", (req, res) => {
    const task = {
        id : tasks.length + 1,
        title : req.body.title,
        completed : false
    };
    tasks.push(task);
    res.status(201).json(task);
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});