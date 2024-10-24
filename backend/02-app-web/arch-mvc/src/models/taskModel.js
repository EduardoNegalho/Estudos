const tasks = [
    {
        id: Date.now().toString(),
        title: 'Estudar',
        content: 'Estudar node.js',
        createdAt: new Date(),
        updatedAt: new Date()
    }
];

const taskModel = {
    getAllTasks() {
        return tasks;
    },

    getTaskById(id) {
        return tasks.find(task => task.id === id);
    },

    createTask(title, content) {
        const task = {
            id: Date.now().toString(),
            title: title,
            content: content,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        return task;
    },

    saveTask(task) {
        tasks.push(task)
    },

    updateTask(id) {
        const index = tasks.findIndex(task => task.id === id);

        tasks[index] = { ...tasks[index], ...updatedtask, updatedAt: new Date() };
    },

    deleteTask(id) {
        tasks = tasks.filter(task => task.id === id);
    }
}

module.exports = taskModel;