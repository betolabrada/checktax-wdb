const fact = require('../api/Factura');
const oracledb = require('oracledb');
const { renameKeys } = require('./renameKeys');

function renameAllKeys(op) {
    renameKeys(op, 'IDFACTURA', 'idFactura');
    renameKeys(op, 'FFZC', 'ffzc');
    renameKeys(op, 'FFZI', 'ffzi');
    renameKeys(op, 'FFZG', 'ffzg');
    renameKeys(op, 'FFZA', 'ffza');
}

async function get(req, res, next) {
    try {
        const context = {};
        context.idFactura = parseInt(req.params.idFactura, 10);

        const rows = await fact.find(context);

        if (req.params.idFactura) {
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
    let factura = {
        ffzc: req.body.ffzc,
        ffzi: req.body.ffzi,
        ffzg: req.body.ffzg,
        ffza: req.body.ffza,
        rid:   { type: oracledb.STRING, dir: oracledb.BIND_OUT }
    };

    try {
        const result = await fact.insert(factura);
        res.status(201).json(result.outBinds);
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }

}

async function deleteFactura(req, res, next) {
    try {
        let idFactura = parseInt(req.params.idFactura, 10);
        const result = await fact.deleteById(idFactura);
        res.status(201).end('Factura deleted successfully!');
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }
}

async function put(req, res, next) {
    try {
        let context = {
            idFactura: parseInt(req.params.idFactura, 10),
            ffzc: req.body.ffzc,
            ffzi: req.body.ffzi,
            ffzg: req.body.ffzg,
            ffza: req.body.ffza
        };
        const result = await fact.update(context);
        res.status(201).end('Factura updated successfully!');
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }
}

module.exports.get = get;
module.exports.post = post;
module.exports.deleteFactura = deleteFactura;
module.exports.put = put;