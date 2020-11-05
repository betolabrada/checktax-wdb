const oracle = require('oracledb');
const dbConfig = require('../config/Database');

async function initialize() {
    const pool = await oracle.createPool(dbConfig.pool);
}

async function close() {
    await oracle.getPool().close();
}

function queryExectutor(statement, bind = [], opts = {}) {
    return new Promise(async (resolve, reject) => {
        let conn;

        opts.outFormat = oracle.OBJECT;
        opts.autoCommit = true;

        try {
            conn = await oracle.getConnection();
            const result = await conn.execute(statement, bind, opts);
            resolve(result);
        } catch (err) {
            reject(err);
        } finally {
            if (conn) {
                try {
                    await conn.close();
                } catch(errClose) {
                    console.log(errClose);
                }
            }
        }
    });
}

module.exports.initialize = initialize;
module.exports.close = close;
module.exports.queryExecutor = queryExectutor;