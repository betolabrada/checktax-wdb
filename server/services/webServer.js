const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

dotenv.config(); 

function initWebServer() {
    
    //Middleware
    
    app.use(express.json());
    
    var whitelist = ['http://localhost:8080', 'http://localhost:3000'];
    var corsOptions = {
        origin: function (origin, callback) {
            if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
            } else {
            callback(new Error('Not allowed by CORS'))
            }
        },
        credentials: true
    };
    app.use(cors(corsOptions));
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, POST, DELETE');
        next();
      });
    app.use(bodyParser.json());

    //Route middleware
    app.use('/api/login', require('../routes/login.js'));


    app.listen(3000, () => console.log("Server up and running at port 3000"));
}
 
module.exports.initWebServer = initWebServer;

