const Op = require('../api/Operacion');
const oracledb = require('oracledb');

async function get(req, res, next) {
    try {
        const context = {};
        context.numOperacion = parseInt(req.params.numOperacion, 10);

        const rows = await Op.find(context);

        if (req.params.numOperacion) {
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
    let operacion = {
        tipo: req.body.tipo,
        fecha: req.body.fecha,
        folio: req.body.folio,
        referenciaPagos: req.body.referenciaPagos,
        cliente: req.body.cliente,
        persona: req.body.persona,
        descripcion: req.body.descripcion,
        asesor: req.body.asesor,
        idFinanciamiento: req.body.idFinanciamiento,
        aplicarOp: req.body.aplicarOp,
        impuestos: req.body.impuestos,
        loteAutos: req.body.loteAutos,
        seguroAuto: req.body.seguroAuto,
        comentarios: req.body.comentarios,
        tfIva: req.body.tfIva,
        tfSeguro: req.body.tfSeguro,
        tfPago: req.body.tfPago,
        poliza: req.body.poliza,
        tfSeguroFin: req.body.tfSeguroFin,
        tipoUnidad: req.body.tipoUnidad,
        fechaPago: req.body.fechaPago,
        relPago: req.body.relPago,
        marca: req.body.marca,
        factura: req.body.factura,
        version: req.body.version,
        importe: req.body.importe,
        tipoFin: req.body.tipoFin,
        idCentroCosto: req.body.idCentroCosto,
        idFactura: req.body.idFactura,
        estatus: req.body.estatus,
        cancelado: req.body.cancelado,
        aplicPagos: req.body.aplicPagos,
        fFondeo: req.body.fFondeo,
        confirmado: req.body.confirmado,
        rid:   { type: oracledb.STRING, dir: oracledb.BIND_OUT }
    };

    try {
        const result = await Op.insert(operacion);
        res.status(201).json(result.outBinds);
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }

}

async function deleteOperacion(req, res, next) {
    try {
        let id = parseInt(req.params.numOperacion, 10);
        const result = await Op.deleteById(id);
        res.status(201).end('Operacion deleted successfully!');
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }
}

async function put(req, res, next) {
    try {
        let context = {
            numOperacion: parseInt(req.params.numOperacion, 10),
            tipo: req.body.tipo,
            fecha: req.body.fecha,
            folio: req.body.folio,
            referenciaPagos: req.body.referenciaPagos,
            cliente: req.body.cliente,
            persona: req.body.persona,
            descripcion: req.body.descripcion,
            asesor: req.body.asesor,
            idFinanciamiento: req.body.idFinanciamiento,
            aplicarOp: req.body.aplicarOp,
            impuestos: req.body.impuestos,
            loteAutos: req.body.loteAutos,
            seguroAuto: req.body.seguroAuto,
            comentarios: req.body.comentarios,
            tfIva: req.body.tfIva,
            tfSeguro: req.body.tfSeguro,
            tfPago: req.body.tfPago,
            poliza: req.body.poliza,
            tfSeguroFin: req.body.tfSeguroFin,
            tipoUnidad: req.body.tipoUnidad,
            fechaPago: req.body.fechaPago,
            relPago: req.body.relPago,
            marca: req.body.marca,
            factura: req.body.factura,
            version: req.body.version,
            importe: req.body.importe,
            tipoFin: req.body.tipoFin,
            idCentroCosto: req.body.idCentroCosto,
            idFactura: req.body.idFactura,
            estatus: req.body.estatus,
            cancelado: req.body.cancelado,
            aplicPagos: req.body.aplicPagos,
            fFondeo: req.body.fFondeo,
            confirmado: req.body.confirmado
        };
        const result = await Op.update(context);
        res.status(201).end('Operacion updated successfully!');
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }
}

module.exports.get = get;
module.exports.post = post;
module.exports.deleteOperacion = deleteOperacion;
module.exports.put = put;