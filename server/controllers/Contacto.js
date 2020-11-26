const cont = require('../api/Contacto');
const dom = require('../api/Domicilio');
const com = require('../api/Comunicacion');
const datosPer = require('../api/DatosPersonales');
const oracledb = require('oracledb');
const { renameKeys } = require('./renameKeys');

function renameAllKeys(op) {
    renameKeys(op, 'IDCONTACTO', 'idContacto');
    renameKeys(op, 'NOMBRE', 'nombre');
    renameKeys(op, 'TIPO', 'tipo');
    renameKeys(op, 'RAZONSOCIAL', 'razonSocial');
    renameKeys(op, 'IDPER', 'idPer');
    renameKeys(op, 'IDCLIENTE', 'idCliente');
    renameKeys(op, 'IDCOM', 'idCom');
    renameKeys(op, 'IDDOM', 'idDom');
    renameKeys(op, 'RECOMENDADO' ,'recomendado');
    renameKeys(op, 'ASESOR', 'asesor');
    renameKeys(op, 'TIPOASESOR', 'tipoAsesor');
    renameKeys(op,'PUESTO', 'puesto');
    renameKeys(op,'ACTIVO', 'activo');
    renameKeys(op, 'WEB', 'web');
}

async function get(req, res, next) {
    try {
        const context = {};
        context.idContacto = parseInt(req.params.idContacto, 10);

        const rows = await cont.find(context);

        if (req.params.idContacto) {
            if (rows.length === 1) {
                renameAllKeys(rows[0]);
                res.status(200).json(rows[0]);
            } else {
                res.status(404).end();
            }
        } else {
            console.log(rows);
            rows.forEach(row => { renameAllKeys(row) });
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

        let contacto = {
            nombre: req.body.nombre,
            tipo: req.body.tipo,
            razonSocial: req.body.razonSocial,
            idPer: idDatos,
            idCliente: req.body.idCliente,
            idCom: idCom,
            idDom: idDom,
            recomendado: req.body.recomendado,
            asesor: req.body.asesor,
            tipoAsesor: req.body.tipoAsesor,
            puesto: req.body.puesto,
            activo: req.body.activo,
            web: req.body.web,
            rid:   { type: oracledb.STRING, dir: oracledb.BIND_OUT }
        };
        const resultContacto = await cont.insert(contacto);
        res.status(201).json(resultContacto.outBinds);
    } catch (err) {
        console.log(err);
        res.status(404).end();
    }

}

async function deleteContacto(req, res, next) {
    try {
        let idContacto = parseInt(req.params.idContacto, 10);
        const result = await cont.deleteById(idContacto);
        res.status(201).end('Contacto deleted successfully!');
    } catch (err) {
        res.status(404).end();
    }
}

async function put(req, res, next) {
    try {
        let context = {
            idContacto: parseInt(req.params.idContacto, 10),
            nombre: req.body.nombre,
            tipo: req.body.tipo,
            razonSocial: req.body.razonSocial,
            idPer: req.body.idPer,
            idCliente: req.body.idCliente,
            idCom: req.body.idCom,
            idDom: req.body.idDom,
            recomendado: req.body.recomendado,
            asesor: req.body.asesor,
            tipoAsesor: req.body.tipoAsesor,
            puesto: req.body.puesto,
            activo: req.body.activo,
            web: req.body.web
        };
        const result = await cont.update(context);
        res.status(201).end('Contacto updated successfully!');
    } catch (err) {
        res.status(404).end();
    }
}

module.exports.get = get;
module.exports.post = post;
module.exports.deleteContacto = deleteContacto;
module.exports.put = put;