const router = require('express').Router();
const login = require('../db/login.js');
const database = require('../services/database.js');

router.post('/login', (req, res, next) => {
    login.login(database, req, res);
});

router.post('/addUser', (req, res, next) => {
    login.addUser(database, req, res);    
});

router.get('/secret-route', login.verifyUser, (req, res, next) => {
    console.log(req.userData);
    res.send('This is the secret content. Only logged in users can see that!');
});

module.exports = router;
