import React, { Component } from 'react';

import MaterialIcon from 'material-icons-react';
import moment from 'moment';

import Modal from 'react-bootstrap/Modal';

class ModalDetallesCita extends Component {

    render() {
        let estadoC = '';
        let paciente = this.props.children.nombre + ' ' + this.props.children.apellidoPaterno + ' ' + this.props.children.apellidoMaterno;
        let medico = this.props.children.doctor + ' ' + ' ';
        console.log("PACIENTE: ", paciente);
        
        if (this.props.children.estado === 'I') {
            estadoC = 'Cancelada';
        } else if (this.props.children.estado === 'A') {
            estadoC = 'Activa';
        }

        return (
            <section className="contendor">
                <Modal
                    {...this.props}
                    size="lg"
                    centered
                    className="card-custome"
                >
                    <Modal.Header closeButton>
                        <Modal.Title className="centrarTexto">Detalles de Cita Médica</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal-body">
                            <p><h5><b>Paciente:</b> {paciente} </h5>
                                <h5><b>Fecha: </b> {moment(this.props.children.fechaCita).format('DD/MM/YYYY')} </h5>
                                <h5><b>Hora: </b> {this.props.children.horaCita} </h5>
                                <h5><b>Estudio solicitado: </b> {this.props.children.estudio} </h5>
                                <h5><b>Médico asignado: </b> {medico} </h5>
                                <h5><b>Consultorio asignado: </b> {this.props.children.consultorio} </h5><br/>
                                <h5><b>Estado: </b> {estadoC}</h5>
                            </p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="form-row">
                            <button type="button" onClick={this.props.onHide} className="btn accionCancelar">
                                <MaterialIcon icon="close" className="material-icons"></MaterialIcon>
                                &nbsp;Cancelar
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
            </section>

        );

    }
}

export default ModalDetallesCita;