const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'bookuter',
});

db.connect((err) => {
    if (!err) {
        console.log('Connected Sucessfully');
    }
    else {
        console.log('Connected Failed', err.message);
    }
});

module.exports = db;
