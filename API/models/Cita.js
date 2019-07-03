const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const citaSchema = new Schema({
    pacienteId: {
        type: String,
        required: true
        /*type: [{
            type: Schema.Types.ObjectId,
            ref: 'Paciente'
        }]*/
    },
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
    fechaCita: {
        type: Date,
        required: true
    },
    horaCita: {
        type: String,
        required: true
    },
    estudio: {
        type: String,
        required: true
    },
    doctor: {
        type: String,
        required: true
        //type: [{
          //  type: Schema.Types.ObjectId,
            //ref: 'Doctor'
        //}]
    },
    estado: {
        type: String,
        default: "A"
    }

}, {timestamps: true});

const Cita = mongoose.model('Cita', citaSchema, 'citas');

module.exports = {Cita};