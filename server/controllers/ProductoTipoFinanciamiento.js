const tipoFin = require('../api/ProductoTipoFinanciamiento');
const oracledb = require('oracledb');

async function get(req, res, next) {
    try {
        const context = {};
        context.id = parseInt(req.params.id, 10);

        const rows = await tipoFin.find(context);

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
    let productoTipoFin = {
        idProducto: req.body.idProducto,
        idTipoFin: req.body.idTipoFin,
        rid:   { type: oracledb.STRING, dir: oracledb.BIND_OUT }
    };

    try {
        const result = await tipoFin.insert(productoTipoFin);
        res.status(201).json(result.outBinds);
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }

}

async function deleteProductoTipoFinanciamiento(req, res, next) {
    try {
        let id = parseInt(req.params.id, 10);
        const result = await tipoFin.deleteById(id);
        res.status(201).end('Producto tipo financiamiento deleted successfully!');
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }
}

async function put(req, res, next) {
    try {
        let context = {
            id: parseInt(req.params.id, 10),
            idProducto: req.body.idProducto,
            idTipoFin: req.body.idTipoFin,
        };
        const result = await tipoFin.update(context);
        res.status(201).end('Producto tipo financiamiento updated successfully!');
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }
}

module.exports.get = get;
module.exports.post = post;
module.exports.deleteProductoTipoFinanciamiento = deleteProductoTipoFinanciamiento;
module.exports.put = put;