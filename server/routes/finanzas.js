const router = require('express').Router();
const { restart } = require('nodemon');
const { update } = require('../model/Finanzas');
const Finanzas = require('../model/Finanzas');
const {finanzasValidation, operacionFinanzasValidation} = require('../validation/validationFinanzas');

//Add new operacion
router.post('/post', async (req,res) => {
    const {error} = finanzasValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const operacionExist = await Finanzas.findOne({operacion: req.body.operacion});
    if(operacionExist) {
        const {error} = operacionFinanzasValidation(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        const operacion = await Finanzas.findOne({operacion: req.body.operacion});
        if(!operacion) return res.status(400).send('Esta operación no existe.');

        try {
            await Finanzas.findOneAndUpdate(operacion.id ,req.body);
            return res.send({operacion: operacion.operacion});
        } catch (err) {
            return res.status(400).send(err);
        }
    };

    const operacion = new Finanzas({
        operacion:req.body.operacion,
        fecha:req.body.fecha,
        noPagos:req.body.noPagos,
        peridiocidad:req.body.peridiocidad,
        referencia:req.body.referencia,
        dePara:req.body.dePara,
        descripcion:req.body.descripcion,
        persona:req.body.persona,
        promotor:req.body.promotor,
        tfiva:req.body.tfiva,
        iva:req.body.iva,
        tfseguro:req.body.tfseguro,
        compania:req.body.compania,
        prima:req.body.prima,
        fpago:req.body.fpago,
        poliza:req.body.poliza,
        tfSegFin:req.body.tfSegFin,
        vigInicio:req.body.vigInicio,
        vigFinal:req.body.vigFinal,
        tipoUnidad:req.body.tipoUnidad,
        fechaPago:req.body.fechaPago,
        relPago:req.body.relPago,
        siniestros:req.body.siniestros,
        cantPolizas:req.body.cantPolizas,
        sigVenc:req.body.sigVenc,
        vAsegurado:req.body.vAsegurado,
        tipo:req.body.tipo,
        marca:req.body.marca,
        serie:req.body.serie,
        modelo:req.body.modelo,
        factura:req.body.factura,
        version:req.body.version,
        motor:req.body.motor,
        lote:req.body.lote,
        comision:req.body.comision,
        importe:req.body.importe,
        producto:req.body.producto,
        fondeador:req.body.fondeador,
        valorOperacion:req.body.valorOperacion,
        tipoFin:req.body.tipoFin,
        tasa:req.body.tasa,
        anticipo:req.body.anticipo,
        seguroDeuda:req.body.seguroDeuda,
        apertura:req.body.apertura,
        deposito:req.body.deposito,
        admon:req.body.admon,
        gps:req.body.gps,
        seguroAuto:req.body.seguroAuto,
        vRescate:req.body.vRescate,
        descuento:req.body.descuento,
        chequera:req.body.chequera,
        ctroCosto:req.body.ctroCosto,
        folio:req.body.folio,
        lineaVta:req.body.lineaVta,
        comentarios:req.body.comentarios,
        estatus:req.body.estatus,
        cancelado:req.body.cancelado,
        idCliente:req.body.idCliente,
        ffzc:req.body.ffzc,
        ffzi:req.body.ffzi,
        ffzg:req.body.ffzg,
        ffza:req.body.ffza,
        empresa:req.body.empresa,
        lineaVenta:req.body.lineaVenta,
        aplicaPagos:req.body.aplicaPagos,
        fFondeo:req.body.fFondeo
    });

    try {
        await operacion.save();
        res.send({operacion: operacion.operacion});
    } catch (err) {
        res.status(400).send(err);
    }
    
});

router.get('/getAll', async (req,res) => {
    try {
        const operaciones = await Finanzas.find();
        res.send(operaciones);
    } catch (err) {
        res.status(400).send(err);
    }
})

//Get one operacion
router.get('/get', async (req, res) => {
    const {error} = operacionFinanzasValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const operacion = await Finanzas.findOne({operacion: req.body.operacion});
    if(!operacion) return res.status(400).send('Esta operación no existe');

    res.send(operacion);
});

//Delete operacion
router.delete('/delete', async (req, res) => {
    const {error} = operacionFinanzasValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const operacion = await Finanzas.findOne({operacion: req.body.operacion});
    if(!operacion) return res.status(400).send('Esta operación no existe');

    try {
        await operacion.deleteOne();
        res.send({operacion: operacion.operacion});
    } catch (err) {
        res.status(400).send(err);
    }
});

//Update operacion
router.patch('/update', async (req, res) => {
    const {error} = operacionFinanzasValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const operacion = await Finanzas.findOne({operacion: req.body.operacion});
    if(!operacion) return res.status(400).send('Esta operación no existe.');

    try {
        await Finanzas.findOneAndUpdate(operacion.id ,req.body);
        res.send({operacion: operacion.operacion});
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;