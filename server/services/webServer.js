const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

dotenv.config(); 

function initWebServer() {
    
    //Middleware
    
    app.use(express.json());
    app.use(cors());
    app.use(bodyParser.json());

    //Route middleware
    app.get('/', (req, res) => {
        res.send("Hello world!");
    });
    app.use('/api/login', require('../routes/login.js'));


    app.listen(3000, () => console.log("Server up and running at port 3000"));
}
 
module.exports.initWebServer = initWebServer;

