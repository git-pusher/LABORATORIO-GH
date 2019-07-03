const {Registro} = require('../models/Registro');

//objeto vacío
const registro = {};

//Crear usuario nuevo
registro.crearRegistro = function(registro){
    const newRegistro = Registro(registro);

    newRegistro.save((err, registro) => {
        if(err){
            console.log("Ocurrió un error al agregar nuevo registro de usuario", err);
        } else {
            console.log("Registro de usuario realizado con éxito: ", registro);
        }
    });
}

//Mostrar los  registros de usuarios
registro.mostrarRegistros = function(id = ''){
   return id ? Registro.findById(id).exec() : Registro.find().exec();
}

//Borrar un registro de usuario
registro.borrarRegistro = function (idRegistro){
    Registro.deleteOne({_id: idRegistro}).exec()
    .then(res => {
        res ? console.log('respuesta: ', res) : console.log("No hay registros para mostrar");  
    }).catch(err => console.log("Ocurrió un error: ", err));
}

//Actualizar Registro
registro.actualizarRegistro = function (idRegistro, registro){
    Registro.updateOne({_id: idRegistro}, registro).exec()
    .then(res => {
        res ? console.log("respuesta: ", res) : console.log("No se encontro registro para modificar");  
    }).catch(err => console.log("Ocurrió un error: ", err));
}

exports.registro = registro;