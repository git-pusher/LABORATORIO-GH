const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// nombre, apellidoP, apellidoM, correo, telefono, turno, 
//fechaDeseada, lugar, tipoExamen, notificacion
const pacienteSchema = new Schema({
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
    curp:{
        type: String,
        required: true
    },
    correoElectronico: {
        type: String,
        required: true
    },
    telefono: {
        type: Number
    }, 
    turno: {
        type: String
    }
    }, {timestamps: true});

    const Paciente = mongoose.model('Paciente', pacienteSchema);
    module.exports = {Paciente};