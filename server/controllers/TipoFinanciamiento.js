const tipoF = require('../api/TipoFinanciamiento');
const oracledb = require('oracledb');

async function get(req, res, next) {
    try {
        const context = {};
        context.idTipoFin = parseInt(req.params.idTipoFin, 10);

        const rows = await tipoF.find(context);

        if (req.params.idTipoFin) {
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
    try {
        let tipoFin = {
            tipoFin: req.body.tipoFin,
            tasa: req.body.tasa,
            anticipo: req.body.anticipo,
            apertura: req.body.apertura,
            deposito: req.body.deposito,
            vRescate: req.body.vRescate,
            tfValorRescate: req.body.tfValorRescate,
            descuento: req.body.descuento,
            admon: req.body.admon,
            tfadmon: req.body.tfadmon,
            gps: req.body.gps,
            tfGps: req.body.tfGps,
            seguroAuto: req.body.seguroAuto,
            tfSeguroAuto: req.body.tfSeguroAuto,
            seguroDeuda: req.body.seguroDeuda,
            tfSeguroDeuda: req.body.tfSeguroDeuda,
            liquidacion: req.body.liquidacion,
            ppTipo: req.body.ppTipo,
            rid:   { type: oracledb.STRING, dir: oracledb.BIND_OUT }
        };
        const result = await tipoF.insert(tipoFin);
        res.status(201).json(result.outBinds);
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }

}

async function deleteTipoFin(req, res, next) {
    try {
        let id = parseInt(req.params.idTipoFin, 10);
        const result = await tipoF.deleteById(id);
        res.status(201).end('Tipo financiamiento deleted successfully!');
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }
}

async function put(req, res, next) {
    try {
        let context = {
            idTipoFin: req.body.idTipoFin,
            tipoFin: req.body.tipoFin,
            tasa: req.body.tasa,
            anticipo: req.body.anticipo,
            apertura: req.body.apertura,
            deposito: req.body.deposito,
            vRescate: req.body.vRescate,
            tfValorRescate: req.body.tfValorRescate,
            descuento: req.body.descuento,
            admon: req.body.admon,
            tfAdmon: req.body.tfAdmon,
            gps: req.body.gps,
            tfGps: req.body.tfGps,
            seguroAuto: req.body.seguroAuto,
            tfSeguroAuto: req.body.tfSeguroAuto,
            seguroDeuda: req.body.seguroDeuda,
            tfSeguroDeuda: req.body.tfSeguroDeuda,
            liquidacion: req.body.liquidacion,
            ppTipo: req.body.ppTipo
        };
        console.log(context);
        const result = await tipoF.update(context);
        res.status(201).end('Tipo financiamiento updated successfully!');
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }
}

module.exports.get = get;
module.exports.post = post;
module.exports.deleteTipoFin = deleteTipoFin;
module.exports.put = put;