import React, { Component } from 'react';
import axios from 'axios'
import API_URL from '../../constants';
import MaterialIcon from 'material-icons-react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

class ModalCambiarEstado extends Component {

    
    
    desactivar(e,d){
        e.preventDefault();
        console.log("ID: ", this.props.children._id);
        const id = this.props.children._id;
        axios.put(API_URL+'doctores/'+id, {
            nombre: this.state.nombre,
            apellidoPaterno: this.state.apellidoPaterno,
            apellidoMaterno: this.state.apellidoMaterno,
            correoElectronico: this.state.correoElectronico,
            telefono: this.state.telefono,              
            noCedula: this.state.noCedula,
            especialidad: this.state.especialidad
        })
        .then(res => {
            this.setState({estado: d})
            console.log(":)");
            
            
            
        }).catch(err => {
            console.log(":(");
        })
        
    }

    render() {
        let medico = this.props.children.nombre + ' ' + this.props.children.apellidoPaterno + ' ' + this.props.children.apellidoMaterno;
        console.log("médico: ", medico);
        
        return(
            <Modal
                {...this.props}
                size="sm"
                centered
                className="card-custome"
            >
                <Modal.Header closeButton>
                    <Modal.Title className="centrarTexto">Desactivar Médico</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{medico}</td>
                                <td>
                                <button className="btn accionEditar" onClick={e => this.desactivar(e,"I")}>
                                    <MaterialIcon icon="block" className="material-icons"></MaterialIcon>
                                </button>
                                </td>
                            </tr>
                        </tbody>                        
                    </table>
                </Modal.Body>
            </Modal>
        );
    }
}

export default ModalCambiarEstado;