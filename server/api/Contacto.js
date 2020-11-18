const database = require('../services/Database');

const baseQuery = 'SELECT * FROM Contacto';

const insertQuery = 'INSERT INTO Contacto (nombre, tipo, razonSocial, idPer, idCliente, idCom, idDom, recomendado, asesor, tipoAsesor, puesto, activo, web) ' +
                    'VALUES(:nombre, :tipo, :razonSocial, :idPer, :idCliente, :idCom, :idDom, :recomendado, :asesor, :tipoAsesor, :puesto, :activo, :web)';

const deleteQuery = 'DELETE FROM Contacto WHERE idContacto = :idContacto';

const updateQuery = 'UPDATE Contacto SET nombre = :nombre, tipo = :tipo, razonSocial = :razonSocial, idPer = :idPer, idCliente = :idCliente, idCom = :idCom, ' +
                    'idDom = :idDom, recomendado = :recomendado, asesor = :asesor, tipoAsesor = :tipoAsesor, puesto = :puesto, activo = :activo, ' +
                    'web = :web WHERE idContacto = :idContacto';

async function find(context) {
    let query = baseQuery;
    let binds = {};

    if (context.idDom) {
        binds.idDom = context.idDom;
        query += '\nWHERE idDom = :idDom';
    }

    const result = await database.queryExecutor(query, binds);

    return result.rows;
}

async function insert(domicilio) {
    let binds = Object.assign({}, domicilio);
    const result = await database.queryExecutor(insertQuery, binds);
    return result;
}

async function deleteById(idDom) {
    let binds = { idDom };
    const result = await database.queryExecutor(deleteQuery, binds);
    return result;
}

async function update(context) {
    let binds = Object.assign({}, context);
    const result = await database.queryExecutor(updateQuery, binds);
    return result;
}

module.exports = { find, insert, deleteById, update};