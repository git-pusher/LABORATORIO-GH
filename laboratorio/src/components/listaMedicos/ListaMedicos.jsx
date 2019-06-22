import React, { Component } from 'react';
import axios from 'axios';
import API_URL from '../../constants';

import MaterialIcon from 'material-icons-react'

class ListaDoctores extends Component {

    constructor(props){
        super(props);
        this.state= {
            request: true,
            doctores: [],
            error: ''
        }
    }

    componentDidMount(){
        this.getDoctores();
    }

    getDoctores = () => {
        console.log("URL: ", API_URL + 'doctores');
        axios.get(API_URL + 'doctores')
        .then(res => {
            console.log("Lista: ", res.data);
            this.setState({ doctores: res.data, request: false });
            console.log("YA QUEDÓ LA LISTA de Doctores");
        }).catch(err => {
            console.log("Encontré un error :( ");
            
            this.setState({error: err, request: false });
        });
    }

    pintarDoctores = () => {
        console.log("pintando Doctores");
        if(this.state.error){
            return(
                <div>
					<p className="text-danger">Ocurrió un error inesperado</p>
					<p>{this.state.error}</p>
				</div>
            );
        }
        return this.state.doctores.length ? this.state.doctores.map(doct => {
            console.log("Tabla doctores");
            return(
                    <tr key={doct._id}>
                        <td></td>
                        <td>{doct.nombre}</td>
                        <td>{doct.apellidoPaterno}</td>
                        <td>{doct.apellidoMaterno}</td>
                        <td>{doct.correoElectronico}</td>
                        <td>{doct.telefono}</td>
                        <td>{doct.noCedula}</td>
                        <td>{doct.especialidad}</td>
                        <td> <a href="#"><MaterialIcon icon="create" className="material-icons"></MaterialIcon>Editar</a></td>
                        <td> <a href="#"><MaterialIcon icon="delete" className="material-icons"></MaterialIcon>Borrar</a></td>
                        <td> <a href="#"><MaterialIcon icon="list_alt" className="material-icons"></MaterialIcon>Ver Citas</a></td>
                    </tr>	
            );
        }) : <h1>No hay datos para mostrar</h1>
    }

    formDoctores = () => {
        this.props.history.push('/doctores'); 
    }

    render(){
        return(
            <div className="row md-12">
                <button className="btn btn-primary" onClick={this.formDoctores}>
                    <MaterialIcon icon="add" className="material-icons"></MaterialIcon>
                    Nuevo Doctor
                </button>
                <table className="table">
                <thead>
                    <tr>
                    <th ></th>
                    <th >Nombre</th>
                    <th >Apellido Paterno</th>
                    <th >Apellido Materno</th>
                    <th>correo Electrónico</th>
                    <th>Teléfono</th>
                    <th>Cédula Profesional</th>
                    <th>Especialidad</th>
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