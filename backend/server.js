import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';

const app = express();
const port = 3000;
app.use(cors());

app.listen(port, () => {
    console.log(`Server listening on port ${port} ...`);
});

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'react_crud'
});

app.get('/', (req, res) => {
    const sql = "SELECT * FROM user";
    connection.query(sql, (err, result) => {
        if (err) return res.json({Message: err});
        return res.json(result);
    });
});