import React, { Component } from 'react';
import axios from 'axios'
import API_URL from '../../constants';
import MaterialIcon from 'material-icons-react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class ModalCrearCita extends Component {

    constructor(props) {
        super(props);
        this.state = {
            request: true,
            medicos: [],
            medico: [],
            error: ''
        }
        this.modFechaCita = this.modFechaCita.bind(this);
    }
    componentDidMount() {
        this.getMedicos();
    }

    getMedicos = () => {
        axios.get(API_URL + 'doctores')
            .then(res => {
                this.setState({ medicos: res.data, request: false });
            }).catch(err => {
                this.setState({ error: err, request: false });
            });
    }

    solicitarCita = (e) => {
        e.preventDefault();
        console.log("fecha: ",this.state.fechaCita);
        axios.post(API_URL + 'citas/', {
            "pacienteId": this.props.children._id,
            "nombre": this.props.children.nombre,
            "apellidoPaterno": this.props.children.apellidoPaterno,
            "apellidoMaterno": this.props.children.apellidoMaterno,
            "fechaCita": this.state.fechaCita,//document.getElementById("fechaCita").value,
            "horaCita": document.getElementById("horaCita").value,
            "estudio": document.getElementById("estudio").value,
            "doctor": document.getElementById("doctor").value,
            "consultorio": document.getElementById("consultorio").value
        })
            .then(cita => {
                console.log('Cita status ', cita.data);
                if (cita.data.success) {
                    toast.success( cita.data.mensaje);
                    setTimeout(function(){
                        window.location.replace('/ListaCitas')
                    },2000);
                }else if(cita.data.err){
                    toast.error(cita.data.mensaje);
                }
                //window.location.reload(true);
                //return <Redirect to='/Citas' /> 
            }).catch(err => {
                toast.error("Algo salió mal");
                console.log('Error...', err);
            });
    }

    modFechaCita(date) {
        this.setState({fechaCita: date});
    }
    modHoraCita(e) {
        document.getElementById("horaCita").value = e.target.value;
    }
    modEstudio(e) {
        document.getElementById("estudio").value = e.target.value;
    }
    modDoctor(e) {
        document.getElementById("doctor").value = e.target.value;
    }
    modConsultorio(e) {
        document.getElementById("consultorio").value = e.target.value;
    }

    listaCitas = () => {
        this.props.history.push('/ListaCitas');
    }

    cargarSelect = () => {
        if (this.state.error) {
            return (
                <option>No hay opciones</option>
            );
        }
        return this.state.medicos.length ? this.state.medicos.map(md => {
            let doc = md.nombre + ' ' + md.apellidoPaterno + ' ' + md.apellidoMaterno;
            return (
                <option key={md._id} value={doc}>{doc}</option>
                //<input id="doctorId" hidden value={md._id}/>
            );
        }) : <div>Nada</div>
    }

    render() {
        let paciente = this.props.children.nombre + ' ' + this.props.children.apellidoPaterno + ' ' + this.props.children.apellidoMaterno;
        return (
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
                    centered
                    className="card-custome"
                >
                    <Modal.Header closeButton>
                        <Modal.Title className="centrarTexto">Solicitar Nueva Cita</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form >
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="paciente">Nombre del Paciente</label>
                                    <input type="text" onChange={this.cambio} readOnly defaultValue={paciente} id="paciente" className="form-control" placeholder="Nombre completo" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label htmlFor="fechaCita">Fecha de la Cita</label>
                                    {/*<input type="date" onChange={e => this.modfechaCita(e)} className="form-control" id="fechaCita" />*/}
                                    <DatePicker 
                                        id="fechaCita"
                                        selected={this.state.fechaCita} 
                                        onChange={this.modFechaCita} 
                                        className="form-control" 
                                        placeholderText="Seleccione una fecha"
                                    />
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
                                <div className="form-group col-md-6">
                                    <label htmlFor="doctor">Nombre del Médico</label>
                                    <select id="doctor" className="form-control" onChange={e => this.modDoctor(e)}>
                                        <option default>Seleccione una opción</option>
                                        {this.state.request ? <option>Cargando...</option> : this.cargarSelect()}
                                    </select>
                                    {/*<input type="text" onChange={e => this.modDoctor(e)} className="form-control" id="doctor" placeholder="Nombre completo" />*/}
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="consultorio">Consultorio</label>
                                    <select id="consultorio" className="form-control" onChange={e => this.modConsultorio(e)}>
                                        <option default>Seleccione una opción</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
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
                                    <MaterialIcon icon="close" className="material-icons"></MaterialIcon>
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