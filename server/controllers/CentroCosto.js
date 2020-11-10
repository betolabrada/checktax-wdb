const { find, insert, deleteById, update } = require('../api/CentroCosto');

async function get(req, res, next) {
    try {
        const context = {};
        context.idCentroCosto = parseInt(req.params.idCentroCosto, 10);

        const rows = await find(context);

        if (req.params.idCentroCosto) {
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
        next(err);
    }
}

async function post(req, res, next) {
    let centroCosto = {
        centroCosto: req.body.centroCosto
    };

    try {
        const result = await insert(centroCosto);
        res.status(201).end('Centro costo added successfully!');
    } catch (err) {
        console.log(err);
        res.status(400);
    }

}

async function deleteCentroCosto(req, res, next) {
    let idCentroCosto = parseInt(req.params.idCentroCosto, 10);
    const result = await deleteById(idCentroCosto);
    res.status(201).end('Centro costo deleted successfully!');
}

async function put(req, res, next) {
    let context = {
        idCentroCosto: parseInt(req.params.idCentroCosto, 10),
        centroCosto: req.body.centroCosto
    };

    try {
        const result = await update(context);
        res.status(201).end('Centro costo updated successfully!');
    } catch (err) {
        res.status(400);
    }
}

module.exports.get = get;
module.exports.post = post;
module.exports.deleteCentroCosto = deleteCentroCosto;
module.exports.put = put;