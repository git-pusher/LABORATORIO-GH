import React, { Component } from 'react';
import axios from 'axios';
import API_URL from '../../constants';
import MaterialIcon from 'material-icons-react'

class ListaUsuarios extends Component {

    constructor(props){
        super(props);
        this.state= {
            request: true,
            usuarios: [],
            error: ''
        }
    }

    editar = (e) => {
        e.preventDefault();
        if(this.props.type === 'update'){
            axios.post(API_URL+'usuarios/', this.state)
            .then(usuario => usuario.json())
            .then(item => this.props.state.div)
        }else if(this.props.type === 'delete'){

        }
        
      }

    componentDidMount(){
        this.getUsuarios();
    }

    getUsuarios = () => {
        console.log("URL: ", API_URL + 'usuarios');
        axios.get(API_URL + 'usuarios')
        .then(res => {
            console.log("Lista: ", res.data);
            this.setState({ usuarios: res.data, request: false });
            console.log("YA QUEDÓ LA LISTA USUARIOS");
        }).catch(err => {
            console.log("Encontré un error :( ");
            
            this.setState({error: err, request: false });
        });
    }

    pintarUsuarios = () => {
        console.log("pintar usuarios");
        if(this.state.error){
            return(
                <div>
					<p className="text-danger">Ocurrió un error inesperado</p>
					<p>{this.state.error}</p>
				</div>
            );
        }

        return this.state.usuarios.length ? this.state.usuarios.map(usu => {
            console.log("Tabla usuarios");
            return(
                    <tr key={usu._id}>
                        <th></th>
                        <td>{usu.nombre}</td>
                        <td>{usu.apellidoPaterno}</td>
                        <td>{usu.apellidoMaterno}</td>
                        <td>{usu.fechaNacimiento}</td>
                        <td>{usu.correoElectronico}</td>
                        <td>{usu.telefono}</td>
                        <td>{usu.direccion}</td>
                        <td> <a href="#"><MaterialIcon icon="create" className="material-icons"></MaterialIcon>Editar</a></td>
                        <td> <a href="#"><MaterialIcon icon="delete" className="material-icons"></MaterialIcon>Borrar</a></td>
                        <td> <a href="#"><MaterialIcon icon="list_alt" className="material-icons"></MaterialIcon>Ver Citas</a></td>
                    </tr>	
            );
        }) : <h1>No hay datos para mostrar</h1>
    }

    formUsuarios = () => {
        this.props.history.push('/usuarios'); 
    }

    render(){
        return(
            <div className="row md-12">
                <button className="btn btn-primary" onClick={this.formUsuarios}>
                    <MaterialIcon icon="add" className="material-icons"></MaterialIcon>
                    Nuevo Paciente
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
                    {this.state.request ? <tr><td>Cargando...</td></tr> : this.pintarUsuarios()}
                </tbody>
                </table>
            </div>
            );
    }
    
}

export default ListaUsuarios;