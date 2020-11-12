const express = require('express');
const router = express.Router();
const users = require('../controllers/Users');

router.route('/getUser/:username')
    .get(users.getUser);

router.route('/login/:username/:password')
    .post(users.login);

router.route('/verifyPermission/:section/:permission')
    .get(users.verifyPermission);

router.route('/addUser/:username/:password').post(users.addUser);

router.route('/addPermission/:username/:section/:permission')
    .post(users.addPermission);

router.route('/deleteUser/:username')
    .delete(users.deleteUser);

router.route('/removePermission/:username/:section/:permission')
    .delete(users.removePermission);


module.exports = router;