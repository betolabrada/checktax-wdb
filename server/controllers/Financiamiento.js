const Fin = require('../api/Financiamiento');
const oracledb = require('oracledb');

async function get(req, res, next) {
    try {
        const context = {};
        context.idFinanciamiento = parseInt(req.params.idFinanciamiento, 10);

        const rows = await Fin.find(context);

        if (req.params.idFinanciamiento) {
            if (rows.length === 1) {
                console.log(rows[0]);
                res.status(200).json(rows[0]);
            } else {
                res.status(404).end();
            }
        } else {
            console.log(rows);
            res.status(200).json(rows);
        }
    } catch (err) {
        console.log(err);
        next(err);
    }
}

async function post(req, res, next) {
    let financimiento = {
        idProducto: req.body.idProducto,
        idConcepto: req.body.idConcepto,
        noPagos: req.body.noPagos,
        periodicidad: req.body.periodicidad,
        totalPrimerPago: req.body.totalPrimerPago,
        descripcion: req.body.descripcion,
        rid:   { type: oracledb.STRING, dir: oracledb.BIND_OUT }
    };

    try {
        const result = await Fin.insert(financimiento);
        res.status(201).json(result.outBinds);
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }

}

async function deleteFinanciamiento(req, res, next) {
    try {
        let id = parseInt(req.params.idFinanciamiento, 10);
        const result = await Fin.deleteById(id);
        res.status(201).end('Financiamiento deleted successfully!');
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }
}

async function put(req, res, next) {
    try {
        let context = {
            idFinanciamiento: parseInt(req.params.idFinanciamiento, 10),
            idProducto: req.body.idProducto,
            idConcepto: req.body.idConcepto,
            noPagos: req.body.noPagos,
            periodicidad: req.body.periodicidad,
            totalPrimerPago: req.body.totalPrimerPago,
            descripcion: req.body.descripcion
        };
        const result = await Fin.update(context);
        res.status(201).end('Financiamiento updated successfully!');
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }
}

module.exports.get = get;
module.exports.post = post;
module.exports.deleteFinanciamiento = deleteFinanciamiento;
module.exports.put = put;