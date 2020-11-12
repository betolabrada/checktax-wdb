const database = require('../services/Database');

const baseQuery = 'SELECT * FROM Concepto';

const insertQuery = 'INSERT INTO Concepto (concepto) VALUES(:concepto)';

const deleteQuery = 'DELETE FROM Concepto WHERE idConcepto = :idConcepto';

const updateQuery = 'UPDATE Concepto SET concepto = :concepto WHERE idConcepto = :idConcepto';

async function find(context) {
    let query = baseQuery;
    let binds = {};

    if (context.idConcepto) {
        binds.idConcepto = context.idConcepto;
        query += '\nWHERE idConcepto = :idConcepto';
    }

    const result = await database.queryExecutor(query, binds);

    return result.rows;
}

async function insert(concepto) {
    let binds = Object.assign({}, concepto);
    const result = await database.queryExecutor(insertQuery, binds);
    return result;
}

async function deleteById(idConcepto) {
    let binds = { idConcepto };
    const result = await database.queryExecutor(deleteQuery, binds);
    return result;
}

async function update(context) {
    let binds = Object.assign({}, context);
    const result = await database.queryExecutor(updateQuery, binds);
    return result;
}

module.exports = { find, insert, deleteById, update};