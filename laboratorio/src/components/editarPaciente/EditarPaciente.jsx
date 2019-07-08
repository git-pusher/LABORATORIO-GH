import React, { Component } from 'react';
import axios from 'axios';
import API_URL from '../../constants';
import MaterialIcon from 'material-icons-react';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class EditarPaciente extends Component {
    constructor(props) {
        super(props);
        this.state = {
            request: true,
            pacientes: [],
            err: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.obtenerPaciente();
    }

    obtenerPaciente = e => {
        const { id } = this.props.match.params;
        axios.get(API_URL + `pacientes/${id}`)
            .then(res => {
                this.setState({
                    nombre: res.data.nombre,
                    apellidoPaterno: res.data.apellidoPaterno,
                    apellidoMaterno: res.data.apellidoMaterno,
                    fechaNacimiento: moment(res.data.fechaNacimiento).format("YYYY-MM-DD"),
                    correoElectronico: res.data.correoElectronico,
                    telefono: res.data.telefono,
                    direccion: res.data.direccion
                })
            }).catch(err => {
                console.log("error: ", err);
            });
    }

    editarRegistro = (e) => {
        e.preventDefault();
        const { id } = this.props.match.params;
        axios.put(API_URL + `pacientes/${id}`, {
            nombre: this.state.nombre,
            apellidoPaterno: this.state.apellidoPaterno,
            apellidoMaterno: this.state.apellidoMaterno,
            fechaNacimiento: this.state.fechaNacimiento,
            correoElectronico: this.state.correoElectronico,
            telefono: this.state.telefono,
            direccion: this.state.direccion,
            estado: this.state.estado
        }).
            then(res => {
                if(res.data.success){
                    console.log("Paciente actualizado con éxito");                
                    toast.success(res.data.mensaje);
                    setTimeout(function(){
                        window.location.replace('/ListaPacientes')
                      },2000);
                }else if(res.data.err){
                    console.log("Paciente actualizado con éxito");                
                    toast.err(res.data.mensaje);
                }
            }).catch(err => {
                console.log("ERROR: ", err);
                toast.success("ERROR al actualizar paciente");
                this.setState({ error: err, request: false });
            });
    }

    listaPacientes = () => {
        this.props.history.push('/ListaPacientes');
    }

    cambio = (event) => {
        const { id, value } = event.target;
        this.setState({ [id]: value });

        console.log(this.state);
    }

    handleChange(date){
        this.setState({ fechaNacimiento: date});
    }

    render() {
        return (
            <div className="contenedor">
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
                <form className="" onSubmit={this.editarRegistro}>
                    <div className="card">
                        <div className="cardBorder card-body">
                            <b><h3 className="centrarTexto">Editar Paciente: {this.state.nombre} {this.state.apellidoPaterno} {this.state.apellidoMaterno}</h3></b>
                        </div>
                    </div><br /><br />
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" onChange={this.cambio} className="form-control" id="nombre" value={this.state.nombre} placeholder="Nombre(s)" />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="apellidoPaterno">Apellido Paterno</label>
                            <input type="text" onChange={this.cambio} className="form-control" id="apellidoPaterno" value={this.state.apellidoPaterno} placeholder="Apellido Paterno" />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="apellidoMaterno">Apellido Materno</label>
                            <input type="text" onChange={this.cambio} className="form-control" id="apellidoMaterno" value={this.state.apellidoMaterno} placeholder="Apellido Materno" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
                            <input type="date" onChange={this.cambio} className="form-control" id="fechaNacimiento" value={this.state.fechaNacimiento} />
                            {/*<DatePicker
                                id="fechaNacimiento"
                                value={this.state.fechaNacimiento}
                                selected={this.state.fechaNacimiento} 
                                onChange={this.handleChange}
                                dateFormat="yyyy/MM/dd"
                                className="form-control" 
                                placeholderText="Seleccione una fecha"
                            />*/}
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="correoElectronico">Correo Electrónico</label>
                            <input type="email" onChange={this.cambio} className="form-control" id="correoElectronico" value={this.state.correoElectronico} placeholder="Ejemplo: correo@algo.com" />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="telefono">Teléfono</label>
                            <input type="text" onChange={this.cambio} className="form-control" id="telefono" value={this.state.telefono} placeholder="Ejemplo: 55 1122 3344" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="direccion">Dirección</label>
                            <input type="text" onChange={this.cambio} className="form-control" id="direccion" value={this.state.direccion} placeholder="Calle, #int, #ext, Col." />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="containerForm form-group col-md-12">
                            <button type="submit" className="btn accionGuardar">
                                <MaterialIcon icon="done" className="material-icons"></MaterialIcon>
                                &nbsp;Actualizar
                            </button>
                            <button type="button" onClick={this.listaPacientes} className="btn accionCancelar">
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

export default EditarPaciente;