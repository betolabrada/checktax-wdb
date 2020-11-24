const AplOp = require('../api/AplicarOp');
const oracledb = require('oracledb');
const { renameKeys } = require('./renameKeys');

function renameAllKeys(op) {
    renameKeys(op, 'ID', 'id');
    renameKeys(op, 'CHEQUERA', 'chequera');
    renameKeys(op, 'SUCURSAL', 'sucursal');
}

async function get(req, res, next) {
    try {
        const context = {};
        context.id = parseInt(req.params.id, 10);

        const rows = await AplOp.find(context);

        if (req.params.id) {
            if (rows.length === 1) {
                renameAllKeys(rows[0])
                res.status(200).json(rows[0]);
            } else {
                res.status(404).end();
            }
        } else {
            console.log(rows);
            rows.forEach(row => { renameAllKeys(row); });
            res.status(200).json(rows);
        }
    } catch (err) {
        console.log(err);
        next(err);
    }
}

async function post(req, res, next) {
    let aplicarOp = {
        dummy: req.body.dummy,
        rid:   { type: oracledb.STRING, dir: oracledb.BIND_OUT }
    };

    try {
        const result = await AplOp.insert(aplicarOp);
        res.status(201).json(result.outBinds);
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }

}

async function deleteAplicarOp(req, res, next) {
    try {
        let id = parseInt(req.params.id, 10);
        const result = await AplOp.deleteById(id);
        res.status(201).end('AplicarOp deleted successfully!');
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }
}

async function put(req, res, next) {
    try {
        let context = {
            id: parseInt(req.params.id, 10),
            dummy: req.body.dummy
        };
        const result = await AplOp.update(context);
        res.status(201).end('AplicarOp updated successfully!');
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }
}

module.exports.get = get;
module.exports.post = post;
module.exports.deleteAplicarOp = deleteAplicarOp;
module.exports.put = put;