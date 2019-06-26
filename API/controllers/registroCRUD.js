const {Registro} = require('../models/Registro');

const registro = {};

//Agregar Doctor
registro.crearRegistro = function(registro){
    const newRegistro = Registro(registro);

    newRegistro.save((err, registro) => {
        if(err){
            console.log("Ocurrió un error al agregar nuevo usuario", err);
        } else {
            console.log("Usario agregado con éxito: ", registro);
        }
    });
}

//Listar Usuarios
registro.mostrarRegistroes = function(id = ''){
   return id ? Registro.findById(id).exec() : Registro.find().exec();
}

//Borrar Registro
registro.borrarRegistro = function (idRegistro){
    Registro.deleteOne({_id: idRegistro}).exec()
    .then(res => {
        res ? console.log('respuesta: ', res) : console.log("No hay usuarios para mostrar");  
    }).catch(err => console.log("Ocurrió un error: ", err));
}

//Actualizar Registro
registro.actualizarRegistro = function (idRegistro, registro){
    Registro.updateOne({_id: idRegistro}, registro).exec()
    .then(res => {
        res ? console.log("respuesta: ", res) : console.log("No se encontro usuario para modificar");  
    }).catch(err => console.log("Ocurrió un error: ", err));
}

exports.registro = registro;