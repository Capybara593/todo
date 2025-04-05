const mysql = require('mysql2');

// Kết nối tới cơ sở dữ liệu MySQL
const connection = mysql.createConnection({
    host: 'mainline.proxy.rlwy.net',  // Chỉ định host
    port: 35272,                      // Chỉ định port riêng biệt
    user: 'root',
    password: 'LUksMktOQnfrxvjOhLWDjVsiZQajPSTx',
    database: 'railway'
  });
  

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database');
});

module.exports = connection;
