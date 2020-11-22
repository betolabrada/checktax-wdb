const database = require('../services/Database');

const baseQuery = 'SELECT * FROM Producto';

const insertQuery = 'INSERT INTO Producto (producto) VALUES(:producto) RETURNING idProducto INTO :rid';

const deleteQuery = 'DELETE FROM Producto WHERE idProducto = :idProducto';

const updateQuery = 'UPDATE Producto SET producto = :producto WHERE idProducto = :idProducto'

const getTiposFinQuery = 'SELECT Producto.idProducto, Producto.producto, TipoFinanciamiento.* FROM Producto ' +
    ' JOIN ProductoTipoFinanciamiento ON Producto.idproducto = ProductoTipoFinanciamiento.idProducto ' +
    ' JOIN TipoFinanciamiento ON ProductoTipoFinanciamiento.idTipoFin = TipoFinanciamiento.idTipoFin ' +
    ' WHERE Producto.idProducto = :idProducto';

const getNameQuery = 'SELECT * FROM Producto WHERE producto = :producto';

async function findByName(context) {
    let query = getNameQuery;
    let binds = {};

    if (context.producto) {
        binds.producto = context.producto;
    }

    const result = await database.queryExecutor(query, binds);
    console.log(result.rows);
    return result.rows;
}

async function find(context) {
    let query = baseQuery;
    let binds = {};

    if (context.idProducto) {
        query = getTiposFinQuery;
        binds.idProducto = context.idProducto;
    }

    const result = await database.queryExecutor(query, binds);

    console.log('result.rows', result.rows);
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
module.exports.findByName = findByName;
