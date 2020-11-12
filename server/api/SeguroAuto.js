const database = require('../services/Database');

const baseQuery = 'SELECT * FROM SeguroAuto';

const insertQuery = 'INSERT INTO SeguroAuto (compania, primaTotal, formaPago, noPoliza, financiado, ' +
    'fechaInicio, fechaFinal, tipoUnidad, fechaPago, relacionPago, siniestros, cantPolizas, sigVcmto, ' +
    'asegurado) VALUES(:compania, :primaTotal, :formaPago, :noPoliza, :financiado, :fechaInicio, ' +
    ':fechaFinal, :tipoUnidad, :fechaPago, :relacionPago, :siniestros, :cantPolizas, :sigVcmto, :asegurado)';

const deleteQuery = 'DELETE FROM SeguroAuto WHERE id = :id';

const updateQuery = 'UPDATE SeguroAuto SET compania = :compania, primaTotal = :primaTotal, formaPago = :formaPago, ' +
    'noPoliza = :noPoliza, financiado = :financiado, fechaInicio = :fechaInicio, fechaFinal = :fechaFinal, ' +
    'tipoUnidad = :tipoUnidad, fechaPago = :fechaPago, relacionPago = :relacionPago, siniestros = :siniestros, ' +
    'cantPolizas = :cantPolizas, sigVcmto = :sigVcmto, asegurado = :asegurado WHERE id = :id';

async function find(context) {
    let query = baseQuery;
    let binds = {};

    if (context.id) {
        binds.id = context.id;
        query += '\nWHERE id = :id';
    }

    const result = await database.queryExecutor(query, binds);

    return result.rows;
}

async function insert(seguro) {
    let binds = Object.assign({}, seguro);
    const result = await database.queryExecutor(insertQuery, binds);
    return result;
}

async function deleteById(id) {
    let binds = { id };
    const result = await database.queryExecutor(deleteQuery, binds);
    return result;
}

async function update(context) {
    let binds = Object.assign({}, context);
    const result = await database.queryExecutor(updateQuery, binds);
    return result;
}

module.exports = { find, insert, deleteById, update};