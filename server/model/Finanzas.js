const mongoose = require('mongoose');

const finazasSchema = new mongoose.Schema({
    operacion: {
        type: Number,
        required: true,
        unique: true
    },
    fecha: {
        type: Date
    },
    noPagos: {
        type: Number
    },
    peridiocidad: {
        type: String,
        max: 100
    },
    referencia: {
        type: String,
        max: 50
    },
    dePara: {
        type: String,
        max: 100
    },
    descripcion: {
        type: String,
        max: 255
    },
    persona: {
        type: String,
        max: 100
    },
    promotor: {
        type: String,
        max: 100
    },
    tfiva: {
        type: Boolean
    },
    iva: {
        type: Number
    },
    tfseguro: {
        type: Boolean
    },
    compania: {
        type: String,
        max: 50
    },
    prima: {
        type: Number
    },
    fpago: {
        type: String,
        max: 50
    },
    poliza: {
        type: String,
        max: 100
    },
    tfSegFin: {
        type: Boolean
    },
    vigInicio: {
        type: String,
        max: 100
    },
    vigFinal: {
        type: String,
        max: 100
    },
    tipoUnidad: {
        type: String,
        max: 100
    },
    fechaPago: {
        type: Date,
    },
    relPago: {
        type: String,
        max: 100
    },
    siniestros: {
        type: String,
        max: 100
    },
    cantPolizas: {
        type: String,
        max: 100
    },
    sigVenc: {
        type: String,
        max: 100
    },
    vAsegurado: {
        type: String,
        max: 100
    },
    tipo: {
        type: String,
        max: 100
    },
    marca: {
        type: String,
        max: 100
    },
    serie: {
        type: String,
        max: 100
    },
    modelo: {
        type: String,
        max: 100
    },
    factura: {
        type: String,
        max: 100
    },
    version: {
        type: String,
        max: 100
    },
    motor: {
        type: String,
        max: 100
    },
    lote: {
        type: String,
        max: 100
    },
    comision: {
        type: Number
    },
    importe: {
        type: Number
    },
    producto: {
        type: String,
        max: 100
    },
    fondeador: {
        type: String,
        max: 100
    },
    valorOperacion: {
        type: Number
    },
    tipoFin: {
        type: String,
        max: 50
    },
    tasa: {
        type: Number
    },
    anticipo: {
        type: Number
    },
    seguroDeuda: {
        type: Number
    },
    apertura: {
        type: Number
    },
    deposito: {
        type: Number
    },
    admon: {
        type: Number
    },
    gps: {
        type: Number
    },
    seguroAuto: {
        type: Number
    },
    vRescate: {
        type: Number
    },
    descuento: {
        type: Number
    },
    chequera: {
        type: String,
        max: 100
    },
    ctroCosto: {
        type: String,
        max: 100
    },
    folio: {
        type: String,
        max: 100
    },
    lineaVta: {
        type: String,
        max: 100
    },
    comentarios: {
        type: String,
        max: 255
    },
    estatus: {
        type: String,
        max: 100
    },
    cancelado: {
        type: Boolean
    },
    idCliente: {
        type: String,
        max: 100
    },
    ffzc: {
        type: String,
        max: 100
    },
    ffzi: {
        type: String,
        max: 100
    },
    ffzg: {
        type: String,
        max: 100
    },
    ffza: {
        type: String,
        max: 100
    },
    empresa: {
        type: String,
        max: 100
    },
    lineaVenta: {
        type: String,
        max: 100
    },
    aplicaPagos: {
        type: Boolean
    },
    fFondeo: {
        type: Date
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Finanzas', finazasSchema);