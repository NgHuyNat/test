const mysql = require('mysql2');

// Tạo kết nối với MySQL
const db = mysql.createConnection({
  host: 'localhost',       // Địa chỉ máy chủ
  user: 'nghuytan',            // Tên người dùng MySQL
  password: '', // Mật khẩu
  database: 'order food'  // Tên database
});

// Kết nối đến MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
    return;
  }
  console.log('Connected to MySQL!');
});

module.exports = db;
