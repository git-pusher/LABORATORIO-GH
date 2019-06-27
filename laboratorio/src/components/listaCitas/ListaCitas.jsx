import React, { Component } from 'react';
import axios from 'axios';
import API_URL from '../../constants';
import MaterialIcon from 'material-icons-react';

//import './citas.css';
import '../../App.css';



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
            console.log("Lista Citas: ", res.data);
            this.setState({ citas: res.data, request: false });     
        }).catch(err => {
            this.setState({error: err, request: false});
        });
    }

    pintarCitas = () => {
        if(this.state.error){
            return(
                <div>
					<p className="text-danger">Ocurrió un error inesperado</p>
					<p>{this.state.error}</p>
				</div>
            );
        }
        return this.state.citas.length ? this.state.citas.map(ct => {
            return(
                <tr key={ct._id}>
                    <td></td>
                    <td>{ct.paciente}</td>
                    <td>{ct.fechaCita}</td>
                    <td>{ct.horaCita} a.m</td>
                    <td>{ct.estudio}</td>
                    <td>{ct.doctor}</td>
                    <td>
                        <button className="btn accionEditar">
                            <MaterialIcon icon="create" className="material-icons"></MaterialIcon>
                            Editar
                        </button>
                    </td>
                    <td>
                         <button className="btn accionDesactivar">
                            <MaterialIcon icon="toggle_off" className="material-icons"></MaterialIcon>
                            Desactivar
                        </button>
                    </td>
                    <td>
                        <button className="btn accionCitas">
                            <MaterialIcon icon="list_alt" className="material-icons"></MaterialIcon>
                            Ver Detalles
                        </button>
                    </td>
                </tr>
            );  
        }) : <h1>No hay citas para mostrar</h1>
    }

    formCitas = () => {
        this.props.history.push('/cita');
    }

    render(){
        return(
            <div className="row md-12 contenedor">
                <div className="row md-12 containerForm">
                    <button className="nuevo btn" onClick={this.formCitas}>
                        <MaterialIcon icon="add" className="material-icons"></MaterialIcon>
                        Nuevo Cita
                    </button>
                </div> 
                <table className="table">
                <thead>
                    <tr>
                    <th ></th>
                    <th >Nombre del Paciente</th>
                    <th >Fecha de la cita</th>
                    <th >Hora</th>
                    <th>Estudio a realizar</th>
                    <th>Nombre del Médico</th>
                    <th ></th>
                    <th ></th>
                    <th ></th>
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