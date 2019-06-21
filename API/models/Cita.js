const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const citaSchema = new Schema({
    paciente: {
        type: String,
        required: true
        //type: [{
          //  type: Schema.Types.ObjectId,
            //ref: 'Paciente'
        //}]
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
    }

}, {timestamps: true});

const Cita = mongoose.model('Cita', citaSchema);

module.exports = {Cita};