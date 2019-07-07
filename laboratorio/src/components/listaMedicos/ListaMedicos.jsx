import React, { Component } from 'react';
import axios from 'axios';
import API_URL from '../../constants';
import MaterialIcon from 'material-icons-react';
import { NavLink } from 'react-router-dom';

//import './listaMedicos.css';
import '../../App.css';

class ListaDoctores extends Component {

    constructor(props) {
        super(props);
        this.state = {
            request: true,
            doctores: [],
            error: ''
        }
    }

    componentDidMount() {
        this.getDoctores();
    }

    getDoctores = () => {
        console.log("URL: ", API_URL + 'doctores');
        axios.get(API_URL + 'doctores')
            .then(res => {
                console.log("Lista Médicos: ", res.data);
                this.setState({ doctores: res.data, request: false });
            }).catch(err => {
                this.setState({ error: err, request: false });
            });
    }

    pintarDoctores = () => {
        if (this.state.error) {
            return (
                <div>
                    <p className="text-danger">Ocurrió un error inesperado</p>
                    <p>{this.state.error}</p>
                </div>
            );
        }
        return this.state.doctores.length ? this.state.doctores.map(doct => {
            return (
                <tr key={doct._id}>
                    <td></td>
                    <td>{doct.nombre} {doct.apellidoPaterno} {doct.apellidoMaterno}</td>
                    <td>{doct.correoElectronico}</td>
                    <td>{doct.telefono}</td>
                    <td>{doct.noCedula}</td>
                    <td>{doct.especialidad}</td>
                    <td>
                        <NavLink to={`/EditarMedico/${doct._id}`}>
                            <button className="btn accionEditar">
                                <MaterialIcon icon="create" className="material-icons"></MaterialIcon>
                                Editar
                                </button>
                        </NavLink>
                    </td>
                    <td>
                        <button className="btn accionDesactivar">
                            <MaterialIcon icon="toggle_off" className="material-icons"></MaterialIcon>
                            Desactivar
                            </button>
                    </td>
                </tr>
            );
        }) : <div className="cardCentrado">
                <div className="row md-12 card">
                    <div className="cardBorder card-body">
                        <b><h3 className="centrarTexto">No hay datpos para mostrar</h3></b>
                    </div>
                </div>
            </div>
    }

    formDoctores = () => {
        this.props.history.push('/medicos');
    }

    render() {
        return (
            <div className="row md-12 contenedor">
                <div className="row md-12 containerForm">
                    <button className="nuevo btn" onClick={this.formDoctores}>
                        <MaterialIcon icon="add" className="material-icons"></MaterialIcon>
                        Nuevo Médico
                    </button>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th ></th>
                            <th >Nombre Completo</th>
                            <th>correo Electrónico</th>
                            <th>Teléfono</th>
                            <th>Cédula Profesional</th>
                            <th>Especialidad</th>
                            <th ></th>
                            <th >Acciones</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.request ? <tr><td>Cargando...</td></tr> : this.pintarDoctores()}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default ListaDoctores;