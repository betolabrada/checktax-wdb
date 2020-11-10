const database = require('../services/Database');

const baseQuery = 'SELECT * FROM Impuestos';

const insertQuery = 'INSERT INTO Impuestos (iva, empresa, porcentaje) VALUES(:iva, :empresa, :porcentaje)';

const deleteQuery = 'DELETE FROM Impuestos WHERE id = :id';

const updateQuery = 'UPDATE Impuestos SET iva = :iva, empresa = :empresa, porcentaje = :porcentaje WHERE id = :id';

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

async function insert(impuestos) {
    let binds = Object.assign({}, impuestos);
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

/*
module.exports.find = find;
module.exports.insert = insert;
module.exports.deleteById = deleteById;
module.exports.update = update;
*/

module.exports = { find, insert, deleteById, update};