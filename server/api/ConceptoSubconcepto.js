const database = require('../services/Database');

const baseQuery = 'SELECT * FROM ConceptoSubconcepto';

const insertQuery = 'INSERT INTO ConceptoSubconcepto (idConcepto, idSubconcepto) VALUES(:idConcepto, :idSubconcepto) RETURNING id INTO :rid';

const deleteQuery = 'DELETE FROM ConceptoSubconcepto WHERE id = :id';

const updateQuery = 'UPDATE ConceptoSubconcepto SET idConcepto = :idConcepto, idSubconcepto = :idSubconcepto WHERE id = :id';

async function find(context) {
    let query = baseQuery;
    let binds = {};

    if (context.id) {
        binds.id = context.id;
        query += '\nWHERE id = :id';
    }

    const result = await database.queryExecutor(query, binds);

    return result.rows;
}

async function insert(conceptoSubconcepto) {
    let binds = Object.assign({}, conceptoSubconcepto);
    const result = await database.queryExecutor(insertQuery, binds);
    return result;
}

async function deleteById(id) {
    let binds = { id };
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