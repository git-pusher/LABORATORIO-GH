const {Paciente} = require('../models/Paciente');

const paciente = {};

//Agregar Paciente
paciente.crearPaciente = function(paciente){
    const newPaciente = Paciente(paciente);

    newPaciente.save((err, paciente) => {
        if(err){
            console.log("Ocurrió un error al agregar paciente", err);
        } else {
            console.log("Paciente agregado con éxito: ", paciente);
        }
    });
}

//Listar Pacientes
paciente.mostrarPacientes = function(id = '', populate = false){
    if(id){
        return Paciente
            .findById(id)
            .exec();
    }
    const find = Paciente.find();
    return find.exec();
}

//Borrar Paciente
paciente.borrarPaciente = function (idPaciente){
    Paciente.deleteOne({_id: idPaciente}).exec()
    .then(res => {
        res ? console.log('respuesta: ', res) : console.log("No hay pacientes para mostrar");  
    }).catch(err => console.log("Ocurrió un error: ", err));
}

//Actualizar Paciente
paciente.actualizarPaciente = function (idPaciente, paciente){
    Paciente.updateOne({_id: idPaciente}, paciente).exec()
    .then(res => {
        res ? console.log("respuesta: ", res) : console.log("Noi se encontro paciente para modificar");  
    }).catch(err => console.log("Ocurrió un error: ", err));
}

exports.paciente = paciente;