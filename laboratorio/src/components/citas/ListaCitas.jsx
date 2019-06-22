import React, { Component } from 'react';
import axios from 'axios';
import API_URL from '../../constants';

import MaterialIcon from 'material-icons-react';


class ListaCitas extends Component {

    constructor(props){
        super(props);
        this.state= {
            request: true,
            citas: [],
            error: ''  
        }
    }

    componentDidMount(){
        this.getCitas();
    }
    
    getCitas = () => {
        console.log("URL: ", API_URL + 'citas');
        axios.get(API_URL + 'citas')
        .then(res => {
            console.log("Lista de Citas: ", res.data);
            this.setState({ citas: res.data, request: false });     
        }).catch(err => {
            console.log("Encontré un erro en citas :(");
            this.setState({error: err, request: false});
        });
    }

    pintarCitas = () => {
        console.log("pintando citas");
        if(this.state.error){
            return(
                <div>
					<p className="text-danger">Ocurrió un error inesperado</p>
					<p>{this.state.error}</p>
				</div>
            );
        }
        return this.state.citas.length ? this.state.citas.map(ct => {
            console.log("Tabla de citas");
            return(
                <tr key={ct._id}>
                    <td></td>
                    <td>{ct.paciente}</td>
                    <td>{ct.fechaCita}</td>
                    <td>{ct.horaCita}</td>
                    <td>{ct.estudio}</td>
                    <td>{ct.doctor}</td>
                    <td> <a href="#"><MaterialIcon icon="create" className="material-icons"></MaterialIcon>Editar</a></td>
                    <td> <a href="#"><MaterialIcon icon="delete" className="material-icons"></MaterialIcon>Borrar</a></td>
                    <td> <a href="#"><MaterialIcon icon="list_alt" className="material-icons"></MaterialIcon>Ver Citas</a></td>
                </tr>
            );  
        }) : <h1>No hay citas para mostrar</h1>
    }

    formCitas = () => {
        this.props.history.push('/citas');
    }

    render(){
        return(
            <div className="row md-12">
                <button className="btn btn-primary" onClick={this.formCitas}>
                    <MaterialIcon icon="add" className="material-icons"></MaterialIcon>
                    Nuevo Cita
                </button>
                <table className="table">
                <thead>
                    <tr>
                    <th ></th>
                    <th >Nombre del Paciente</th>
                    <th >Fecha de la cita</th>
                    <th >Hora</th>
                    <th>Estudio a realizar</th>
                    <th>Nombre del Doctor</th>
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