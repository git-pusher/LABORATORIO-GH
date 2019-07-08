import React, { Component } from 'react';
import axios from 'axios'
import API_URL from '../../constants';
import MaterialIcon from 'material-icons-react'
import Modal from 'react-bootstrap/Modal'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';

class ModalCambiarEstadoC extends Component {   
    desactivar(e) {
        e.preventDefault();
        console.log("ID: ", this.props.children._id);
        const id = this.props.children._id;
        let edo = this.props.children.estado;
        let esdo='';
        if (edo === "A") {
            edo = "I";
            esdo="Cancelada" ;  
        } else if (edo === "I") {
            edo = "A";
            esdo="Activa";
        }
        axios.put(API_URL + 'citas/' + id, {
            pacienteId: this.props.children.pacienteId,
            nombre: this.props.children.nombre,
            apellidoPaterno: this.props.children.apellidoPaterno,
            apellidoMaterno: this.props.children.apellidoMaterno,
            fechaCita: this.props.children.fechaCita,
            horaCita: this.props.children.horacita,
            estudio: this.props.children.estudio,
            doctor: this.props.children.doctor,
            consultorio: this.props.children.consultorio,
            estado: edo
        })
            .then(res => {
                this.setState({cita: res.data})
                console.log(":)", res.data);
                toast.success("Se cambió el estado correctamente: Cita "+ esdo); 
                 setTimeout( function(){
                    window.location.reload(true)
                }, 2000 );
            }).catch(err => {
                console.log("error: ", err);
                toast.err(err)
            });
        
    }

    render() {
        let paciente = this.props.children.nombre + ' ' + this.props.children.apellidoPaterno + ' ' + this.props.children.apellidoMaterno;
        return (
            <section>
                <ToastContainer
                    position="bottom-center"
                    autoClose={2000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                />
                <Modal
                    {...this.props}
                    size="sm"
                    centered
                    className="card-custome"
                    aria-labelledby="example-modal-sizes-title-sm"
                >
                    <Modal.Header closeButton>
                        <Modal.Title className="centrarTexto">Cambiar estado</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{paciente}</td>
                                    <td>&nbsp;&nbsp;&nbsp;{moment(this.props.children.fechaCita).format("YYYY-MM-DD")}</td>
                                </tr>
                                <tr></tr>
                                <tr>
                                    <td>{this.props.children.estado == "A"
                                        ?
                                            <button className="btn accionEstatus" onClick={e => this.desactivar(e)}>
                                                <MaterialIcon icon="block" className="material-icons"></MaterialIcon>
                                                &nbsp;Cancelar
                                            </button>
                                        :
                                            <button className="btn accionEstatus" onClick={e => this.desactivar(e)}>
                                                    <MaterialIcon icon="check" className="material-icons"></MaterialIcon>
                                                    &nbsp;Activar
                                            </button>}
                                    </td>
                                    <td>
                                        <button type="button" onClick={this.props.onHide} className="btn accionVolver">
                                            <MaterialIcon icon="close" className="material-icons"></MaterialIcon>
                                            &nbsp;Regresar
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Modal.Body>
                </Modal>
            </section>
        );
    }
}

export default ModalCambiarEstadoC;