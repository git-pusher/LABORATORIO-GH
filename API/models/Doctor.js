const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// nombre, apellidoP, apellidoM, correo, telefono, noCedula, especialidad
const doctorSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellidoPaterno: {
        type: String,
        required: true
    },
    apellidoMaterno: {
        type: String
    },
    correoElectronico: {
        type: String,
        required: true
    },
    telefono: {
        type: String
    }, 
    noCedula: {
        type: String,
        required: true
    },
    especialidad: {
        type: String,
        required: true
    }
    }, {timestamps: true});

    const Doctor = mongoose.model('Doctor', doctorSchema);
    module.exports = {Doctor};