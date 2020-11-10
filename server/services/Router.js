const express = require('express');
const router = express.Router();
const users = require('../controllers/Users');
const centroCosto = require('../controllers/CentroCosto');

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

module.exports = router;