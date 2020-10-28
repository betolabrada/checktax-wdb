const database = require('../services/Database');

const baseQuery = 'SELECT * FROM valdefault';

const insertQuery = 'INSERT INTO users VALUES(:id, :first_name, :email)';

const deleteQuery = 'DELETE FROM users WHERE id = :id';

const updateQuery = 'UPDATE users SET id = :id, first_name = :first_name, email = :email WHERE id = :id';

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

async function insert(user) {
    let binds = Object.assign({}, user);
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

module.exports.find = find;
module.exports.insert = insert;
module.exports.deleteById = deleteById;
module.exports.update = update;