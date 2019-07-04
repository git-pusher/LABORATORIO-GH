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
    return id ? Cita.findById(id).exec() 
              : Cita.find().exec();
}

cita.mostrarCita = function(id = '', populate = false){
    if(id){
        return Cita
        .findById(id)
        .populate('pacientes')
        //.populate('doctores')
        .exec( function (err, Cita){
            if(err){
                console.log("PAciente: ",Cita.paciente.nombre);
                
            }
        });
    }
    const find = populate 
        ? Cita.find().populate('pacientes')
        : Cita.find();
    return find.exec();
}

cita.actualizarCita = function(id, cita){
    Cita.updateOne({_id: id}, cita).exec()
    .then(res => {
        res ? console.log("respuesta: ", res)
            : console.log("No hay cita para modificar");
    }).catch(err => {
        console.log("Ocurrió un error: ", err);
    })
   
}

exports.cita = cita;