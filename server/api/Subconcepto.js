const database = require('../services/Database');

const baseQuery = 'SELECT * FROM Subconcepto';

const insertQuery = 'INSERT INTO Subconcepto (subconcepto) VALUES(:subconcepto)';

const deleteQuery = 'DELETE FROM Subconcepto WHERE idSubconcepto = :idSubconcepto';

const updateQuery = 'UPDATE Subconcepto SET subconcepto = :subconcepto WHERE idSubconcepto = :idSubconcepto';

async function find(context) {
    let query = baseQuery;
    let binds = {};

    if (context.idSubconcepto) {
        binds.idSubconcepto = context.idSubconcepto;
        query += '\nWHERE idSubconcepto = :idSubconcepto';
    }

    const result = await database.queryExecutor(query, binds);

    return result.rows;
}

async function insert(subconcepto) {
    let binds = Object.assign({}, subconcepto);
    const result = await database.queryExecutor(insertQuery, binds);
    return result;
}

async function deleteById(idSubconcepto) {
    let binds = { idSubconcepto };
    const result = await database.queryExecutor(deleteQuery, binds);
    return result;
}

async function update(context) {
    let binds = Object.assign({}, context);
    const result = await database.queryExecutor(updateQuery, binds);
    return result;
}

module.exports = { find, insert, deleteById, update};