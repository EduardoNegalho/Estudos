const taskModel = require("../models/taskModel");

const taskController = {
    index: (req, res) => {
        const tasks = taskModel.getAllTasks();
        res.render("index", { tasks });
    },

    show: (req, res) => {
        const id = req.params.id;
        const task = taskModel.getTaskById(id);
        res.render('task', {task});
    }
}

module.exports = taskController;
