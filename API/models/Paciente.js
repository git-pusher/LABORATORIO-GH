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
    fechaNacimiento:{
        type:Date
    },
    correoElectronico: {
        type: String
    },
    telefono: {
        type: String
    }, 
    direccion: {
        type: String
    }
    }, {timestamps: true});

    const Paciente = mongoose.model('Paciente', pacienteSchema);
    module.exports = {Paciente};