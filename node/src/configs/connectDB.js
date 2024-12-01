import mysql from 'mysql2';
const connect = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'baocao',
    password: ''
});
const pool = connect.promise();
export default pool;
