import React, { Component } from 'react';
import axios from 'axios';
import API_URL from '../../constants';
import MaterialIcon from 'material-icons-react'

class ListaRegistros extends Component {

    constructor(props){
        super(props);
        this.state= {
            request: true,
            registros: [],
            error: ''
        }
    }

    // editar = (e) => {
    //     e.preventDefault();
    //     if(this.props.type === 'update'){
    //         axios.post(API_URL+'registros', this.state)
    //         .then(usuario => usuario.json())
    //         .then(item => this.props.state.div)
    //     }else if(this.props.type === 'delete'){

    //     }
        
    //   }

    componentDidMount(){
        this.getRegistros();
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
                        <th></th>
                        <td>{rgt.nombre}</td>
                        <td>{rgt.nombreUsuario}</td>
                        <td>{rgt.password}</td>
                        <td>
                            <NavLink to={`/EditarRegistro/${pct._id}`}>
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
                        <b><h3 className="centrarTexto">No hay registros para mostrar.</h3></b>
                    </div>
                </div>
            </div>
    }

    formRegistros = () => {
        this.props.history.push('/registros'); 
    }

    render(){
        return(
            <div className="row md-12">
                <button className="btn btn-primary" onClick={this.formRegistros}>
                    <MaterialIcon icon="add" className="material-icons"></MaterialIcon>
                    Nuevo Registro de usuario
                </button>
                <table className="table">
                <thead>
                    <tr>
                    <th ></th>
                    <th >Nombre</th>
                    <th >Usuario</th>
                    <th >Contraseña</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.request ? <tr><td>Cargando...</td></tr> : this.pintarRegistros()}
                </tbody>
                </table>
            </div>
            );
    }
    
}

export default ListaRegistros;