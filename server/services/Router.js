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
const com = require('../controllers/Comunicacion');
const dom = require('../controllers/Domicilio');
const contacto = require('../controllers/Contacto');
const productoTipoFin = require('../controllers/ProductoTipoFinanciamiento');
const factura = require('../controllers/Factura');
const loteAutos = require('../controllers/LoteAutos');
const financiamiento = require('../controllers/Financiamiento');
const aplicarOp = require('../controllers/AplicarOp');
const centroCostoConcepto = require('../controllers/CentroCostoConcepto');

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

router.route('/com/:idCom?')
    .get(com.get)
    .post(com.post)
    .put(com.put)
    .delete(com.deleteCom);

router.route('/dom/:idDom?')
    .get(dom.get)
    .post(dom.post)
    .put(dom.put)
    .delete(dom.deleteDom);

router.route('/contacto/:idContacto?')
    .get(contacto.get)
    .post(contacto.post)
    .put(contacto.put)
    .delete(contacto.deleteContacto);

router.route('/productoTipoFin/:id?')
    .get(productoTipoFin.get)
    .post(productoTipoFin.post)
    .put(productoTipoFin.put)
    .delete(productoTipoFin.deleteProductoTipoFinanciamiento);

router.route('/factura/:idFactura?')
    .get(factura.get)
    .post(factura.post)
    .put(factura.put)
    .delete(factura.deleteFactura);

router.route('/loteAutos/:id?')
    .get(loteAutos.get)
    .post(loteAutos.post)
    .put(loteAutos.put)
    .delete(loteAutos.deleteLoteAutos);

router.route('/financiamiento/:idFinanciamiento?')
    .get(financiamiento.get)
    .post(financiamiento.post)
    .put(financiamiento.put)
    .delete(financiamiento.deleteFinanciamiento);

router.route('/aplicarOp/:id?')
    .get(aplicarOp.get)
    .post(aplicarOp.post)
    .put(aplicarOp.put)
    .delete(aplicarOp.deleteAplicarOp);

router.route('/centroCostoConcepto/:id?')
    .get(centroCostoConcepto.get)
    .post(centroCostoConcepto.post)
    .put(centroCostoConcepto.put)
    .delete(centroCostoConcepto.deleteCentroCostoConcepto);

module.exports = router;