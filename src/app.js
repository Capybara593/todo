const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const todoRoutes = require('./routes/todoRoutes');
const Todo = require('./models/todoModel');

// Khởi tạo ứng dụng Express
const app = express();

// Cấu hình để sử dụng body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Cấu hình thư mục tĩnh
app.use(express.static(path.join(__dirname, 'public')));

// Định nghĩa view engine (EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Khởi tạo bảng Todo
Todo.createTable();

// Sử dụng các route
app.use('/', todoRoutes);

// Khởi tạo server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
