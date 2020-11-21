const database = require('../services/Database');

const baseQuery = 'SELECT * FROM Operacion';

const insertQuery = 'INSERT INTO Operacion (tipo, fecha, folio, referenciaPagos, cliente, persona, descripcion, asesor, idFinanciamiento, ' +
                    'aplicarOp, impuestos, loteAutos, seguroAuto, comentarios, tfIva, tfSeguro, tfPago, poliza, tfSeguroFin, tipoUnidad, ' +
                    'fechaPago, relPago, marca, factura, version, importe, tipoFin, idCentroCosto, idFactura, estatus, cancelado, aplicPagos, ' +
                    'fFondeo, confirmado) VALUES(:tipo, :fecha, :folio, :referenciaPagos, :cliente, :persona, :descripcion, :asesor, ' +
                    ':idFinanciamiento, :aplicarOp, :impuestos, :loteAutos, :seguroAuto, :comentarios, :tfIva, :tfSeguro, :tfPago, :poliza, ' +
                    ':tfSeguroFin, :tipoUnidad, :fechaPago, :relPago, :marca, :factura, :version, :importe, :tipoFin, :idCentroCosto, :idFactura, ' +
                    ':estatus, :cancelado, :aplicPagos, :fFondeo, :confirmado) RETURNING numOperacion INTO :rid';

const deleteQuery = 'DELETE FROM Operacion WHERE numOperacion = :numOperacion';

const updateQuery = 'UPDATE Operacion SET tipo = :tipo, fecha = :fecha, folio = :folio, referenciaPagos = :referenciaPagos, cliente = :cliente, ' +
                    'persona = :persona, descripcion = :descripcion, asesor = :asesor, idFinanciamiento = :idFinanciamiento, aplicarOp = :aplicarOp, ' +
                    'impuestos = :impuestos, loteAutos = :loteAutos, seguroAuto = :seguroAuto, comentarios = :comentarios, tfIva = :tfIva, ' +
                    'tfSeguro = :tfSeguro, tfPago = :tfPago, poliza = :poliza, tfSeguroFin = :tfSeguroFin, tipoUnidad = :tipoUnidad, fechaPago = :fechaPago, ' +
                    'relPago = :relPago, marca = :marca, factura = :factura, version = :version, importe = :importe, tipoFin = :tipoFin, ' +
                    'idCentroCosto = :idCentroCosto, idFactura = :idFactura, estatus = :estatus, cancelado = :cancelado, aplicPagos = :aplicPagos, ' +
                    'fFondeo = :fFondeo, confirmado = :confirmado WHERE numOperacion = :numOperacion';


async function find(context) {
    let query = baseQuery;
    let binds = {};

    if (context.numOperacion) {
        binds.numOperacion = context.numOperacion;
        query += '\nWHERE numOperacion = :numOperacion';
    }

    const result = await database.queryExecutor(query, binds);

    return result.rows;
}

async function insert(operacion) {
    let binds = Object.assign({}, operacion);
    const result = await database.queryExecutor(insertQuery, binds);
    return result;
}

async function deleteById(numOperacion) {
    let binds = { numOperacion };
    const result = await database.queryExecutor(deleteQuery, binds);
    return result;
}

async function update(context) {
    let binds = Object.assign({}, context);
    const result = await database.queryExecutor(updateQuery, binds);
    return result;
}

module.exports.insert = insert;
module.exports.find = find;
module.exports.deleteById = deleteById;
module.exports.update = update;