const express = require('express');
const router = express.Router();
const centroCosto = require('../controllers/CentroCosto');
const impuestos = require('../controllers/Impuestos');
const productos = require('../controllers/Producto');
const tipoFin = require('../controllers/TipoFinanciamiento');
const seguroAuto = require('../controllers/SeguroAuto');
const concepto = require('../controllers/Concepto');

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

router.route('/tipoFin/:idTipoFin?')
    .get(tipoFin.get)
    .post(tipoFin.post)
    .put(tipoFin.put)
    .delete(tipoFin.deleteTipoFin);

router.route('/seguroAuto/:id?')
    .get(seguroAuto.get)
    .post(seguroAuto.post)
    .put(seguroAuto.put)
    .delete(seguroAuto.deleteSeguro);

router.route('/concepto/:idConcepto?')
    .get(concepto.get)
    .post(concepto.post)
    .put(concepto.put)
    .delete(concepto.deleteConcepto);

module.exports = router;