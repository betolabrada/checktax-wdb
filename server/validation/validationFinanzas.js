const Joi = require('@hapi/joi');

const finanzasValidation = (data) => {
    const schema = Joi.object({
        operacion: Joi.string().required(),
        fecha: Joi.date().allow(null),
        noPagos: Joi.number().allow(null),
        peridiocidad: Joi.string().allow(null, '').max(100),
        referencia: Joi.string().allow(null, '').max(50),
        dePara: Joi.string().allow(null, '').max(100),
        descripcion: Joi.string().allow(null, '').max(50),
        persona: Joi.string().allow(null, '').max(100),
        promotor: Joi.string().allow(null, '').max(100),
        tfiva: Joi.boolean().allow(null),
        iva: Joi.number().allow(null),
        tfseguro: Joi.boolean().allow(null),
        compania: Joi.string().allow(null, '').max(50),
        prima: Joi.number().allow(null),
        fpago: Joi.string().allow(null, '').max(50),
        poliza: Joi.string().allow(null, '').max(100),
        tfSegFin: Joi.boolean().allow(null),
        vigInicio: Joi.string().allow(null, '').max(100),
        vigFinal: Joi.string().allow(null, '').max(100),
        tipoUnidad: Joi.string().allow(null, '').max(100),
        fechaPago: Joi.date().allow(null),
        relPago: Joi.string().allow(null, '').max(100),
        siniestros: Joi.string().allow(null, '').max(100),
        cantPolizas: Joi.string().allow(null, '').max(100),
        sigVenc: Joi.string().allow(null, '').max(100),
        vAsegurado: Joi.string().allow(null, '').max(100),
        tipo: Joi.string().allow(null, '').max(100),
        marca: Joi.string().allow(null, '').max(100),
        serie: Joi.string().allow(null, '').max(100),
        modelo: Joi.string().allow(null, '').max(100),
        factura: Joi.string().allow(null, '').max(100),
        version: Joi.string().allow(null, '').max(100),
        motor: Joi.string().allow(null, '').max(100),
        lote: Joi.string().allow(null, '').max(100),
        comision: Joi.number().allow(null),
        importe: Joi.number().allow(null),
        producto: Joi.string().allow(null, '').max(100),
        fondeador: Joi.string().allow(null, '').max(100),
        valorOperacion: Joi.number().allow(null),
        tipoFin: Joi.string().allow(null, '').max(50),
        tasa: Joi.number().allow(null),
        anticipo: Joi.number().allow(null),
        seguroDeuda: Joi.number().allow(null),
        apertura: Joi.number().allow(null),
        deposito: Joi.number().allow(null),
        admon: Joi.number().allow(null),
        gps: Joi.number().allow(null),
        seguroAuto: Joi.number().allow(null),
        vRescate: Joi.number().allow(null),
        descuento: Joi.number().allow(null),
        chequera: Joi.string().allow(null, '').max(100),
        ctroCosto: Joi.string().allow(null, '').max(100),
        folio: Joi.string().allow(null, '').max(100),
        lineaVta: Joi.string().allow(null, '').max(100),
        comentarios: Joi.string().allow(null, '').max(255),
        estatus: Joi.string().allow(null, '').max(100),
        cancelado: Joi.boolean().allow(null),
        idCliente: Joi.string().allow(null, '').max(100),
        ffzc: Joi.string().allow(null, '').max(100),
        ffzi: Joi.string().allow(null, '').max(100),
        ffzg: Joi.string().allow(null, '').max(100),
        ffza: Joi.string().allow(null, '').max(100),
        empresa: Joi.string().allow(null, '').max(100),
        lineaVenta: Joi.string().allow(null, '').max(100),
        aplicaPagos: Joi.boolean().allow(null),
        fFondeo: Joi.string().allow(null, '').max(100)
    });

    return schema.validate(data);
};

const operacionFinanzasValidation = (data) => {
    const schema = Joi.object({
        operacion: Joi.string().required()
    }).unknown();

    return schema.validate(data);
};

module.exports.finanzasValidation = finanzasValidation;
module.exports.operacionFinanzasValidation = operacionFinanzasValidation;