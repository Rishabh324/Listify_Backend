const Todo = require('../model/todoModel');

exports.getAllTodos = async (req, res, next) => {
    try {
        console.log("reached");
        const Todos = await Todo.find();
        console.log(Todos);
        res.status(201).json({
            status: 'success',
            data: {
                Todos
            }
        })
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'failed',
            message: err
        })
    }
}
exports.addNote = async (req, res, next) => {
    try {
        console.log(req.body);
        const newTodo = await Todo.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                newTodo
            }
        })
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'failed',
            message: err
        })
    }
}


exports.deleteTodo = async (req, res, next) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);
        res.status(201).json({
            status: 'success',
            data: {
                todo
            }
        })
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'failed',
            message: err
        })
    }
}

exports.updateTodo = async (req, res, next) => {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body);
        res.status(201).json({
            status: 'success',
            data: {
                todo
            }
        })
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'failed',
            message: err
        })
    }
}