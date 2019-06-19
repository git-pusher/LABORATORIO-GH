import React, { Component } from 'react';
import axios from 'axios';
import API_URL from '../constants';

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
                        <td> <a href="#"><span className="glyphicon glyphicon-search"></span>Editar</a></td>
                        <td> <a href="#"><span className="glyphicon glyphicon-search"></span>Borrar</a></td>
                        <td> <a href="#"><span className="glyphicon glyphicon-search"></span>Ver Citas</a></td>
                    </tr>	
            );
        }) : <h1>No hay datos para mostrar</h1>
    }

    render(){
        return(
            <div className="row md-12">
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
                    </tr>
                </thead>
                <tbody>
                    {this.state.request ? <p>Cargando...</p> : this.pintarPacientes()}
                </tbody>
                </table>
            </div>
            );
    }
    
}

export default ListaPacientes;