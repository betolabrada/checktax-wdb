const database = require('../services/Database');

const baseQuery = 'SELECT * FROM Financiamiento';

const insertQuery = 'INSERT INTO Financiamiento (idProducto, idConcepto, noPagos, periodicidad, totalPrimerPago, descripcion) ' +
                    'VALUES(:idProducto, :idConcepto, :noPagos, :periodicidad, :totalPrimerPago, :descripcion) RETURNING idFinanciamiento INTO :rid';

const deleteQuery = 'DELETE FROM Financiamiento WHERE idFinanciamiento = :idFinanciamiento';

const updateQuery = 'UPDATE Financiamiento SET idProducto = :idProducto, idConcepto = :idConcepto, noPagos = :noPagos, ' +
                    'periodicidad = :periodicidad, totalPrimerPago = :totalPrimerPago, descripcion = :descripcion WHERE idFinanciamiento = :idFinanciamiento';

async function find(context) {
    let query = baseQuery;
    let binds = {};

    if (context.idFinanciamiento) {
        binds.idFinanciamiento = context.idFinanciamiento;
        query += '\nWHERE idFinanciamiento = :idFinanciamiento';
    }

    const result = await database.queryExecutor(query, binds);

    return result.rows;
}

async function insert(financiamiento) {
    let binds = Object.assign({}, financiamiento);
    const result = await database.queryExecutor(insertQuery, binds);
    return result;
}

async function deleteById(idFinanciamiento) {
    let binds = { idFinanciamiento };
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