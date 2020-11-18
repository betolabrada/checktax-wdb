const database = require('../services/Database');

const baseQuery = 'SELECT * FROM Contacto';

const insertQuery = 'INSERT INTO Contacto (nombre, tipo, razonSocial, idPer, idCliente, idCom, idDom, recomendado, asesor, tipoAsesor, puesto, activo, web) ' +
                    'VALUES(:nombre, :tipo, :razonSocial, :idPer, :idCliente, :idCom, :idDom, :recomendado, :asesor, :tipoAsesor, :puesto, :activo, :web) RETURNING idContacto INTO :rid';

const deleteQuery = 'DELETE FROM Contacto WHERE idContacto = :idContacto';

const updateQuery = 'UPDATE Contacto SET nombre = :nombre, tipo = :tipo, razonSocial = :razonSocial, idPer = :idPer, idCliente = :idCliente, idCom = :idCom, ' +
                    'idDom = :idDom, recomendado = :recomendado, asesor = :asesor, tipoAsesor = :tipoAsesor, puesto = :puesto, activo = :activo, ' +
                    'web = :web WHERE idContacto = :idContacto';

async function find(context) {
    let query = baseQuery;
    let binds = {};

    if (context.idContacto) {
        binds.idContacto = context.idContacto;
        query += '\nWHERE idContacto = :idContacto';
    }

    const result = await database.queryExecutor(query, binds);

    return result.rows;
}

async function insert(contacto) {
    let binds = Object.assign({}, contacto);
    const result = await database.queryExecutor(insertQuery, binds);
    return result;
}

async function deleteById(idContacto) {
    let binds = {idContacto};
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