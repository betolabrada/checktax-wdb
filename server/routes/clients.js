const router = require('express').Router();
const { restart } = require('nodemon');
const clients = require('../model/clients.js');
const {clientsValidation, idClientValidation} = require('../validation/validationClients.js');


//Insert operation
router.post('/post', async (req,res) => {
    const {error} = clientsValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const existentClient = await clients.findOne({id: req.body.id});
    if(existentClient) return res.status(400).send('Este cliente ya existe');

    const client = new clients({
        tipo: req.body.tipo,
        nombre: req.body.nombre,
        razon_social: req.body.razon_social,
        rfc: req.body.rfc,
        id: req.body.id,
        calle: req.body.calle,
        colonia: req.body.colonia,
        noExt: req.body.noExt,
        noInt: req.body.noInt,
        ciudad: req.body.ciudad,
        estado: req.body.estado,
        cp: req.body.cp,
        telOficina: req.body.telOficina,
        telOtro: req.body.telOtro,
        telCelular: req.body.telCelular,
        mail: req.body.mail,
        recomendado: req.body.recomendado,
        asesor: req.body.asesor,
        f_Nac: req.body.f_Nac,
        curp: req.body.curp,
        edoCivil: req.body.edoCivil,
        tipoAsesor: req.body.tipoAsesor,
        puesto: req.body.puesto,
        nombre1: req.body.nombre1,
        telOficina1: req.body.telOficina1,
        telCelular1: req.body.telCelular1,
        mail1: req.body.mail1,
        f_Nac1: req.body.f_Nac1,
        nombre2: req.body.nombre2,
        telOficina2: req.body.telOficina2,
        telCelular2: req.body.telCelular2,
        mail2: req.body.mail2,
        f_Nac2: req.body.f_Nac2,
        nombre3: req.body.nombre3,
        telOficina3: req.body.telOficina3,
        telCelular3: req.body.telCelular3,
        mail3: req.body.mail3,
        f_Nac3: req.body.f_Nac3,
        activo: req.body.activo,
        web: req.body.web,
        puesto1: req.body.puesto1,
        puesto2: req.body.puesto2,
        puesto3: req.body.puesto3,
    });

    try {
        const savedClient = await client.save();
        res.send({id: client.id});
    } catch (error) {
        res.status(400).send(error);
    }
});

//Get one operation
router.get('/get', async (req, res) => {
    const {error} = idClientValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const existentClient = await clients.findOne({id: req.body.id});
    if(!existentClient) return res.status(400).send('Este cliente no existe');

    res.send(existentClient);
});

//Delete operacion
router.delete('/delete', async (req, res) => {
    const {error} = idClientValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const existentClient = await clients.findOne({id: req.body.id});
    if(!existentClient) return res.status(400).send('Esta cliente no existe');

    try {
        await existentClient.deleteOne();
        res.send({id: existentClient.id});
    } catch (err) {
        res.status(400).send(err);
    }
});

//Update operacion
router.patch('/update', async (req, res) => {
    const {error} = idClientValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const existentClient = await clients.findOne({id: req.body.id});
    if(!existentClient) return res.status(400).send('Esta cliente no existe');

    try {
        await clients.findOneAndUpdate(existentClient.id ,req.body);
        res.send({id: existentClient.id});
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;