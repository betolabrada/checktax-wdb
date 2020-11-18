const con = require('../api/Concepto');

async function get(req, res, next) {
    try {
        const context = {};
        context.idConcepto = parseInt(req.params.idConcepto, 10);

        const rows = await con.find(context);

        if (req.params.idConcepto) {
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
        res.status(404).end();
    }
}

async function post(req, res, next) {
    try {
        let concepto = {
            concepto: req.body.concepto
        };
        const result = await con.insert(concepto);
        res.status(201).end('Concepto added successfully!');
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }

}

async function deleteConcepto(req, res, next) {
    try {
        let idConcepto = parseInt(req.params.idConcepto, 10);
        const result = await con.deleteById(idConcepto);
        res.status(201).end('Concepto deleted successfully!');
    } catch (err) {
        res.status(404).end();
    }
}

async function put(req, res, next) {
    try {
        let context = {
            idConcepto: parseInt(req.params.idConcepto, 10),
            concepto: req.body.concepto
        };
        const result = await con.update(context);
        res.status(201).end('Concepto updated successfully!');
    } catch (err) {
        res.status(404).end();
    }
}

module.exports.get = get;
module.exports.post = post;
module.exports.deleteConcepto = deleteConcepto;
module.exports.put = put;