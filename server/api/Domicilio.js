const database = require('../services/Database');

const baseQuery = 'SELECT * FROM Domicilio';

const insertQuery = 'INSERT INTO Domicilio (calle, colonia, noExt, noInt, ciudad, cp) VALUES(:calle, :colonia, :noExt, :noInt, :ciudad, :cp) RETURNING idDom INTO :rid';

const deleteQuery = 'DELETE FROM Domicilio WHERE idDom = :idDom';

const updateQuery = 'UPDATE Domicilio SET calle = :calle, colonia = :colonia, noExt = :noExt, noInt = :noInt, ciudad = :ciudad, cp = :cp WHERE idDom = :idDom';

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

module.exports.insert = insert;
module.exports.find = find;
module.exports.deleteById = deleteById;
module.exports.update = update;