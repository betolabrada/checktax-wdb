const com = require('../api/Comunicacion');
const oracledb = require('oracledb');

async function get(req, res, next) {
    try {
        const context = {};
        context.idCom = parseInt(req.params.idCom, 10);

        await getRefactor(req, res, context, com.find);
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }
}

async function getRefactor(req, res, context, find) {
    const rows = await find(context);

    if (context.idCom) {
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
}

async function post(req, res, next) {
    try {
        let com = {
            telOficina: req.body.telOficina,
            telOtro: req.body.telOtro,
            telCelular: req.body.telCelular,
            mail: req.body.mail,
            rid:   { type: oracledb.STRING, dir: oracledb.BIND_OUT }
        };
        const result = await com.insert(com);
        res.status(201).json(result.outBinds);
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }

}

async function deleteCom(req, res, next) {
    try {
        let idCom = parseInt(req.params.idCom, 10);
        const result = await com.deleteById(idCom);
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
        const result = await com.update(context);
        res.status(201).end('Comunicacion updated successfully!');
    } catch (err) {
        res.status(404).end();
    }
}

module.exports.get = get;
module.exports.post = post;
module.exports.deleteCom = deleteCom;
module.exports.put = put;