const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const Ctrl = require('./controllers/pacienteCRUD.js');
const CtrlDoc = require('./controllers/doctorCRUD.js');
const CtrlCita = require('./controllers/citaCRUD.js');
const { Paciente } = require('./models/Paciente');
const { Doctor } = require('./models/Doctor');
const { Cita } = require('./models/Cita');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended : true}));
app.use(bodyparser.json());

//USUARIO
//CONTRASEÑA
const PORT = process.env.PORT || 3001;

//const URL_MONGO = `mongodb+srv://karen:151111034@cluster0-offbi.mongodb.net/test?retryWrites=true&w=majority`;
//const URL_MONGO = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0-ijbr8.mongodb.net/test?retryWrites=true`;
const URL_MONGO =  'mongodb+srv://karen:ABZWO1RKXRt6A2K4@laboratorio-pdxyp.mongodb.net/test?retryWrites=true&w=majority';

console.log("LOG: ", URL_MONGO);

mongoose.connect(URL_MONGO, { useNewUrlParser: true}, (err) => {
    if(err){
        console.log("Ocurrió un error inesperado", err);
    } else {
        console.log("Conexión exitosa");
        
    }
});

//PACIENTES
//GET todos los pacientes
app.get('/pacientes', (req, res) => {
    Ctrl.paciente.mostrarPacientes()
    .then(pacientes => {
        if(!pacientes){
            console.log("No hay pacientes que mostrar");
            res.send({mensaje: 'No hay pacientes que mostrar'});
        }else{
        res.send(pacientes).status(200);
        }
    }).catch(err => {
        console.log("Error", err);
        res.status(500).send({ mensaje: 'Algo salió mal'});
    })
});

//GET un paciente en especifico
app.get('/pacientes/:id', (req, res) => {
    Ctrl.paciente.mostrarPacientes(req.params.id)
        .then(pct => 
            pct ? res.send(pct) 
            : res.send({}).status(400)
        ).catch(err =>
             res.send(err).status(400)
        );
});

//GET para recuperar citas por paciente 
app.get('/citasPacientes/:pacienteId', (req, res) => {
    const detallesCita = req.params.pacienteId;
    console.log("ID paciente: ", detallesCita);
    Cita.find({pacienteId: detallesCita}).exec(
        (err, citas) => {
            if(err){
                return res.status(400).send(err);
            }else{
                res.status(200).json({
                    success: true,
                    mensaje: 'Citas del paciente: ' + detallesCita.pacienteId + ' recuperada con éxito',
                    citas: citas
                });
            }
    });
    
});

//POST 
app.post('/pacientes', (req, res) => {
    console.log("entré a POST");
    Paciente(req.body).save((err, paciente) => {
        err ? res.status(400).send({
            message: "Revisar petición",
            errorMongo: err
        }) : res.status(201).send(paciente);
    });
});

//PUT
app.put('/pacientes/:id', (req, res) =>{
    Paciente.findByIdAndUpdate(req.params.id, req.body,
        { new: true}, (err, paciente) => {
            err ? res.status(400).send(err) 
                : res.status(200).send(paciente);
        });
});

//DELETE
app.delete('/pacientes/:id', (req, res) => {
    Paciente.findByIdAndDelete(req.params.id, (err, borrar) => {
        err ? res.status(400).send(err)
            : res.send(borrar);
    });
});

//DOCTORES
//GET
app.get('/doctores', (req, res) => {
    CtrlDoc.doctor.mostrarDoctores()
    .then(doctores => {
        if(!doctores){
            console.log("No hay doctores que mostrar");
            res.send({mensaje: 'No hay doctores que mostrar'});
        }else{
        console.log("Doctores: ", doctores);
        res.send(doctores).status(200);
        }
    }).catch(err => {
        console.log("Error", err);
        res.status(500).send({ mensaje: 'Algo salió mal'});
    })
});

app.get('/doctores/:id', (req, res) => {
    CtrlDoc.doctor.mostrarDoctores(req.params.id)
		.then(doct => doct ? res.send(doct) : res.send({}).status(400))
		.catch(err => res.send(err).status(400));
});

//GET para recuperar citas por paciente 
app.get('/citasDoctores/:doctorId', (req, res) => {
    const detallesCita = req.params.doctorId;
    console.log("ID médico: ", detallesCita);
    Cita.find({doctorId: detallesCita}).exec(
        (err, citas) => {
            if(err){
                return res.status(400).send(err);
            }else{
                res.status(200).json({
                    success: true,
                    mensaje: 'Citas del médico: ' + detallesCita.doctorId + ' recuperada con éxito',
                    citas: citas
                });
            }
    });
    
});

//POST 
app.post('/doctores', (req, res) => {
    console.log("entré a POST");
    Doctor(req.body).save((err, doctor) => {
        err ? res.status(400).send({
            message: "Revisar petición",
            errorMongo: err
        }) : res.status(201).send(doctor);
    });
});

//PUT
app.put('/doctores/:id', (req, res) =>{
    Doctor.findByIdAndUpdate(req.params.id, req.body,
        { new: true}, (err, doctor) => {
            err ? res.status(400).send(err) 
                : res.status(200).send(doctor);
        });
});

//CITAS
//GET
app.get('/citas', (req, res) => {
    CtrlCita.cita.mostrarCitas()
    .then(citas => {
        if(!citas) {
            console.log('No hay citas que mostrar');
            res.send({ mensaje: 'No hay citas que mostrar'});
        } else {
            console.log('Citas GET: ', citas);
            res.send(citas).status(200);
        }
    }).catch(err => {
        console.log('Ocurrio un error get: ', err);
        res.status(500).send({ mensaje: 'Ocurrió un error'});
    });
});

app.get('/citas/:id', (req, res) => {
    CtrlCita.cita.mostrarCitas(req.params.id)
        .then(ct => 
            ct ? res.send(ct) 
            : res.send({}).status(400))
        .catch(err => 
             res.send(err).status(400)
        );
});

//POST
app.post('/citas', (req, res) => {
    const datos = new Cita(req.body)

    const cita = new Cita({
        "pacienteId": datos._id,
        "nombre": datos.nombre,
        "apellidoPaterno": datos.apellidoPaterno,
        "apellidoMaterno": datos.apellidoMaterno,
        "fechaCita": datos.fechaCita,
        "horaCita": datos.horaCita,   
        "estudio": datos.estudio,
        "doctor": datos.doctor
    })

    Cita(req.body).save((err, ct) => {
            if (err)
              return res.json({ success: false, err })
            res.status(200).json({
              success: true,
              mensaje: 'Nueva cita registrada con éxito',
              cita: ct
            })
    })
});

//PUT
app.put('/citas/:id', (req, res) =>{
    Cita.findByIdAndUpdate(req.params.id, req.body,
        { new: true}, (err, cita) => {
            err ? res.status(400).send(err) 
                : res.status(200).send(cita);
        });
});

app.put('/citas', (req, res) => {
    const datos = new Cita(req.body)

    const cita = new Cita({
        "pacienteId": datos._id,
        "nombre": datos.nombre,
        "apellidoPaterno": datos.apellidoPaterno,
        "apellidoMaterno": datos.apellidoMaterno,
        "fechaCita": datos.fechaCita,
        "horaCita": datos.horaCita,   
        "estudio": datos.estudio,
        "doctor": datos.doctor
    })

});

app.listen(PORT, () => {
    console.log("Puerto: " + PORT);
    
});
