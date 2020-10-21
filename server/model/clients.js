const mongoose = require('mongoose');

const clientsSchema = new mongoose.Schema({
    tipo: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true,
        max: 128
    },
    razon_social: {
        type: String,
        required: true, 
        max: 36
    },
    rfc: {
        type: String,
        required: true,
        min: 13,
        max: 15
    },
    id: {
        type: String,
        required: true
    },
    calle: {
        type: String,
        required: true,
        max: 48
    },
    colonia: {
        type: String,
        required: true,
        max: 36
    },
    noExt: {
        type: Number,
        required: true
    },
    noInt: {
        type: Number,
        required: false
    },
    ciudad: {
        type: String,
        required: true,
        max: 64
    },
    estado: {
        type: String,
        required: true,
        max: 24
    },
    cp: {
        type: Number,
        required: true
    },
    telOficina: {
        type: String,
        required: false,
        max: 15
    },
    telOtro: {
        type: String,
        required: false,
        max: 15
    },
    telCelular: {
        type: String,
        max: 15
    },
    mail: {
        type: String
    },
    recomendado: {
        type: String
    },
    asesor: {
        type: String
    },
    f_Nac: {
        type: Date,
        required: true
    },
    curp: {
        type: String,
        required: true,
        max: 21
    },
    edoCivil: {
        type: String,
        required: true,
        max: 64
    },
    tipoAsesor: {
        type: String
    },
    puesto: {
        type: String,
        
    },
    nombre1: {
        type: String,
        max: 128
    },
    telOficina1: {
        type: String,
        max: 15
    },
    telCelular1: {
        type: String,
        max: 15    
    },
    mail1:{
        type: String
    },
    f_Nac1: {
        type: Date
    },
    nombre2: {
        type: String,
        max: 128
    },
    telOficina2: {
        type: String,
        max: 15
    },
    telCelular2: {
        type: String,
        max: 15    
    },
    mail2:{
        type: String
    },
    f_Nac2: {
        type: Date
    },
    nombre3: {
        type: String,
        max: 128
    },
    telOficina3: {
        type: String,
        max: 15
    },
    telCelular3: {
        type: String,
        max: 15    
    },
    mail3:{
        type: String
    },
    f_Nac3: {
        type: Date
    },
    activo: {
        type: Boolean,
        required: true
    },
    web: {
        type: String
    },
    puesto1:{
        type: String
    },
    puesto2:{
        type: String
    },
    puesto3:{
        type: String
    }
});

module.exports = mongoose.model('clients', clientsSchema);