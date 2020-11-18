const { find, insert, deleteById, update } = require('../api/Contacto');
const dom = require('../api/Domicilio');
const com = require('../api/Comunicacion');
const datosPer = require('../api/DatosPersonales');
const oracledb = require('oracledb');

async function get(req, res, next) {
    try {
        const context = {};
        context.idContacto = parseInt(req.params.idContacto, 10);

        const rows = await find(context);

        if (req.params.idContacto) {
            if (rows.length === 1) {
                console.log(rows[0]);
                res.status(200).json(rows[0]);
            } else {
                res.status(404).end();
            }
        } else {
            console.log(rows);
            res.status(200).json(rows);
        }
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }
}

async function post(req, res, next) {
    try {
        //Inserting domicilio
        let domicilio = {
            calle: req.body.calle,
            colonia: req.body.colonia,
            noExt: req.body.noExt,
            noInt: req.body.noInt,
            ciudad: req.body.ciudad,
            cp: req.body.cp,
            rid:   { type: oracledb.STRING, dir: oracledb.BIND_OUT }
        };
        const resultDomicilio = await dom.insert(domicilio);
        const idDom = resultDomicilio.outBinds.rid[0];

        //Inserting comunicacion
        let comunicacion = {
            telOficina: req.body.telOficina,
            telOtro: req.body.telOtro,
            telCelular: req.body.telCelular,
            mail: req.body.mail,
            rid:   { type: oracledb.STRING, dir: oracledb.BIND_OUT }
        };
        const resultComunicacion = await com.insert(comunicacion);
        const idCom = resultComunicacion.outBinds.rid[0];

        //Inserting datos personales
        let datos = {
            rfc: req.body.rfc,
            curp: req.body.curp,
            edoCivil: req.body.edoCivil,
            rid:   { type: oracledb.STRING, dir: oracledb.BIND_OUT }
        };
        const resultDatos = await datosPer.insert(datos);
        const idDatos = resultDatos.outBinds.rid[0];

        /*
        let contacto = {
        };
        const result = await insert(contacto);
        */

        console.log(idDom);
        console.log(idCom);
        console.log(idDatos);
        res.status(201).json("Dom, Com and Datos added");
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }

}

async function deleteContacto(req, res, next) {
    try {
        let idContacto = parseInt(req.params.idContacto, 10);
        const result = await deleteById(idContacto);
        res.status(201).end('Contacto deleted successfully!');
    } catch (err) {
        res.status(404).end();
    }
}

async function put(req, res, next) {
    try {
        let context = {
            idDom: parseInt(req.params.idDom, 10),
            calle: req.body.calle,
            colonia: req.body.colonia,
            noExt: req.body.noExt,
            noInt: req.body.noInt,
            ciudad: req.body.ciudad,
            cp: req.body.cp
        };
        const result = await update(context);
        res.status(201).end('Domicilio updated successfully!');
    } catch (err) {
        res.status(404).end();
    }
}

module.exports.get = get;
module.exports.post = post;
module.exports.deleteContacto = deleteContacto;
module.exports.put = put;