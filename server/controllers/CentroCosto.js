const centroCost = require('../api/CentroCosto');
const oracledb = require('oracledb');
const { renameKeys } = require('./renameKeys');

function renameAllKeys(op) {
    renameKeys(op, 'IDCENTROCOSTO', 'idCentroCosto');
    renameKeys(op, 'CENTROCOSTO', 'centroCosto');
}

async function get(req, res, next) {
    try {
        const context = {};
        context.idCentroCosto = parseInt(req.params.idCentroCosto, 10);

        const rows = await centroCost.find(context);

        if (req.params.idCentroCosto) {
            if (rows.length === 1) {
                renameAllKeys(rows[0]);
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
    let centroCosto = {
        centroCosto: req.body.centroCosto,
        rid:   { type: oracledb.STRING, dir: oracledb.BIND_OUT }
    };

    try {
        const result = await centroCost.insert(centroCosto);
        res.status(201).json(result.outBinds);
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }

}

async function deleteCentroCosto(req, res, next) {
    try {
        let idCentroCosto = parseInt(req.params.idCentroCosto, 10);
        const result = await centroCost.deleteById(idCentroCosto);
        res.status(201).end('Centro costo deleted successfully!');
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }
}

async function put(req, res, next) {
    try {
        let context = {
            idCentroCosto: parseInt(req.params.idCentroCosto, 10),
            centroCosto: req.body.centroCosto
        };
        const result = await centroCost.update(context);
        res.status(201).end('Centro costo updated successfully!');
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }
}

module.exports.get = get;
module.exports.post = post;
module.exports.deleteCentroCosto = deleteCentroCosto;
module.exports.put = put;