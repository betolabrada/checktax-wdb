const express = require('express');
const router = express.Router();
const users = require('../controllers/Users');

router.route('/users/:id?')
    .get(users.get)
    .post(users.post)
    .put(users.put)
    .delete(users.deleteUser);

module.exports = router;