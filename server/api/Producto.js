const database = require('../services/Database');

const baseQuery = 'SELECT * FROM Producto';

const insertQuery = 'INSERT INTO Producto (producto) VALUES(:producto) RETURNING idProducto INTO :rid';

const deleteQuery = 'DELETE FROM Producto WHERE idProducto = :idProducto';

const updateQuery = 'UPDATE Producto SET producto = :producto WHERE idProducto = :idProducto';

async function find(context) {
    let query = baseQuery;
    let binds = {};

    if (context.idProducto) {
        binds.idProducto = context.idProducto;
        query += '\nWHERE idProducto = :idProducto';
    }

    const result = await database.queryExecutor(query, binds);

    return result.rows;
}

async function insert(producto) {
    let binds = Object.assign({}, producto);
    const result = await database.queryExecutor(insertQuery, binds);
    return result;
}

async function deleteById(idProducto) {
    let binds = { idProducto };
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