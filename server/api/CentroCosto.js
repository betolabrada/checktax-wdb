const database = require('../services/Database');
//idCentroCosto "idCentroCosto", centroCosto "centroCosto"
const baseQuery = 'SELECT * FROM CentroCosto';

const insertQuery = 'INSERT INTO CentroCosto (centroCosto) VALUES(:centroCosto)';

const deleteQuery = 'DELETE FROM CentroCosto WHERE idCentroCosto = :idCentroCosto';

const updateQuery = 'UPDATE CentroCosto SET centroCosto = :centroCosto WHERE idCentroCosto = :idCentroCosto';

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

async function insert(centroCosto) {
    let binds = Object.assign({}, centroCosto);
    const result = await database.queryExecutor(insertQuery, binds);
    return result;
}

async function deleteById(idCentroCosto) {
    let binds = { idCentroCosto };
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