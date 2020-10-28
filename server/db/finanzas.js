const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'restsql'
});

connection.connect(err => {
    if(err) return err;
    console.log("Database connected");
})