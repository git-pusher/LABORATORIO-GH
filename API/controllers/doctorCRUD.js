const {Doctor} = require('../models/Doctor');

const doctor = {};

//Agregar Doctor
doctor.crearDoctor = function(doctor){
    const newDoctor = Doctor(doctor);

    newDoctor.save((err, doctor) => {
        if(err){
            console.log("Ocurrió un error al agregar doctor", err);
        } else {
            console.log("Doctor agregado con éxito: ", doctor);
        }
    });
}

//Listar Doctores
doctor.mostrarDoctores = function(id = ''){
   return id ? Doctor.findById(id).exec() : Doctor.find().exec();
}

//Borrar Doctor
doctor.borrarDoctor = function (idDoctor){
    Doctor.deleteOne({_id: idDoctor}).exec()
    .then(res => {
        res ? console.log('respuesta: ', res) : console.log("No hay doctores para mostrar");  
    }).catch(err => console.log("Ocurrió un error: ", err));
}

//Actualizar Doctor
doctor.actualizarDoctor = function (idDoctor, doctor){
    Doctor.updateOne({_id: idDoctor}, doctor).exec()
    .then(res => {
        res ? console.log("respuesta: ", res) : console.log("No se encontro doctor para modificar");  
    }).catch(err => console.log("Ocurrió un error: ", err));
}

exports.doctor = doctor;