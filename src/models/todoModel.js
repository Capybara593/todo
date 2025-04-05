const db = require('../config/db');

// Tạo bảng todo nếu chưa tồn tại
const createTable = () => {
  const query = `CREATE TABLE IF NOT EXISTS todos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    task VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT FALSE
  )`;

  db.query(query, (err) => {
    if (err) throw err;
    console.log('Todos table created or already exists');
  });
};

// Thêm Todo mới
const addTodo = (task, callback) => {
  const query = 'INSERT INTO todos (task) VALUES (?)';
  db.query(query, [task], callback);
};

// Lấy danh sách Todo
const getTodos = (callback) => {
  const query = 'SELECT * FROM todos';
  db.query(query, callback);
};

// Xóa Todo theo ID
const deleteTodo = (id, callback) => {
  const query = 'DELETE FROM todos WHERE id = ?';
  db.query(query, [id], callback);
};

// Cập nhật Todo
const updateTodo = (id, completed, callback) => {
  const query = 'UPDATE todos SET completed = ? WHERE id = ?';
  db.query(query, [completed, id], callback);
};

module.exports = { createTable, addTodo, getTodos, deleteTodo, updateTodo };
