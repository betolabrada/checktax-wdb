const domicilio = require('../api/Domicilio');
const oracledb = require('oracledb');
const { renameKeys } = require('./renameKeys');

function renameAllKeys(op) {
    renameKeys(op, 'IDDOM', 'idDom');
    renameKeys(op, 'CALLE', 'calle');
    renameKeys(op, 'COLONIA', 'colonia');
    renameKeys(op, 'NOEXT', 'noExt');
    renameKeys(op, 'NOINT', 'noInt');
    renameKeys(op, 'CIUDAD', 'ciudad');
    renameKeys(op, 'CP', 'cp');
}

async function get(req, res, next) {
    try {
        const context = {};
        context.idDom = parseInt(req.params.idDom, 10);

        const rows = await domicilio.find(context);

        if (req.params.idDom) {
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
    try {
        let dom = {
            calle: req.body.calle,
            colonia: req.body.colonia,
            noExt: req.body.noExt,
            noInt: req.body.noInt,
            ciudad: req.body.ciudad,
            cp: req.body.cp,
            rid:   { type: oracledb.STRING, dir: oracledb.BIND_OUT }
        };
        const result = await domicilio.insert(dom);
        res.status(201).json(result.outBinds);
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }

}

async function deleteDom(req, res, next) {
    try {
        let idDom = parseInt(req.params.idDom, 10);
        const result = await domicilio.deleteById(idDom);
        res.status(201).end('Domicilio deleted successfully!');
    } catch (err) {
        res.status(404).end();
    }
}

async function put(req, res, next) {
    try {
        let context = {
            idDom: parseInt(req.params.idDom, 10),
            calle: req.body.calle,
            colonia: req.body.colonia,
            noExt: req.body.noExt,
            noInt: req.body.noInt,
            ciudad: req.body.ciudad,
            cp: req.body.cp
        };
        const result = await domicilio.update(context);
        res.status(201).end('Domicilio updated successfully!');
    } catch (err) {
        res.status(404).end();
    }
}

module.exports.get = get;
module.exports.post = post;
module.exports.deleteDom = deleteDom;
module.exports.put = put;