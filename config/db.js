const mysql = require('mysql2/promise');
require('dotenv').config();

let dbStatus = {
    isConnected: false,
    message: 'Đang kết nối đến database...',
    error: null
};

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    charset: 'utf8mb4',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Test kết nối
pool.getConnection()
    .then(connection => {
        dbStatus.isConnected = true;
        dbStatus.message = 'Kết nối database thành công!';
        dbStatus.error = null;
        console.log(dbStatus.message);
        connection.release();
    })
    .catch(err => {
        dbStatus.isConnected = false;
        dbStatus.message = 'Lỗi kết nối database';
        dbStatus.error = err.message;
        console.error('Lỗi kết nối:', err);
    });

module.exports = {
    pool,
    query: (text, params) => pool.query(text, params),
    dbStatus
}; 