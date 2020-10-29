const database = require('mysql');
const db_config = require('../config/database.js');
//Connect to DB
const connection = database.createConnection(db_config);
connection.connect(err => {
    if(err) return err;
    console.log("Database connected");
})

module.exports = connection;