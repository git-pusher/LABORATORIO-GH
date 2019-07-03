import React, { Component } from 'react';
import axios from 'axios';
import API_URL from '../../constants';
import MaterialIcon from 'material-icons-react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import ModalDetallesCita from '../modals/ModalDetallesCita';

//import './citas.css';
import '../../App.css';



class ListaCitas extends Component {

    constructor(props){
        super(props);
        this.state= {
            request: true,
            citas: [],
            modalDetalleCita: false,
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
    
    detallesCita = (id, e) => {
        e.preventDefault();
        //this.props.history.push(`/ModalDetalleCita/${id}`);
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
            let modalDetalleCitaClose= () => this.setState({modalDetalleCita: false});
            return(
                <tr key={ct._id}>
                    <td></td>
                    <td>{ct.nombre} {ct.apellidoPaterno} {ct.apellidoMaterno}</td>
                    <td>{moment(ct.fechaCita).format('DD/MM/YYYY')}</td>
                    <td>{ct.horaCita}</td>
                    <td>{ct.estudio}</td>
                    <td>{ct.doctor}</td>
                    <td>{ct.estado}</td>
                    <td>
                        <NavLink to={`/EditarCita/${ct._id}`}>
                            <button className="btn accionEditar">
                                <MaterialIcon icon="create" className="material-icons"></MaterialIcon>
                                Editar
                            </button>
                        </NavLink>
                    </td>
                    <td>
                         <button className="btn accionDesactivar" id="estado">
                            <MaterialIcon icon="toggle_off" className="material-icons"></MaterialIcon>
                            Desactivar
                        </button>
                    </td>
                    <td>
                        <button className="btn accionCitas" >
                            <MaterialIcon icon="list_alt" className="material-icons"></MaterialIcon>
                            Ver Detalles
                        </button>
                        <ModalDetallesCita show={this.state.modalDetalleCita} onHide={modalDetalleCitaClose}>{this.state.cita}</ModalDetallesCita>
                    </td>
                </tr>
            );  
        }) : <div className="cardCentrado">
                <div className="row md-12 card">
                    <div className="cardBorder card-body">
                        <b><h3 className="centrarTexto">No hay datos para mostrar</h3></b>
                    </div>
                </div>
            </div>
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
                    <th>Estado</th>
                    <th></th>
                    <th>Acciones</th>
                    <th></th>
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