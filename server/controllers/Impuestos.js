const imp = require('../api/Impuestos');
const oracledb = require('oracledb');
const { renameKeys } = require('./renameKeys');

function renameAllKeys(op) {
    renameKeys(op, 'ID', 'id');
    renameKeys(op, 'IVA', 'iva');
    renameKeys(op, 'EMPRESA', 'empresa');
    renameKeys(op, 'PORCENTAJE', 'porcentaje');
}

async function get(req, res, next) {
    try {
        const context = {};
        context.id = parseInt(req.params.id, 10);

        const rows = await imp.find(context);

        if (req.params.id) {
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
        res.status(404).end();
    }
}

async function post(req, res, next) {
    let impuestos = {
        iva: req.body.iva,
        empresa: req.body.empresa,
        porcentaje: req.body.porcentaje,
        rid:   { type: oracledb.STRING, dir: oracledb.BIND_OUT }
    };

    try {
        const result = await imp.insert(impuestos);
        res.status(201).json(result.outBinds);
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }

}

async function deleteImpuestos(req, res, next) {
    try {
        let id = parseInt(req.params.id, 10);
        const result = await imp.deleteById(id);
        res.status(201).end('Impuestos deleted successfully!');
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }
}

async function put(req, res, next) {
    try {
        let context = {
            id: parseInt(req.params.id, 10),
            iva: req.body.iva,
            empresa: req.body.empresa,
            porcentaje: req.body.porcentaje
        };
        const result = await imp.update(context);
        res.status(201).end('Impuestos updated successfully!');
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }
}

module.exports.get = get;
module.exports.post = post;
module.exports.deleteImpuestos = deleteImpuestos;
module.exports.put = put;