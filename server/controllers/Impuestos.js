const { find, insert, deleteById, update } = require('../api/Impuestos');

async function get(req, res, next) {
    try {
        const context = {};
        context.id = parseInt(req.params.id, 10);

        const rows = await find(context);

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
        res.status(404).end();
    }
}

async function post(req, res, next) {
    let impuestos = {
        iva: req.body.iva,
        empresa: req.body.empresa,
        porcentaje: req.body.porcentaje
    };

    try {
        const result = await insert(impuestos);
        res.status(201).end('Impuestos added successfully!');
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }

}

async function deleteImpuestos(req, res, next) {
    try {
        let id = parseInt(req.params.id, 10);
        const result = await deleteById(id);
        res.status(201).end('Impuestos deleted successfully!');
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }
}

async function put(req, res, next) {
    try {
        let context = {
            id: parseInt(req.params.id, 10),
            iva: req.body.iva,
            empresa: req.body.empresa,
            porcentaje: req.body.porcentaje
        };
        const result = await update(context);
        res.status(201).end('Impuestos updated successfully!');
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }
}

module.exports.get = get;
module.exports.post = post;
module.exports.deleteImpuestos = deleteImpuestos;
module.exports.put = put;