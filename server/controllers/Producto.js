const pro = require('../api/Producto');
const oracledb = require('oracledb');
const { renameKeys } = require('./renameKeys');

function constructPL(pl, rows) {
    pl.idProducto = rows[0].IDPRODUCTO;
    pl.producto = rows[0].PRODUCTO;
    pl.tiposFin = []
    for (let i = 0; i < rows.length; i++) {
        let tipoFinObj = {}
        tipoFinObj.idTipoFin = rows[i].IDTIPOFIN;
        tipoFinObj.tipoFin = rows[i].TIPOFIN;
        tipoFinObj.tasa = rows[i].TASA;
        tipoFinObj.anticipo = rows[i].ANTICIPO;
        tipoFinObj.apertura = rows[i].APERTURA;
        tipoFinObj.deposito = rows[i].DEPOSITO;
        tipoFinObj.vRescate = rows[i].VRESCATE;
        tipoFinObj.tfValorRescate = rows[i].TFVALORRESCATE;
        tipoFinObj.descuento = rows[i].DESCUENTO;
        tipoFinObj.admon = rows[i].ADMON;
        tipoFinObj.tfAdmon = rows[i].TFADMON;
        tipoFinObj.gps = rows[i].GPS;
        tipoFinObj.tfGps = rows[i].TFGPS;
        tipoFinObj.seguroAuto = rows[i].SEGUROAUTO;
        tipoFinObj.tfSeguroAuto = rows[i].TFSEGUROAUTO;
        tipoFinObj.seguroDeuda = rows[i].SEGURODEUDA;
        tipoFinObj.tfSeguroDeuda = rows[i].TFSEGURODEUDA;
        tipoFinObj.liquidacion = rows[i].LIQUIDACION;
        tipoFinObj.ppTipo = rows[i].PPTIPO;

        pl.tiposFin.push(tipoFinObj);
    }
}

async function getByName(req, res) {
    try {
        const context = {};
        context.producto = req.params.producto;

        const rows = await pro.findByName(context);

        if (rows.length > 0) {
            const context2 = {};
            context2.idProducto = rows[0].IDPRODUCTO;
            const rows2 = await pro.find(context2);
            if (rows2.length > 0) {
                let pl = {};
                constructPL(pl, rows2);
                res.status(200).json(pl);
            } else {
                res.status(404).end();
            }
        } else {
            res.status(404).json({ message: 'Not Found' });
        }

    } catch (e) {
        res.status(400).json({ message: e.message });
    }
}

async function get(req, res, next) {
    try {
        const context = {};
        context.idProducto = parseInt(req.params.idProducto, 10);

        const rows = await pro.find(context);

        console.log('rows: ', rows);
        if (req.params.idProducto) {
            if (rows.length > 0) {
                let pl = {};
                constructPL(pl, rows);
                res.status(200).json(pl);
            } else {
                res.status(404).end();
            }
        } else {
            rows.forEach(row => {
                renameKeys(row, 'IDPRODUCTO', 'idProducto')
                renameKeys(row, 'PRODUCTO', 'producto')
            });
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
module.exports.getByName = getByName;
