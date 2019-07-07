import React, { Component } from 'react';
import axios from 'axios'
import API_URL from '../../constants';
import { ToastContainer, toast } from 'react-toastify';
import MaterialIcon from 'material-icons-react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

class ModalCrearCita extends Component{

    solicitarCita = (e) => {
        e.preventDefault();
        
        //console.log("params: ",params);
        
        axios.post(API_URL+'citas/', {
            "pacienteId": this.props.children._id,
            "nombre": this.props.children.nombre,
            "apellidoPaterno": this.props.children.apellidoPaterno,
            "apellidoMaterno": this.props.children.apellidoMaterno,
            "fechaCita": document.getElementById("fechaCita").value,
            "horaCita": document.getElementById("horaCita").value,           
            "estudio": document.getElementById("estudio").value,  
            "doctor": document.getElementById("doctor").value
        })
        .then(cita => {
            console.log('Cita status ', cita.data);
            if(cita.data.success){
                window.location("/ListaCitas")
            }
        }).catch(err => {
            console.log('Error...', err);
        });
    }

    modfechaCita(e){
        document.getElementById("fechaCita").value = e.target.value;
    }
    modHoraCita(e){
        document.getElementById("horaCita").value = e.target.value;
    }
    modEstudio(e){
        document.getElementById("estudio").value = e.target.value;
    }
    modDoctor(e){
        document.getElementById("doctor").value = e.target.value;
    }
  

    listaCitas = ()=>{
        this.props.history.push('/ListaCitas'); 
    }

    render(){
        let paciente = this.props.children.nombre + ' ' + this.props.children.apellidoPaterno + ' ' + this.props.children.apellidoMaterno;
        return(
            <section className="contendor">
                <ToastContainer
                    position="bottom-center"
                    autoClose={2000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                />
                <Modal
                    {...this.props}
                    size="lg"
                >
                    <Modal.Header closeButton>
                            <Modal.Title className="centrarTexto">Solicitar Nueva Cita</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form >
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="paciente">Nombre del Paciente</label>
                                    <input type="text" onChange={this.cambio} readOnly defaultValue={paciente} id="paciente" className="form-control" placeholder="Nombre completo"/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label htmlFor="fechaCita">Fecha de la Cita</label>
                                    <input type="date" onChange={e => this.modfechaCita(e)} className="form-control" id="fechaCita"/>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="horaCita">Hora de la Cita</label>
                                    <input type="time" onChange={e => this.modHoraCita(e)} className="form-control" id="horaCita" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="estudio">Estudio</label>
                                        <select id="estudio" className="form-control" onChange={e => this.modEstudio(e)}>
                                            <option default>Seleccione una opción</option>
                                            <option value="Hematología Completa">Hematología Completa</option>
                                            <option value="Química Sanguínea">Química Sanguínea</option>
                                            <option value="Análisis de Enzimas Sanguíneas">Análisis de Enzimas Sanguíneas</option>
                                            <option value="Pruebas de Coagulación">Pruebas de Coagulación</option>
                                        </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="doctor">Nombre del Médico</label>
                                    <input type="text" onChange={e => this.modDoctor(e)} className="form-control" id="doctor" placeholder="Nombre completo"/>
                                </div>
                            </div>
                        </Form>
                        
                    </Modal.Body>
                    <Modal.Footer>
                    <div className="form-row">
                        <div className="containerForm form-group col-md-12">
                            <button type="button" className="btn accionGuardar" onClick={e => this.solicitarCita(e)}>
                                <MaterialIcon icon="mail" className="material-icons"></MaterialIcon>
                                &nbsp;Enviar Solicitud 
                            </button>
                            <button type="button" onClick={this.props.onHide} className="btn accionCancelar">
                                <MaterialIcon icon="cancel" className="material-icons"></MaterialIcon>
                                &nbsp;Cancelar
                            </button>
                        </div>
                    </div>
                    </Modal.Footer>
                    
                </Modal>

            </section>
        )
    }
}
export default ModalCrearCita;