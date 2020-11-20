const loteA = require('../api/LoteAutos');
const oracledb = require('oracledb');

async function get(req, res, next) {
    try {
        const context = {};
        context.id = parseInt(req.params.id, 10);

        const rows = await loteA.find(context);

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
    let loteAutos = {
        razonSocial: req.body.razonSocial,
        sinIVA: req.body.sinIVA,
        conIVA: req.body.conIVA,
        lineaVenta: req.body.lineaVenta,
        comision: req.body.comision,
        sucursal: req.body.sucursal,
        domicilio: req.body.domicilio,
        asesor: req.body.asesor,
        rid:   { type: oracledb.STRING, dir: oracledb.BIND_OUT }
    };

    try {
        const result = await loteA.insert(loteAutos);
        res.status(201).json(result.outBinds);
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }

}

async function deleteLoteAutos(req, res, next) {
    try {
        let id = parseInt(req.params.id, 10);
        const result = await loteA.deleteById(id);
        res.status(201).end('Lote autos deleted successfully!');
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }
}

async function put(req, res, next) {
    try {
        let context = {
            id: parseInt(req.params.id, 10),
            razonSocial: req.body.razonSocial,
            sinIVA: req.body.sinIVA,
            conIVA: req.body.conIVA,
            lineaVenta: req.body.lineaVenta,
            comision: req.body.comision,
            sucursal: req.body.sucursal,
            domicilio: req.body.domicilio,
            asesor: req.body.asesor,
        };
        const result = await tipoFin.update(context);
        res.status(201).end('Lote autos updated successfully!');
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }
}

module.exports.get = get;
module.exports.post = post;
module.exports.deleteLoteAutos = deleteLoteAutos;
module.exports.put = put;