const database = require('../services/Database');

const baseQuery = 'SELECT * FROM LoteAutos';

const insertQuery = 'INSERT INTO LoteAutos (razonSocial, sinIVA, conIVA, lineaVenta, comision, sucursal, domicilio, asesor) ' +
                    'VALUES (:razonSocial, :sinIVA, :conIVA, :lineaVenta, :comision, :sucursal, :domicilio, :asesor) RETURNING id INTO :rid';

const deleteQuery = 'DELETE FROM LoteAutos WHERE id = :id';

const updateQuery = 'UPDATE LoteAutos SET razonSocial = :razonSocial, sinIVA = :sinIVA, conIVA = :conIVA, lineaVenta = :lineaVenta, ' +
                    'comision = :comision, sucursal = :sucursal, domicilio = :domicilio, asesor = :asesor WHERE id = :id';

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

async function insert(loteAutos) {
    let binds = Object.assign({}, loteAutos);
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

module.exports.insert = insert;
module.exports.find = find;
module.exports.deleteById = deleteById;
module.exports.update = update;