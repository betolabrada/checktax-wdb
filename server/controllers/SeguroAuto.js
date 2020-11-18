const seg = require('../api/SeguroAuto');

async function get(req, res, next) {
    try {
        const context = {};
        context.id = parseInt(req.params.id, 10);

        const rows = await seg.find(context);

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
        res.status(404).end();
    }
}

async function post(req, res, next) {
    let seguro = {
        compania: req.body.compania,
        primaTotal: req.body.primaTotal,
        formaPago: req.body.formaPago,
        noPoliza: req.body.noPoliza,
        financiado: req.body.financiado,
        fechaInicio: req.body.fechaInicio,
        fechaFinal: req.body.fechaFinal,
        tipoUnidad: req.body.tipoUnidad,
        fechaPago: req.body.fechaPago,
        relacionPago: req.body.relacionPago,
        siniestros: req.body.siniestros,
        cantPolizas: req.body.cantPolizas,
        sigVcmto: req.body.sigVcmto,
        asegurado: req.body.asegurado,
        rid:   { type: oracledb.STRING, dir: oracledb.BIND_OUT }
    };

    try {
        const result = await seg.insert(seguro);
        res.status(201).end(result.outBinds);
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }

}

async function deleteSeguro(req, res, next) {
    try {
        let id = parseInt(req.params.id, 10);
        const result = await seg.deleteById(id);
        res.status(201).end('Seguro deleted successfully!');
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }
}

async function put(req, res, next) {
    try {
        let context = {
            id: parseInt(req.params.id, 10),
            compania: req.body.compania,
            primaTotal: req.body.primaTotal,
            formaPago: req.body.formaPago,
            noPoliza: req.body.noPoliza,
            financiado: req.body.financiado,
            fechaInicio: req.body.fechaInicio,
            fechaFinal: req.body.fechaFinal,
            tipoUnidad: req.body.tipoUnidad,
            fechaPago: req.body.fechaPago,
            relacionPago: req.body.relacionPago,
            siniestros: req.body.siniestros,
            cantPolizas: req.body.cantPolizas,
            sigVcmto: req.body.sigVcmto,
            asegurado: req.body.asegurado
        };
        const result = await seg.update(context);
        res.status(201).end('Seguro updated successfully!');
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }
}

module.exports.get = get;
module.exports.post = post;
module.exports.deleteSeguro = deleteSeguro;
module.exports.put = put;