import React, { Component } from 'react';
import axios from 'axios';
import API_URL from '../../constants';
import MaterialIcon from 'material-icons-react';

import './listaPaciente.css';

class ListaPacientes extends Component {

    constructor(props){
        super(props);
        this.state= {
            request: true,
            pacientes: [],
            error: ''
        }
    }

    editar = (e) => {
        e.preventDefault();
        if(this.props.type == 'update'){
            axios.post(API_URL+'pacientes/', this.state)
            .then(paciente => paciente.json())
            .then(item => this.props.state.div)
        }else if(this.props.type == 'delete'){

        }
        //axios.post(API_URL+'pacientes/', this.state)
        
      }

    componentDidMount(){
        this.getPacientes();
    }

    getPacientes = () => {
        console.log("URL: ", API_URL + 'pacientes');
        axios.get(API_URL + 'pacientes')
        .then(res => {
            console.log("Lista: ", res.data);
            this.setState({ pacientes: res.data, request: false });
            console.log("YA QUEDÓ LA LISTA");
        }).catch(err => {
            console.log("Encontré un error :( ");
            
            this.setState({error: err, request: false });
        });
    }

    pintarPacientes = () => {
        console.log("pintar Pacientes");
        if(this.state.error){
            return(
                <div>
					<p className="text-danger">Ocurrió un error inesperado</p>
					<p>{this.state.error}</p>
				</div>
            );
        }

        return this.state.pacientes.length ? this.state.pacientes.map(pct => {
            console.log("Tabla pacientes");
            return(
                    <tr key={pct._id}>
                        <th></th>
                        <td>{pct.nombre}</td>
                        <td>{pct.apellidoPaterno}</td>
                        <td>{pct.apellidoMaterno}</td>
                        <td>{pct.fechaNacimiento}</td>
                        <td>{pct.correoElectronico}</td>
                        <td>{pct.telefono}</td>
                        <td>{pct.direccion}</td>
                        <td> <button className="acciones"><MaterialIcon icon="create" className="material-icons"></MaterialIcon>Editar</button></td>
                        <td> <button className="acciones"><MaterialIcon icon="delete" className="material-icons"></MaterialIcon>Desactivar</button></td>
                        <td> <button className="acciones"><MaterialIcon icon="list_alt" className="material-icons"></MaterialIcon>Ver Citas</button></td>
                    </tr>	
            );
        }) : <h1>No hay datos para mostrar</h1>
    }

    formPacientes = () => {
        this.props.history.push('/pacientes'); 
    }

    render(){
        return(
            <div className="row md-12 contenedor">
                 <div className="row md-12 containerForm">
                    <button className="nuevo btn btn-primary" onClick={this.formPacientes}>
                        <MaterialIcon icon="add" className="material-icons"></MaterialIcon>
                        Nuevo Paciente
                    </button>
                </div>
                <table className="table">
                <thead>
                    <tr>
                    <th ></th>
                    <th >Nombre</th>
                    <th >Apellido Paterno</th>
                    <th >Apellido Materno</th>
                    <th>Fecha de Nacimiento</th>
                    <th>correo Electrónico</th>
                    <th>Teléfono</th>
                    <th>Dirección</th>
                    <th ></th>
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