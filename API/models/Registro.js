const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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
        type: String,
        required: true
    }
    }, {timestamps: true});

    const Registro = mongoose.model('Registro', registroSchema);
    module.exports = {Registro};