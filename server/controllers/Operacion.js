const Op = require('../api/Operacion');
const oracledb = require('oracledb');
const { renameKeys } = require('./renameKeys');

function renameAllKeys(op) {
    renameKeys(op, 'NUMOPERACION', 'numOperacion');
    renameKeys(op, 'APLICAROP', 'aplicarOp');
    renameKeys(op, 'ASESOR', 'asesor');
    renameKeys(op, 'APLICPAGOS', 'aplicPagos');
    renameKeys(op, 'CANCELADO', 'cancelado');
    renameKeys(op, 'CLIENTE', 'cliente');
    renameKeys(op, 'COMENTARIOS', 'comentarios');
    renameKeys(op, 'CONFIRMADO', 'confirmado');
    renameKeys(op, 'DESCRIPCION', 'descripcion');
    renameKeys(op, 'ESTATUS', 'estatus');
    renameKeys(op, 'FACTURA', 'factura');
    renameKeys(op, 'FOLIO', 'folio');
    renameKeys(op, 'FECHA', 'fecha');
    renameKeys(op, 'FECHAPAGO', 'fechaPago');
    renameKeys(op, 'FFONDEO', 'fFondeo');
    renameKeys(op, 'IDFACTURA', 'idFactura');
    renameKeys(op, 'IDCENTROCOSTO', 'idCentroCosto');
    renameKeys(op, 'IDFINANCIAMIENTO', 'idFinanciamiento');
    renameKeys(op, 'IMPORTE', 'importe');
    renameKeys(op, 'IMPUESTOS', 'impuestos');
    renameKeys(op, 'LOTEAUTOS', 'loteAutos');
    renameKeys(op, 'MARCA', 'marca');
    renameKeys(op, 'PERSONA', 'persona');
    renameKeys(op, 'POLIZA', 'poliza');
    renameKeys(op, 'REFERENCIAPAGOS', 'referenciaPagos');
    renameKeys(op, 'RELPAGO', 'relPago');
    renameKeys(op, 'SEGUROAUTO', 'seguroAuto');
    renameKeys(op, 'TFIVA', 'tfIva');
    renameKeys(op, 'TFPAGO', 'tfPago');
    renameKeys(op, 'TFSEGURO', 'tfSeguro');
    renameKeys(op, 'TFSEGUROFIN', 'tfSeguroFin');
    renameKeys(op, 'TIPO', 'tipo');
    renameKeys(op, 'TIPOFIN', 'tipoFin');
    renameKeys(op, 'TIPOUNIDAD', 'tipoUnidad');
    renameKeys(op, 'VERSION', 'version');
}

async function get(req, res, next) {
    try {
        const context = {};
        context.numOperacion = parseInt(req.params.numOperacion, 10);

        const rows = await Op.find(context);

        if (req.params.numOperacion) {
            if (rows.length === 1) {
                const op = rows[0];
                renameAllKeys(op);
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
    let operacion = {
        numOperacion: parseInt(req.body.numOperacion, 10),
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
        tfIva: req.body.tfIva ? 'Y' : 'N',
        tfSeguro: req.body.tfSeguro ? 'Y' : 'N',
        tfPago: req.body.tfPago ? 'Y' : 'N',
        poliza: req.body.poliza,
        tfSeguroFin: req.body.tfSeguroFin ? 'Y' : 'N',
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
        cancelado: req.body.cancelado ? 'Y' : 'N',
        aplicPagos: req.body.aplicPagos ? 'Y' : 'N',
        fFondeo: req.body.fFondeo,
        confirmado: req.body.confirmado ? 'Y' : 'N',
        rid:   { type: oracledb.STRING, dir: oracledb.BIND_OUT }
    };
    if (operacion.fecha) {
        operacion.fecha = operacion.fecha.toLocaleUpperCase();
    }
    console.log('operacion', operacion);
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
        if (context.fecha) {
            context.fecha = context.fecha.toLocaleUpperCase();
        }
        console.log('context', context);
        const result = await Op.update(context);
        res.status(200).json({ message: 'Operation updated successfully!' });
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }
}

module.exports.get = get;
module.exports.post = post;
module.exports.deleteOperacion = deleteOperacion;
module.exports.put = put;
