import React, { Component } from 'react';
import axios from 'axios';
import API_URL from '../../constants';
import MaterialIcon from 'material-icons-react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import ModalDetallesCita from '../modals/ModalDetallesCita';
import ModalCambiarEstadoC from '../modals/ModalCambiarEstadoC';

//import './citas.css';
import '../../App.css';

class ListaCitas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            request: true,
            citas: [],
            cita: [],
            modalDetalleCita: false,
            modalCambiarEstadoCita: false,
            cambiarEstado: [],
            error: ''
        }
    }

    componentDidMount() {
        this.getCitas();
    }

    getCitas = () => {
        axios.get(API_URL + 'citas')
            .then(res => {
                console.log("Lista Citas: ", res.data);
                this.setState({ citas: res.data, request: false });
            }).catch(err => {
                this.setState({ error: err, request: false });
            });
    }

    obtenerCita(e, _id) {
        //e.preventDefault();
        const cita = {}
        axios.get(API_URL + `citas/${_id}`, cita)
            .then(cita => {
                this.setState({
                    cita: cita.data,
                    modalDetalleCita: true
                });
            }).catch(err => {
                console.log("Error: ", err);
            });
    }

    cambiarEstado(e, _id) {
        e.preventDefault();
        const citas = {};
        axios.get(API_URL + `citas/${_id}`, citas)
            .then(res => {
                this.setState({
                    cambiarEstado: res.data,
                    modalCambiarEstadoCita: true
                });
            }).catch(error => {
                console.log("Error en estado: ", error);
            })
    }

    pintarCitas = () => {
        if (this.state.error) {
            return (
                <div>
                    <p className="text-danger">Ocurrió un error inesperado</p>
                    <p>{this.state.error}</p>
                </div>
            );
        }
        return this.state.citas.length ? this.state.citas.map(ct => {
            let modalDetalleCitaClose = () => this.setState({ modalDetalleCita: false });
            let modalCambiarEstadoCitaClose = () => this.setState({modalCambiarEstadoCita: false});
            return (
                <tr key={ct._id}>
                    <td></td>
                    <td>{ct.nombre} {ct.apellidoPaterno} {ct.apellidoMaterno}</td>
                    <td>{moment(ct.fechaCita).format('DD/MM/YYYY')}</td>
                    <td>{ct.horaCita}</td>
                    <td>{ct.estudio}</td>
                    <td>{ct.doctor}</td>
                    <td>{ct.estado === "I" 
                        ? <MaterialIcon icon ="block" className="material-icons"></MaterialIcon> 
                        : <MaterialIcon icon ="check" className="material-icons"></MaterialIcon>}
                    </td>
                    <td>
                        <NavLink to={`/EditarCita/${ct._id}`}>
                            <button className="btn accionEditar">
                                <MaterialIcon icon="create" className="material-icons"></MaterialIcon>
                                Editar
                            </button>
                        </NavLink>
                    </td>
                    <td>{ct.estado === "A"
                        ?
                        <button className="btn accionDesactivar" id="estado" onClick={(e) => this.cambiarEstado(e, ct._id)}>
                            <MaterialIcon icon="toggle_off" className="material-icons"></MaterialIcon>
                            Cancelar
                        </button>
                        :
                        <button className="btn accionActivar" onClick={(e) => this.cambiarEstado(e, ct._id)}>
                            <MaterialIcon icon="toggle_on" className="material-icons"></MaterialIcon>
                            Activar
                        </button>}
                        <ModalCambiarEstadoC show={this.state.modalCambiarEstadoCita} onHide={modalCambiarEstadoCitaClose}>{this.state.cambiarEstado}</ModalCambiarEstadoC>
                    </td>
                    <td>
                        <button className="btn accionCitas" onClick={e => this.obtenerCita(e, ct._id)}>
                            <MaterialIcon icon="list_alt" className="material-icons"></MaterialIcon>
                            Detalles
                        </button>
                        <ModalDetallesCita show={this.state.modalDetalleCita} onHide={modalDetalleCitaClose}>{this.state.cita}</ModalDetallesCita>
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

    formCitas = () => {
        this.props.history.push('/cita');
    }

    render() {
        return (
            <div className="row md-12 contenedor">
                <div className="row md-12 containerForm">
                    <button className="nuevo btn" onClick={this.formCitas}>
                        <MaterialIcon icon="add" className="material-icons"></MaterialIcon>
                        Nuevo Cita
                    </button>
                </div>
                <table className="table">
                    <thead>
                        <tr className="cabTabla">
                            <th ></th>
                            <th >Nombre del Paciente</th>
                            <th >Fecha de la cita</th>
                            <th >Hora</th>
                            <th>Estudio a realizar</th>
                            <th>Nombre del Médico</th>
                            <th>Estado</th>
                            <th></th>
                            <th>Acciones</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.request ? <tr><td>Cargando...</td></tr> : this.pintarCitas()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ListaCitas;