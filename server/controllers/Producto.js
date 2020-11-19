const pro = require('../api/Producto');
const oracledb = require('oracledb');

async function get(req, res, next) {
    try {
        const context = {};
        context.idProducto = parseInt(req.params.idProducto, 10);

        const rows = await pro.find(context);

        if (req.params.idProducto) {
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
        let producto = {
            producto: req.body.producto,
            rid:   { type: oracledb.STRING, dir: oracledb.BIND_OUT }
        };
        const result = await pro.insert(producto);
        res.status(201).json(result.outBinds);
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }

}

async function deleteProducto(req, res, next) {
    try {
        let idProducto = parseInt(req.params.idProducto, 10);
        const result = await pro.deleteById(idProducto);
        res.status(201).end('Producto deleted successfully!');
    } catch (err) {
        res.status(404).end();
    }
}

async function put(req, res, next) {
    try {
        let context = {
            idProducto: parseInt(req.params.idProducto, 10),
            producto: req.body.producto
        };
        const result = await pro.update(context);
        res.status(201).end('Producto updated successfully!');
    } catch (err) {
        res.status(404).end();
    }
}

module.exports.get = get;
module.exports.post = post;
module.exports.deleteProducto = deleteProducto;
module.exports.put = put;