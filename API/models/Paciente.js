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
        type:Date,
        required: true
    },
    correoElectronico: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    }, 
    direccion: {
        type: String
    },
    estado:{
        type: String,
        default: "A"
    }
    }, {timestamps: true});

    const Paciente = mongoose.model('Paciente', pacienteSchema);
    module.exports = {Paciente};