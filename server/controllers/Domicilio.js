const { find, insert, deleteById, update } = require('../api/Domicilio');

async function get(req, res, next) {
    try {
        const context = {};
        context.idDom = parseInt(req.params.idDom, 10);

        const rows = await find(context);

        if (req.params.idDom) {
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
        let domicilio = {
            calle: req.body.calle,
            colonia: req.body.colonia,
            noExt: req.body.noExt,
            noInt: req.body.noInt,
            ciudad: req.body.ciudad,
            cp: req.body.cp
        };
        const result = await insert(domicilio);
        res.status(201).end('Domicilio added successfully!');
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }

}

async function deleteDom(req, res, next) {
    try {
        let idDom = parseInt(req.params.idDom, 10);
        const result = await deleteById(idDom);
        res.status(201).end('Domicilio deleted successfully!');
    } catch (err) {
        res.status(404).end();
    }
}

async function put(req, res, next) {
    try {
        let context = {
            idDom: parseInt(req.params.idDom, 10),
            calle: req.body.calle,
            colonia: req.body.colonia,
            noExt: req.body.noExt,
            noInt: req.body.noInt,
            ciudad: req.body.ciudad,
            cp: req.body.cp
        };
        const result = await update(context);
        res.status(201).end('Domicilio updated successfully!');
    } catch (err) {
        res.status(404).end();
    }
}

module.exports.get = get;
module.exports.post = post;
module.exports.deleteDom = deleteDom;
module.exports.put = put;