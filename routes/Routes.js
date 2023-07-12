const express = require('express');
const todoController = require('../controllers/TodoController');
const userController = require('../controllers/UserController');
const router = express.Router();

router
    .route('/register')
    .post(userController.addUser);

router
    .route('/login')
    .get(userController.tryLogin);

router
    .route('/')
    .get(todoController.getAllTodos);
router
    .route('/save')
    .post(todoController.addNote);

router
    .route('/save/:id')
    .patch(todoController.updateTodo);

router
    .route('/delete/:id')
    .delete(todoController.deleteTodo);

module.exports = router;