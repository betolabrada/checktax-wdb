const database = require('../services/Database');

const baseQuery = 'SELECT * FROM TipoFinanciamiento';

const insertQuery = 'INSERT INTO TipoFinanciamiento (' +
    'tipoFin, tasa, anticipo, apertura, deposito, vRescate, tfValorRescate, descuento, admon,' +
    ' tfAdmon, gps, tfGps, seguroAuto, tfSeguroAuto, seguroDeuda, tfSeguroDeuda, liquidacion, ppTipo) ' +
    'VALUES(:tipoFin, :tasa, :anticipo, :apertura, :deposito, :vRescate, :tfValorRescate, :descuento, :admon,' +
    ' :tfAdmon, :gps, :tfGps, :seguroAuto, :tfSeguroAuto, :seguroDeuda, :tfSeguroDeuda, :liquidacion, :ppTipo)';

const deleteQuery = 'DELETE FROM TipoFinanciamiento WHERE idTipoFin = :idTipoFin';

const updateQuery = 'UPDATE TipoFinanciamiento SET ' +
    'tipoFin = :tipoFin, tasa = :tasa, anticipo = :anticipo, apertura = :apertura, deposito = :deposito, vRescate = :vRescate, ' +
    'tfValorRescate = :tfValorRescate, descuento = :descuento, admon = :admon, tfAdmon = :tfAdmon, gps = :gps, tfGps = :tfGps, ' +
    'seguroAuto = :seguroAuto, tfSeguroAuto = :tfSeguroAuto, seguroDeuda = :seguroDeuda, tfSeguroDeuda = :tfSeguroDeuda, ' +
    'liquidacion = :liquidacion, ppTipo = :ppTipo WHERE idTipoFin = :idTipoFin';

async function find(context) {
    let query = baseQuery;
    let binds = {};

    if (context.idTipoFin) {
        binds.idTipoFin = context.idTipoFin;
        query += '\nWHERE idTipoFin = :idTipoFin';
    }

    const result = await database.queryExecutor(query, binds);

    return result.rows;
}

async function insert(producto) {
    let binds = Object.assign({}, producto);
    const result = await database.queryExecutor(insertQuery, binds);
    return result;
}

async function deleteById(idTipoFin) {
    let binds = { idTipoFin };
    const result = await database.queryExecutor(deleteQuery, binds);
    return result;
}

async function update(context) {
    console.log(updateQuery);
    let binds = Object.assign({}, context);
    const result = await database.queryExecutor(updateQuery, binds);
    return result;
}

module.exports = { find, insert, deleteById, update};