const http = require('http');
const express = require('express');
const router = require('./Router');
const config = require('../config/WebServer');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');

let httpServer;

function initialize() {
    return new Promise((resolve, reject) => {
        const app = express();
        app.use(cookieParser());
        app.use(morgan('combined'));
        
        const corsOptions = {
            origin: true,
            credentials: true
        }
        app.use(cors(corsOptions));
        app.use(bodyParser.json());
        app.use('/v1/api', router);
        httpServer = http.createServer(app);


        httpServer.listen(config.port)
            .on('listening', () => {
                console.log(`Web server on, listening on port: ${config.port}`);
                resolve();
            })
            .on('error', (err) => {
                console.log(err);
                reject(err);
            });
    });
}

function close() {
    return new Promise((resolve, reject) => {
        httpServer.close((err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}

module.exports.initialize = initialize;
module.exports.close = close;