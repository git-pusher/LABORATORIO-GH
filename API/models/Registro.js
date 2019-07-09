const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
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
    //ESTE ES EL HASH GENERADO CON EL PASSWORD Y EL SALT  
    password: {
        type: String,
        required: true
    },
    //ESTE ES EL SALT
    hash: {
        type: String
    },
    estado:{
        type: String,
        default: "A"
    }
    }, {timestamps: true});


const Registro = mongoose.model('Registro', registroSchema);
module.exports = {Registro};