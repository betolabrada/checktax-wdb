const database = require('../services/Database');

const baseQuery = 'SELECT * FROM DatosPersonales';

const insertQuery = 'INSERT INTO DatosPersonales (rfc, curp, edoCivil) VALUES(:rfc, :curp, :edoCivil)';

const deleteQuery = 'DELETE FROM DatosPersonales WHERE idPer = :idPer';

const updateQuery = 'UPDATE DatosPersonales SET rfc = :rfc, curp = :curp, edoCivil = :edoCivil WHERE idPer = :idPer';

async function find(context) {
    let query = baseQuery;
    let binds = {};

    if (context.idPer) {
        binds.idPer = context.idPer;
        query += '\nWHERE idPer = :idPer';
    }

    const result = await database.queryExecutor(query, binds);

    return result.rows;
}

async function insert(datos) {
    let binds = Object.assign({}, datos);
    const result = await database.queryExecutor(insertQuery, binds);
    return result;
}

async function deleteById(idPer) {
    let binds = { idPer };
    const result = await database.queryExecutor(deleteQuery, binds);
    return result;
}

async function update(context) {
    let binds = Object.assign({}, context);
    const result = await database.queryExecutor(updateQuery, binds);
    return result;
}

module.exports = { find, insert, deleteById, update};