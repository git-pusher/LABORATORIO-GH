const {Cita} = require('../models/Cita');

const cita = {};

cita.crearCita = function(cita){
    const newCita = Cita(cita);

    newCita.save((err, cita) => {
        if(err) {
            console.log("Ocurrió un error al crear cita ", err);
        }else{
            console.log("cita creada: ", cita);
        }
    });
}

cita.mostrarCitas = function(id= ''){
    return id ? Cita.findById(id).exec() : Cita.find().exec();
}

cita.mostrarCita = function(id = '', populate = false){
    if(id){
        return Cita
        .findById(id)
        .populate('pacientes')
        .populate('doctores')
        .exec();
    }
    const find = populate 
        ? Cita.find().populate('pacientes').populate('doctores')    
        : Cita.find();
    return find.exec();
}

exports.cita = cita;