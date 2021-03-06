require('dotenv').config();

const dbConfig = require('./config/Database');
const webServer = require('./services/WebServer');
const db = require('./services/Database');


process.env.UV_THREADPOOL_SIZE = dbConfig.pool.poolMax + 4; // 4 default numThreads nodejs

async function startup() {
    console.log('Initializing database connection...');
    try {
        await db.initialize();
        console.log('Database connected succesfully !');
    } catch (err) {
        console.log('Failed to connect: ', err);
        process.exit(1);
    }

    console.log('Initializing web server...');
    try {
        await webServer.initialize();
    } catch (err) {
        console.log(err);

        process.exit(1);
    }
}

async function shutdown(e) {
    let err = e;

    console.log('Shutting down the db connection...');
    try {
        await db.close();
    } catch (e) {
        err = err || e;
        console.log('Failed to close the db connection', e);
    }

    console.log('Shutting down the server...');
    try {
        await webServer.close();
    } catch (err2) {
        console.log('Fail to shutdown', err2);
        err = err || err2
    }

    console.log('Exiting process');
    if (err) {
        process.exit(1);
    } else {
        process.exit(0);
    }
}

process.on('SIGTERM', () => {
    shutdown();
});

process.on('SIGINT', () => {
    shutdown();
});

process.on('uncaughtException', (err) => {
    console.log('Uncaught Exception: ', err);
    shutdown();
});

startup();
