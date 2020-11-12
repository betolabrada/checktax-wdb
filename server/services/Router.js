const express = require('express');
const router = express.Router();
const centroCosto = require('../controllers/CentroCosto');
const impuestos = require('../controllers/Impuestos');
const productos = require('../controllers/Producto');
const tipoFin = require('../controllers/TipoFinanciamiento');
const seguroAuto = require('../controllers/SeguroAuto');
const concepto = require('../controllers/Concepto');
const subconcepto = require('../controllers/Subconcepto');
const datosPer = require('../controllers/DatosPersonales');

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

router.route('/subconcepto/:idSubconcepto?')
    .get(subconcepto.get)
    .post(subconcepto.post)
    .put(subconcepto.put)
    .delete(subconcepto.deleteSubconcepto);

router.route('/datosPer/:idPer?')
    .get(datosPer.get)
    .post(datosPer.post)
    .put(datosPer.put)
    .delete(datosPer.deleteDatosPer);

module.exports = router;