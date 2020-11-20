const ConceptoSub = require('../api/ConceptoSubconcepto');
const oracledb = require('oracledb');

async function get(req, res, next) {
    try {
        const context = {};
        context.id = parseInt(req.params.id, 10);

        const rows = await ConceptoSub.find(context);

        if (req.params.id) {
            if (rows.length === 1) {
                console.log(rows[0]);
                res.status(200).json(rows[0]);
            } else {
                res.status(404).end();
            }
        } else {
            console.log(rows);
            res.status(200).json(rows);
        }
    } catch (err) {
        console.log(err);
        next(err);
    }
}

async function post(req, res, next) {
    let conceptoSubconcepto = {
        idConcepto: req.body.idConcepto,
        idSubconcepto: req.body.idSubconcepto,
        rid:   { type: oracledb.STRING, dir: oracledb.BIND_OUT }
    };

    try {
        const result = await ConceptoSub.insert(conceptoSubconcepto);
        res.status(201).json(result.outBinds);
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }

}

async function deleteConceptoSubconcepto(req, res, next) {
    try {
        let id = parseInt(req.params.id, 10);
        const result = await ConceptoSub.deleteById(id);
        res.status(201).end('ConceptoSubconcepto deleted successfully!');
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }
}

async function put(req, res, next) {
    try {
        let context = {
            id: parseInt(req.params.id, 10),
            idConcepto: req.body.idConcepto,
            idSubconcepto: req.body.idSubconcepto,
        };
        const result = await ConceptoSub.update(context);
        res.status(201).end('ConceptoSubconcepto updated successfully!');
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }
}

module.exports.get = get;
module.exports.post = post;
module.exports.deleteConceptoSubconcepto = deleteConceptoSubconcepto;
module.exports.put = put;