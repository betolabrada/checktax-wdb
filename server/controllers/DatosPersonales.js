const datosPersonales = require('../api/DatosPersonales');
const oracledb = require('oracledb');
const { renameKeys } = require('./renameKeys');

function renameAllKeys(op) {
    renameKeys(op, 'IDPER', 'idPer');
    renameKeys(op, 'RFC', 'rfc');
    renameKeys(op, 'curp', 'CURP');
    renameKeys(op, 'EDOCIVIL','edoCivil');
}

async function get(req, res, next) {
    try {
        const context = {};
        context.idPer = parseInt(req.params.idPer, 10);

        const rows = await datosPersonales.find(context);

        if (req.params.idPer) {
            if (rows.length === 1) {
                renameAllKeys(rows[0]);
                res.status(200).json(rows[0]);
            } else {
                res.status(404).end();
            }
        } else {
            console.log(rows);
            rows.forEach(row => { renameAllKeys(row) });
            res.status(200).json(rows);
        }
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }
}

async function post(req, res, next) {
    try {
        let datos = {
            rfc: req.body.rfc,
            curp: req.body.curp,
            edoCivil: req.body.edoCivil,
            rid:   { type: oracledb.STRING, dir: oracledb.BIND_OUT }
        };
        const result = await datosPersonales.insert(datos);
        res.status(201).json(result.outBinds);
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }

}

async function deleteDatosPer(req, res, next) {
    try {
        let idPer = parseInt(req.params.idPer, 10);
        const result = await datosPersonales.deleteById(idPer);
        res.status(201).end('Datos personales deleted successfully!');
    } catch (err) {
        res.status(404).end();
    }
}

async function put(req, res, next) {
    try {
        let context = {
            idPer: parseInt(req.params.idPer, 10),
            rfc: req.body.rfc,
            curp: req.body.curp,
            edoCivil: req.body.edoCivil
        };
        const result = await datosPersonales.update(context);
        res.status(201).end('Datos personales updated successfully!');
    } catch (err) {
        res.status(404).end();
    }
}

module.exports.get = get;
module.exports.post = post;
module.exports.deleteDatosPer = deleteDatosPer;
module.exports.put = put;