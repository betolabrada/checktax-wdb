const router = require('express').Router();
const login = require('../db/login.js');
const database = require('../services/database.js');

router.post('/login', (req, res, next) => { 
    login.login(database, req, res);
});

router.post('/addUser', (req, res, next) => {
    login.addUser(database, req, res);    
});

router.get('/verify', (req, res, next) => {
    login.verifyUser(req, res);
});

router.delete('/deleteUser', (req, res, next) => {
    login.deleteUser(database, req, res);
});

router.post('/addPermissions', (req, res) => {
    login.addPermissions(database, req, res);
});

module.exports = router;
