import React, { Component } from 'react';
import moment from 'moment';

import MaterialIcon from 'material-icons-react'
import Modal from 'react-bootstrap/Modal';

class ModalHistorialCitas extends Component {

    render() {        
        let paciente;
        let estadoC = '';
        const citas = this.props.children.map(cita => {
            paciente = cita.nombre + ' ' + cita.apellidoPaterno + ' ' + cita.apellidoMaterno;

            if (cita.estado === 'I') {
                estadoC = 'Cancelada';
            } else if (cita.estado === 'A') {
                estadoC = 'Pendiente';
            }

            return <tr key={cita._id}>
                <td></td>
                <td>{moment(cita.fechaCita).format('DD/MM/YYYY')}</td>
                <td>{cita.horaCita}</td>
                <td>{cita.estudio}</td>
                <td>{cita.doctor}</td>
                <td>{estadoC}</td>
            </tr>
        })
        return (
            <section className="contendor">
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    className="card-custome"
                >
                    <Modal.Header closeButton>
                        <Modal.Title className="">Historial de citas del paciente: {paciente}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <table className="table">
                            <thead>
                                <tr className="cabTabla">
                                    <th ></th>
                                    <th >Fecha</th>
                                    <th >Hora</th>
                                    <th>Estudio a realizar</th>
                                    <th>Nombre del Médico</th>
                                    <th>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {citas.length > 0 ? citas 
                                        : <div className="cardCentrado">
                                            <div className="row md-12 ">
                                                    <b><h3 className="centrarTexto">No hay datos para mostrar</h3></b>
                                            </div>
                                        </div>
                                }
                            </tbody>
                        </table>
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" onClick={this.props.onHide} className="btn accionCancelar">
                            <MaterialIcon icon="cancel" className="material-icons"></MaterialIcon>
                            &nbsp;Cancelar
                        </button>
                    </Modal.Footer>
                </Modal>
            </section>
        );

    }
}

export default ModalHistorialCitas;