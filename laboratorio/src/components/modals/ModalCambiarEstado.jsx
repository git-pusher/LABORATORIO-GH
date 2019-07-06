import React, { Component } from 'react';
import axios from 'axios'
import API_URL from '../../constants';
import MaterialIcon from 'material-icons-react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

class ModalCambiarEstado extends Component {

    render() {
        <Modal
            {...this.props}
            size="lg"
            centered
            className="card-custome"
        >
            <Modal.Header closeButton>
                <Modal.Title className="centrarTexto">Solicitar Nueva Cita</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <h1>Cambiando estado</h1>
                </div>
            </Modal.Body>
        </Modal>
    }
}

export default ModalCambiarEstado;