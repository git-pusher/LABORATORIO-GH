import React, { Component } from 'react';
import axios from 'axios';
import API_URL from '../../constants';
import { NavLink } from 'react-router-dom';
import MaterialIcon from 'material-icons-react'

class ListaRegistros extends Component {

    constructor(props){
        super(props);
        this.state= {
            request: true,
            registros: [],
            registro: [],
            error: ''
        }
    }

    componentDidMount(){
        this.getRegistros();
    }

    obtenerRegistro(e, _id) {
        const registro={}
        axios.get(API_URL+ `registros/${_id}`, registro)
        .then( registro => {
            this.setState({
                 registro: registro.data,
                 modalNuevaCita: true
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
            console.log("YA QUEDÓ EL LISTADO DE REGISTROS DE USUARIO");
        }).catch(err => {
            console.log("Encontré un error :( ");            
            this.setState({error: err, request: false });
        });
    }

    pintarRegistros = () => {
        console.log("pintar registros");
        if(this.state.error){
            return(
                <div>
					<p className="text-danger">Ocurrió un error inesperado</p>
					<p>{this.state.error}</p>
				</div>
            );
        }

        return this.state.registros.length ? this.state.registros.map(rgt => {
            console.log("Tabla registros");
            return(
                    <tr key={rgt._id}>
                        {/* <th></th> */}
                        <td>{rgt.nombre}</td>
                        <td>{rgt.nombreUsuario}</td>
                        <td>{rgt.password}</td>
                        <td>
                            <NavLink to={`/EditarRegistro/${rgt._id}`}>
                                <button className="btn accionEditar">
                                    <MaterialIcon icon="create" className="material-icons"></MaterialIcon>
                                    Editar
                                </button>
                            </NavLink>
                        </td>
                        <td>
                            <button className="btn accionDesactivar" type="submit">
                                <MaterialIcon icon="toggle_off" className="material-icons"></MaterialIcon>
                                Desactivar
                            </button>
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
                <div className="row administrador">
                    <div className="col ">
                    <b><h3 className="centrarTexto">Bienvenido: {this.state.nombre}</h3></b>
                    </div>
                    <div className="col btn-nuevo-usuario">
                        <button className="" onClick={this.formRegistros}>
                            <MaterialIcon icon="add" className="material-icons"></MaterialIcon>
                            Nuevo Usuario
                        </button>
                    </div>
                </div>
                    <table className="table ">
                        <thead>
                            <tr>                                
                                <th scope="col">Nombre</th>
                                <th scope="col">Usuario</th>
                                <th scope="col">Contraseña</th>
                                <th scope="col"></th>
                                <th colspan="2">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.request ? <tr><td scope="row">Cargando... </td></tr> : this.pintarRegistros()}
                        </tbody>
                    </table>
                </div>
            );
    }
    
}

export default ListaRegistros;