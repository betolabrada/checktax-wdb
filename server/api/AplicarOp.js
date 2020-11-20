const database = require('../services/Database');

const baseQuery = 'SELECT * FROM AplicarOp';

const insertQuery = 'INSERT INTO AplicarOp (dummy) VALUES(:dummy) RETURNING id INTO :rid';

const deleteQuery = 'DELETE FROM AplicarOp WHERE id = :id';

const updateQuery = 'UPDATE AplicarOp SET dummy = :dummy WHERE id = :id';

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

async function insert(aplicarOp) {
    let binds = Object.assign({}, aplicarOp);
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