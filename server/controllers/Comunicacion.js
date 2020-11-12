const { find, insert, deleteById, update } = require('../api/Comunicacion');

async function get(req, res, next) {
    try {
        const context = {};
        context.idCom = parseInt(req.params.idCom, 10);

        const rows = await find(context);

        if (req.params.idCom) {
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
        let com = {
            telOficina: req.body.telOficina,
            telOtro: req.body.telOtro,
            telCelular: req.body.telCelular,
            mail: req.body.mail
        };
        const result = await insert(com);
        res.status(201).end('Comunicacion added successfully!');
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }

}

async function deleteCom(req, res, next) {
    try {
        let idCom = parseInt(req.params.idCom, 10);
        const result = await deleteById(idCom);
        res.status(201).end('Comunicacion deleted successfully!');
    } catch (err) {
        res.status(404).end();
    }
}

async function put(req, res, next) {
    try {
        let context = {
            idCom: parseInt(req.params.idCom, 10),
            telOficina: req.body.telOficina,
            telOtro: req.body.telOtro,
            telCelular: req.body.telCelular,
            mail: req.body.mail
        };
        const result = await update(context);
        res.status(201).end('Comunicacion updated successfully!');
    } catch (err) {
        res.status(404).end();
    }
}

module.exports.get = get;
module.exports.post = post;
module.exports.deleteCom = deleteCom;
module.exports.put = put;