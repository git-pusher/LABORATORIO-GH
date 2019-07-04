import React, { Component } from 'react';
import axios from 'axios';
import API_URL from '../../constants';
import MaterialIcon from 'material-icons-react';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Cita extends Component {

    guardar = (e) => {
        e.preventDefault();
        console.log('Creando cita...');
        axios.post(API_URL+'citas/', this.state)
        .then(cita => {
            console.log('Cita creada correctamente: ', cita, this.state);
            this.listaCitas();
        }).catch(err => {
            console.log('Error...', err);
        });
    }

    cambio = (event) => {
        const { id, value } = event.target;
        this.setState({ [id]: value });
        
        console.log(this.state);
    }

    listaCitas = ()=>{
        this.props.history.push('/ListaCitas'); 
      }

    //listarDoctores =()

    render(){  
          //let paciente = this.props.children.nombre + ' ' + this.props.children.apellidoPaterno + ' ' + this.props.children.apellidoMaterno;
        return(
            <div className="contenedor">
                <form className="" onSubmit={this.guardar}>    
                    <div className="card">
                        <div className=" card-body">
                        <b><h3 className="centrarTexto">Solicitar Nueva Cita</h3></b>
                        </div>
                    </div><br/><br/>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="paciente">Nombre del Paciente</label>
                            <input type="text" onChange={this.cambio} className="form-control" id="paciente" placeholder="Nombre completo"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label htmlFor="fechaCita">Fecha de la Cita</label>
                            <input type="date" onChange={this.cambio} className="form-control" id="fechaCita"/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="horaCita">Hora de la Cita</label>
                            <input type="time" onChange={this.cambio} className="form-control" id="horaCita" />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="estudio">Estudio</label>
                                <select id="estudio" className="form-control" onChange={this.cambio}>
                                    <option default>Seleccione una opción</option>
                                    <option value="Hematología Completa">Hematología Completa</option>
                                    <option value="Química Sanguínea">Química Sanguínea</option>
                                    <option value="Análisis de Enzimas Sanguíneas">Análisis de Enzimas Sanguíneas</option>
                                    <option value="Pruebas de Coagulación">Pruebas de Coagulación</option>
                                </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="doctor">Nombre del Médico</label>
                            <input type="text" onChange={this.cambio} className="form-control" id="doctor" placeholder="Nombre completo"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="containerForm form-group col-md-12">
                            <button type="submit" className="btn accionGuardar" >
                                <MaterialIcon icon="mail" className="material-icons"></MaterialIcon>
                                &nbsp;Enviar Solicitud 
                            </button>
                            <button type="button" onClick={this.listaCitas} className="btn accionCancelar">
                                <MaterialIcon icon="cancel" className="material-icons"></MaterialIcon>
                                &nbsp;Cancelar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Cita;