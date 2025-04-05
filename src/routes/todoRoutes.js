const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get('/', todoController.getAllTodos);
router.post('/add', todoController.createTodo);
router.post('/update/:id', todoController.updateTodo);
router.get('/delete/:id', todoController.deleteTodo);

module.exports = router;
