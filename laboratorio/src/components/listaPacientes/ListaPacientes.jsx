import React, { Component } from 'react';
import axios from 'axios';
import API_URL from '../../constants';
import MaterialIcon from 'material-icons-react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

import ModalCrearCita from '../modals/ModalCrearCita';
import ModalHistorialCitas from '../modals/ModalHistorialCitas';
import ModalCambiarEstadoP from '../modals/ModalCambiarEstadoP';

//import './listaPaciente.css';
import '../../App.css';

class ListaPacientes extends Component {

    constructor(props){
        super(props);
        this.state= {
            request: true,
            pacientes: [],
            paciente:[],
            historialCitas: [],
            cita: [],
            cambiarEstado: [],
            modalNuevaCita: false,
            modalHistorialPaciente: false,
            modalCambiarEstadoPaciente: false,
            error: ''
        }
    }
    
    componentDidMount(){
        this.getPacientes();
    }

    obtenerPaciente(e, _id) {
        e.preventDefault();
       const paciente={}
       axios.get(API_URL+ `pacientes/${_id}`, paciente)
       .then( paciente => {
           this.setState({
                paciente: paciente.data,
                modalNuevaCita: true
           });
       }).catch(err => {
           console.log("Error: ", err); 
       });
    }

    historialPaciente(e, pacienteId){
        e.preventDefault();
        console.log("ID Paciente:", pacienteId);
        
        axios.get(API_URL+ `citasPacientes/${pacienteId}`)
        .then( res => {
           if(res.data.success){
            this.setState({
                historialCitas: res.data.citas,
                modalHistorialPaciente: true
            });
           }
        }).catch(err => {
           console.log("Error: ", err); 
        });
    }

    getPacientes = () => {
        console.log("URL: ", API_URL + 'pacientes');
        axios.get(API_URL + 'pacientes')
        .then(res => {
            console.log("Lista Pacientes: ", res.data);
            this.setState({ pacientes: res.data, request: false });
        }).catch(err => {
            this.setState({error: err, request: false });
        });
    }

    cambiarEstado(e, _id) {
        e.preventDefault();
        const paciente = {};
        axios.get(API_URL + `pacientes/${_id}`, paciente)
            .then(res => {
                this.setState({
                    cambiarEstado: res.data,
                    modalCambiarEstadoPaciente: true
                });
            }).catch(error => {
                console.log("Error en estado: ", error);
            })
    }

    pintarPacientes = () => {
        if(this.state.error){
            return(
                <div>
					<p className="text-danger">Ocurrió un error inesperado</p>
					<p>{this.state.error}</p>
				</div>
            );
        }
        return this.state.pacientes.length ? this.state.pacientes.map(pct => {
            let modalNuevaCitaClose = () => this.setState({modalNuevaCita: false});
            let modalHistorialPacienteClose = () => this.setState({modalHistorialPaciente: false});
            let modalCambiarEstadoPacienteClose = () => this.setState({modalCambiarEstadoPaciente: false});
            return(
                    <tr key={pct._id}>
                        <td>{pct.nombre} {pct.apellidoPaterno} {pct.apellidoMaterno}</td>
                        <td>{moment(pct.fechaNacimiento).format('DD-MM-YYYY')}</td>
                        <td>{pct.correoElectronico}</td>
                        <td>{pct.telefono}</td>
                        <td>{pct.direccion}</td>
                        <td>{pct.estado === "I" 
                        ? <MaterialIcon icon ="block" className="material-icons"></MaterialIcon> 
                        : <MaterialIcon icon ="check" className="material-icons"></MaterialIcon>}</td>
                        <td>
                            <NavLink to={`/EditarPaciente/${pct._id}`}>
                                <button className="btn accionEditar">
                                    <MaterialIcon icon="create" className="material-icons"></MaterialIcon>
                                    Editar
                                </button>
                            </NavLink>
                        </td>
                        <td>{pct.estado === "A"
                            ?
                            <button className="btn accionDesactivar" onClick={(e) => this.cambiarEstado(e, pct._id)}>
                                <MaterialIcon icon="toggle_off" className="material-icons"></MaterialIcon>
                                Desactivar
                            </button>
                            :
                            <button className="btn accionActivar" onClick={(e) => this.cambiarEstado(e, pct._id)}>
                                <MaterialIcon icon="toggle_on" className="material-icons"></MaterialIcon>
                                Activar
                            </button>}
                            <ModalCambiarEstadoP show={this.state.modalCambiarEstadoPaciente} onHide={modalCambiarEstadoPacienteClose}>{this.state.cambiarEstado}</ModalCambiarEstadoP>
                        </td>
                        <td>
                            <button className="btn accionCitas" onClick={(e) => this.obtenerPaciente(e, pct._id)}>
                                <MaterialIcon icon="add" className="material-icons"></MaterialIcon>
                                Cita
                            </button>
                            <ModalCrearCita show={this.state.modalNuevaCita} onHide={modalNuevaCitaClose}>{this.state.paciente}</ModalCrearCita>
                        </td>
                        <td>
                            <button className="btn accionHistorial" onClick={(e) => this.historialPaciente(e, pct._id)}>
                                <MaterialIcon icon="list_alt" className="material-icons"></MaterialIcon>
                                Historial
                            </button>
                            <ModalHistorialCitas show={this.state.modalHistorialPaciente} onHide={modalHistorialPacienteClose}>{this.state.historialCitas}</ModalHistorialCitas>
                        </td>
                    </tr>	
            );
        }) : <div className="cardCentrado">
                <div className="row md-12 card">
                    <div className="cardBorder card-body">
                        <b><h3 className="centrarTexto">No hay datos para mostrar</h3></b>
                    </div>
                </div>
            </div>
    }

    formPacientes = () => {
        this.props.history.push('/pacientes'); 
    }
    render(){
        return(
            <div className="row md-12 contenedor">
                 <div className="row md-12 containerForm">
                    <button className="nuevo btn" onClick={this.formPacientes}>
                        <MaterialIcon icon="add" className="material-icons"></MaterialIcon>
                        Nuevo Paciente
                    </button>
                </div>
                <table className="table">
                    <thead>
                        <tr className="cabTabla">
                        <th >Nombre Completo</th>
                        <th>Fecha de Nacimiento</th>
                        <th>Correo Electrónico</th>
                        <th>Teléfono</th>
                        <th>Dirección</th>
                        <th >Estado</th>
                        <th></th>
                        <th >Acciones</th>
                        <th ></th>
                        <th ></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.request ? <tr><td>Cargando...</td></tr> : this.pintarPacientes()}
                    </tbody>
                </table>
            </div>
        );
    }
    
}

export default ListaPacientes;