const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// nombre, apellidoP, apellidoM, correo, telefono, turno, 
//fechaDeseada, lugar, tipoExamen, notificacion
const registroSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    nombreUsuario: {
        type: String,
        required: true
    },    
    password: {
        type: String
    }
    }, {timestamps: true});

    const Registro = mongoose.model('Registro', registroSchema);
    module.exports = {Registro};