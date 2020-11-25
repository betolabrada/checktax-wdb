const express = require('express');
const router = express.Router();
const users = require('../controllers/Users');

router.route('/getUser/:username')
    .get(users.getUser);

router.route('/verifyPermission/:section/:permission')
    .get(users.verifyPermission);

router.route('/login/:username/:password')
    .post(users.login);

router.route('/addUser/:username/:password')
    .post(users.addUser);

router.route('/addPermission/:username/:permissions')
    .post(users.addPermission);

router.route('/insertSection/:sectionName')
    .post(users.insertSection);

router.route('/insertPermission/:section/:permission')
    .post(users.insertPermission);

router.route('/deleteUser/:username')
    .delete(users.deleteUser);

router.route('/removePermission/:username/:permissions')
    .delete(users.removePermission);


module.exports = router;