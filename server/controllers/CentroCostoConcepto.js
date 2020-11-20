const CentroCosto = require('../api/CentroCostoConcepto');
const oracledb = require('oracledb');

async function get(req, res, next) {
    try {
        const context = {};
        context.id = parseInt(req.params.id, 10);

        const rows = await CentroCosto.find(context);

        if (req.params.id) {
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
    let centroCostoConcepto = {
        idConcepto: req.body.idConcepto,
        idCentroCosto: req.body.idCentroCosto,
        rid:   { type: oracledb.STRING, dir: oracledb.BIND_OUT }
    };

    try {
        const result = await CentroCosto.insert(centroCostoConcepto);
        res.status(201).json(result.outBinds);
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }

}

async function deleteCentroCostoConcepto(req, res, next) {
    try {
        let id = parseInt(req.params.id, 10);
        const result = await CentroCosto.deleteById(id);
        res.status(201).end('CentroCostoConcepto deleted successfully!');
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }
}

async function put(req, res, next) {
    try {
        let context = {
            id: parseInt(req.params.id, 10),
            idConcepto: req.body.idConcepto,
            idCentroCosto: req.body.idCentroCosto,
        };
        const result = await CentroCosto.update(context);
        res.status(201).end('CentroCostoConcepto updated successfully!');
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }
}

module.exports.get = get;
module.exports.post = post;
module.exports.deleteCentroCostoConcepto = deleteCentroCostoConcepto;
module.exports.put = put;