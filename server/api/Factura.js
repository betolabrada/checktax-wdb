const database = require('../services/Database');

const baseQuery = 'SELECT * FROM Factura';

const insertQuery = 'INSERT INTO Factura (ffzc, ffzi, ffzg, ffza) VALUES (:ffzc, :ffzi, :ffzg, :ffza) RETURNING idFactura INTO :rid';

const deleteQuery = 'DELETE FROM Factura WHERE idFactura = :idFactura';

const updateQuery = 'UPDATE Factura SET ffzc = :ffzc, ffzi = :ffzi, ffzg = :ffzg, ffza = :ffza WHERE idFactura = :idFactura';

async function find(context) {
    let query = baseQuery;
    let binds = {};

    if (context.idFactura) {
        binds.idFactura = context.idFactura;
        query += '\nWHERE idFactura = :idFactura';
    }

    const result = await database.queryExecutor(query, binds);

    return result.rows;
}

async function insert(factura) {
    let binds = Object.assign({}, factura);
    const result = await database.queryExecutor(insertQuery, binds);
    return result;
}

async function deleteById(idFactura) {
    let binds = { idFactura };
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