const express = require('express');
const router = express.Router();
const users = require('../controllers/Users');
const centroCosto = require('../controllers/CentroCosto');
const impuestos = require('../controllers/Impuestos');

router.route('/users/:id?')
    .get(users.get)
    .post(users.post)
    .put(users.put)
    .delete(users.deleteUser);

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

module.exports = router;