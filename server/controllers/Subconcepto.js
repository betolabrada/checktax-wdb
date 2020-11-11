const { find, insert, deleteById, update } = require('../api/Subconcepto');

async function get(req, res, next) {
    try {
        const context = {};
        context.idSubconcepto = parseInt(req.params.idSubconcepto, 10);

        const rows = await find(context);

        if (req.params.idSubconcepto) {
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
        let subconcepto = {
            subconcepto: req.body.subconcepto
        };
        const result = await insert(subconcepto);
        res.status(201).end('Subconcepto added successfully!');
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }

}

async function deleteSubconcepto(req, res, next) {
    try {
        let idSubconcepto = parseInt(req.params.idSubconcepto, 10);
        const result = await deleteById(idSubconcepto);
        res.status(201).end('Subconcepto deleted successfully!');
    } catch (err) {
        res.status(404).end();
    }
}

async function put(req, res, next) {
    try {
        let context = {
            idSubconcepto: parseInt(req.params.idSubconcepto, 10),
            subconcepto: req.body.subconcepto
        };
        const result = await update(context);
        res.status(201).end('Subconcepto updated successfully!');
    } catch (err) {
        res.status(404).end();
    }
}

module.exports.get = get;
module.exports.post = post;
module.exports.deleteSubconcepto = deleteSubconcepto;
module.exports.put = put;