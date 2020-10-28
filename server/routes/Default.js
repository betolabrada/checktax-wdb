const router = require('express').Router();
const valDefault = require('../db/Default');

router.get('/', (req,res) => {
    valDefault.get(res);
});

router.get('/:id', (req,res) => {
    valDefault.getById(req,res);
});

router.post('/', (req,res) => {
    valDefault.add(req,res);
});

router.put('/:id', (req,res) => {
    valDefault.update(req,res);
});

router.delete('/:id', (req,res) => {
    valDefault.deleteById(req,res);
});

module.exports = router;