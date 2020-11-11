const { find, insert, deleteById, update } = require('../api/Producto');

async function get(req, res, next) {
    try {
        const context = {};
        context.idProducto = parseInt(req.params.idProducto, 10);

        const rows = await find(context);

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
            producto: req.body.producto
        };
        const result = await insert(producto);
        res.status(201).end('Producto added successfully!');
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }

}

async function deleteProducto(req, res, next) {
    try {
        let idProducto = parseInt(req.params.idProducto, 10);
        const result = await deleteById(idProducto);
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
        const result = await update(context);
        res.status(201).end('Producto updated successfully!');
    } catch (err) {
        res.status(404).end();
    }
}

module.exports.get = get;
module.exports.post = post;
module.exports.deleteProducto = deleteProducto;
module.exports.put = put;