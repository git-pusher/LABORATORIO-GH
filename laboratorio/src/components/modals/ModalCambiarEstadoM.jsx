import React, { Component } from 'react';
import axios from 'axios'
import API_URL from '../../constants';
import MaterialIcon from 'material-icons-react'
import Modal from 'react-bootstrap/Modal'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

class ModalCambiarEstadoM extends Component {

    desactivar(e) {
        e.preventDefault();
        console.log("ID: ", this.props.children._id);
        const id = this.props.children._id;
        let edo = this.props.children.estado;
        let esdo='';
        if (edo === "A") {
            edo = "I";
            esdo="Inactivo" ;  
        } else if (edo === "I") {
            edo = "A";
            esdo="Activo";
        }
        axios.put(API_URL + 'doctores/' + id, {
            nombre: this.props.children.nombre,
            apellidoPaterno: this.props.children.apellidoPaterno,
            apellidoMaterno: this.props.children.apellidoMaterno,
            correoElectronico: this.props.children.correoElectronico,
            telefono: this.props.children.telefono,
            noCedula: this.props.children.noCedula,
            especialidad: this.props.children.especialidad,
            estado: edo
        })
            .then(res => {
                this.setState({medico: res.data})
                console.log(":)", res.data);
                toast.success("Se cambió el estado correctamente: Médico "+ esdo);
                setTimeout(function(){
                    window.location.reload(true);
                  },2000);  
            }).catch(err => {
                console.log("error: ", err);
                toast.err(err)
            })
    }

    render() {
        let medico = this.props.children.nombre + ' ' + this.props.children.apellidoPaterno + ' ' + this.props.children.apellidoMaterno;
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
                                    <td>{medico}</td>
                                </tr>
                                <tr></tr>
                                <tr>
                                    <td>{this.props.children.estado == "A"
                                        ?
                                            <button className="btn accionEstatus" onClick={e => this.desactivar(e)}>
                                                <MaterialIcon icon="block" className="material-icons"></MaterialIcon>
                                                &nbsp;Desactivar
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
                                            &nbsp;Cancelar
                                        </button></td>
                                </tr>
                            </tbody>
                        </table>
                    </Modal.Body>
                </Modal>
            </section>
        );
    }
}

export default ModalCambiarEstadoM;