const express = require('express');
const router = express.Router();
const centroCosto = require('../controllers/CentroCosto');
const impuestos = require('../controllers/Impuestos');
const productos = require('../controllers/Producto');

router.route('/centroCosto/:idCentroCosto?')
    .get(centroCosto.get)
    .post(centroCosto.post)
    .put(centroCosto.put)
    .delete(centroCosto.deleteCentroCosto);

router.route('/impuestos/:id?')
    .get(impuestos.get)
    .post(impuestos.post)
    .put(impuestos.put)
    .delete(impuestos.deleteImpuestos);

router.route('/productos/:idProducto?')
    .get(productos.get)
    .post(productos.post)
    .put(productos.put)
    .delete(productos.deleteProducto);

module.exports = router;