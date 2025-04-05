const Todo = require('../models/todoModel');

// Hiển thị danh sách Todo
const getAllTodos = (req, res) => {
  Todo.getTodos((err, results) => {
    if (err) throw err;
    res.render('index', { todos: results });
  });
};

// Thêm Todo mới
const createTodo = (req, res) => {
  const { task } = req.body;
  Todo.addTodo(task, (err) => {
    if (err) throw err;
    res.redirect('/');
  });
};

// Xóa Todo
const deleteTodo = (req, res) => {
  const { id } = req.params;
  Todo.deleteTodo(id, (err) => {
    if (err) throw err;
    res.redirect('/');
  });
};

// Cập nhật trạng thái Todo
const updateTodo = (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  Todo.updateTodo(id, completed, (err) => {
    if (err) throw err;
    res.redirect('/');
  });
};

module.exports = { getAllTodos, createTodo, deleteTodo, updateTodo };
