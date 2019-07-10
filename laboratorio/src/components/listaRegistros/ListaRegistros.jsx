import React, { Component } from 'react';
import axios from 'axios';
import API_URL from '../../constants';
import { NavLink } from 'react-router-dom';
import MaterialIcon from 'material-icons-react'
import ModalCambiarEstadoR from '../modals/ModalCambiarEstadoR';
import { Redirect } from "react-router-dom";

class ListaRegistros extends Component {

    constructor(props){
        super(props);
        this.state= {
            request: true,
            registros: [],
            registro: [],
            cambiarEstado: [],
            modalCambiarEstadoUsuario: false,
            error: ''
        }
    }

    componentDidMount(){
        this.getRegistros();
    }

    obtenerRegistro(e, _id) {
        e.preventDefault();
        const registro={}
        axios.get(API_URL+ `registros/${_id}`, registro)
        .then( registro => {
            this.setState({
                 registro: registro.data,
                //  modalNuevaCita: true
            })
             console.log("data: ", registro.data);
             console.log("Registro: ", registro.data.nombre);
        }).catch(err => {
            console.log("Error: ", err); 
        });
     }

    getRegistros = () => {
        console.log("URL: ", API_URL + 'registros');
        axios.get(API_URL + 'registros')
        .then(res => {
            console.log("Listado de registros: ", res.data);
            this.setState({ registros: res.data, request: false });
            console.log("Listado");
        }).catch(err => {                     
            this.setState({error: err, request: false });
        });
    }

    cambiarEstado(e, _id) {
        e.preventDefault();
        const registro = {};
        axios.get(API_URL + `registros/${_id}`, registro)
            .then(res => {
                this.setState({
                    cambiarEstado: res.data,
                    modalCambiarEstadoUsuario: true
                });
            }).catch(error => {
                console.log("Error en estado: ", error);
            })
    }

    pintarRegistros = () => {
        if(this.state.error){
            return(
                <div>
					<p className="text-danger">Ocurrió un error inesperado.</p>
					<p>{this.state.error}</p>
				</div>
            );
        }

        return this.state.registros.length ? this.state.registros.map(rgt => {
            console.log("Tabla registros");
            let modalCambiarEstadoUsuarioClose = () => this.setState({modalCambiarEstadoUsuario: false});
            return(
                    <tr key={rgt._id}>
                        {/* <th></th> */}
                        <td scope="col">{rgt.nombre}</td>
                        <td scope="col">{rgt.nombreUsuario}</td>
                        {/* <td scope="col">{rgt.password}</td> */}
                        <td scope="col" className="text-center">{rgt.estado === "I" 
                            ? <MaterialIcon icon ="block" className="material-icons"></MaterialIcon> 
                            : <MaterialIcon icon ="check" className="material-icons"></MaterialIcon>}
                        </td>
                        <td scope="col" className="text-right">
                            <NavLink to={`/EditarRegistro/${rgt._id}`}>
                                <button className="btn accionEditar align-items-center">
                                    <MaterialIcon icon="create" className="material-icons"></MaterialIcon>
                                    Editar
                                </button>
                            </NavLink>
                        </td>
                        <td scope="col" className="text-center">{rgt.estado === "A"
                            ?
                            <button className="btn accionDesactivar" onClick={(e) => this.cambiarEstado(e, rgt._id)}>
                                <MaterialIcon icon="toggle_off" className="material-icons"></MaterialIcon>
                                Desactivar
                            </button>
                            :
                            <button className="btn accionActivar" onClick={(e) => this.cambiarEstado(e, rgt._id)}>
                                <MaterialIcon icon="toggle_on" className="material-icons"></MaterialIcon>
                                Activar
                            </button>}
                            <ModalCambiarEstadoR show={this.state.modalCambiarEstadoUsuario} onHide={modalCambiarEstadoUsuarioClose}>{this.state.cambiarEstado}</ModalCambiarEstadoR>
                        </td>
                        
                        </tr>	
            );
        }) : <div className="cardCentrado">
                <div className="row md-12 card">
                    <div className="cardBorder card-body">
                        <b><h3 className="centrarTexto">No hay usuarios para mostrar.</h3></b>
                    </div>
                </div>
            </div>
    }

    formRegistros = () => {
        this.props.history.push('/registrar'); 
    }

    render(){
        return(
            <div className="row md-12 contenedor">
                <div className="row md-12 containerForm">
                        <button className="nuevo btn" onClick={this.formRegistros}>
                            <MaterialIcon icon="add" className="material-icons"></MaterialIcon>
                            Nuevo Usuario
                        </button>
                </div>
                    <table className="table">
                        <thead>
                            <tr className="cabTabla">                                
                                <th scope="col" className="text-center">Nombre</th>
                                <th scope="col" className="text-center">Usuario</th>
                                {/* <th scope="col">Contraseña</th> */}
                                <th scope="col" className="text-center">Estado</th>
                                <th colSpan="2" className="text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.request ? <tr> <th> <td scope="row">Cargando... </td></th></tr> : this.pintarRegistros()}
                        </tbody>
                    </table>
                </div>
            );
    }
    
}

export default ListaRegistros;