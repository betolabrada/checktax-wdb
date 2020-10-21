const { allow } = require('@hapi/joi');
const Joi = require('@hapi/joi');

const clientsValidation = (data) => {
    const schema = Joi.object({
        tipo: Joi.string().required(),
        nombre: Joi.string().max(128).required(),
        razon_social: Joi.string().max(36).required(),
        rfc: Joi.string().min(13).max(15).required(),
        id: Joi.string().required(),
        calle: Joi.string().max(48).required(),
        colonia: Joi.string().max(36).required(),
        noExt: Joi.number().required(),
        noInt: Joi.number().allow(null),
        ciudad: Joi.string().max(64).required(),
        estado: Joi.string().max(24).required(),
        cp: Joi.number().required(),
        telOficina: Joi.string().allow(null, '').max(15),
        telOtro: Joi.string().allow(null, '').max(15),
        telCelular: Joi.string().allow(null, '').max(15),
        mail: Joi.string().max(56).allow(null, '').email(),
        recomendado: Joi.string().allow(null, ''),
        asesor: Joi.string().allow(null, ''),
        f_Nac: Joi.date().required(),
        curp: Joi.string().max(21).required(),
        edoCivil: Joi.string().max(64).required(),
        tipoAsesor: Joi.string().allow(null, ''),
        puesto: Joi.string().allow(null, ''),
        nombre1: Joi.string().allow(null, '').max(128),
        telOficina1: Joi.string().allow(null, '').max(15),
        telCelular1: Joi.string().allow(null, '').max(15),
        mail1: Joi.string().max(56).allow(null, '').email(),
        f_Nac1: Joi.date().allow(null),
        nombre2: Joi.string().allow(null, '').max(128),
        telOficina2: Joi.string().allow(null, '').max(15),
        telCelular2: Joi.string().allow(null, '').max(15),
        mail2: Joi.string().max(56).allow(null, '').email(),
        f_Nac2: Joi.date().allow(null),
        nombre3: Joi.string().allow(null, '').max(128),
        telOficina3: Joi.string().allow(null, '').max(15),
        telCelular3: Joi.string().allow(null, '').max(15),
        mail3: Joi.string().max(56).allow(null, '').email(),
        f_Nac3: Joi.date().allow(null),
        activo: Joi.boolean().required(),
        web: Joi.string().allow(null, ''),
        puesto1: Joi.string().allow(null, ''),
        puesto2: Joi.string().allow(null, ''),
        puesto3: Joi.string().allow(null, ''),
    });

    return schema.validate(data);
};

const idClientValidation = (data) => {
    const schema = Joi.object({
        id: Joi.string().required(),
    }).unknown();

    return schema.validate(data);
};


module.exports.clientsValidation = clientsValidation;
module.exports.idClientValidation = idClientValidation;