const database = require('../services/Database');

const baseQuery = 'SELECT * FROM Comunicacion';

const insertQuery = 'INSERT INTO Comunicacion (telOficina, telOtro, telCelular, mail) VALUES(:telOficina, :telOtro, :telCelular, :mail)';

const deleteQuery = 'DELETE FROM Comunicacion WHERE idCom = :idCom';

const updateQuery = 'UPDATE Comunicacion SET telOficina = :telOficina, telOtro = :telOtro, telCelular = :telCelular, mail = :mail WHERE idCom = :idCom';

async function find(context) {
    let query = baseQuery;
    let binds = {};

    if (context.idCom) {
        binds.idCom = context.idCom;
        query += '\nWHERE idCom = :idCom';
    }

    const result = await database.queryExecutor(query, binds);

    return result.rows;
}

async function insert(com) {
    let binds = Object.assign({}, com);
    const result = await database.queryExecutor(insertQuery, binds);
    return result;
}

async function deleteById(idCom) {
    let binds = { idCom };
    const result = await database.queryExecutor(deleteQuery, binds);
    return result;
}

async function update(context) {
    let binds = Object.assign({}, context);
    const result = await database.queryExecutor(updateQuery, binds);
    return result;
}

module.exports = { find, insert, deleteById, update};