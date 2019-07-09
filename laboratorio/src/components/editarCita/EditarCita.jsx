import React, { Component } from 'react';
import axios from 'axios';
import API_URL from '../../constants';
import MaterialIcon from 'material-icons-react';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class EditarCita extends Component {
    constructor(props) {
        super(props);
        this.state = {
            request: true,
            cita: [],
            medicos: [],
            error: ''
        };
        //this.verDetalles = this.verDetalles.bind(this);

    }
    componentDidMount() {
        this.obtenerCita();
        this.getMedicos();
    }

    obtenerCita = e => {
        const { id } = this.props.match.params;
        axios.get(API_URL+`citas/${id}`)
        .then(res => {
            this.setState({
                pacienteId: res.data.pacienteId,
                nombre: res.data.nombre,
                apellidoPaterno: res.data.apellidoPaterno,
                apellidoMaterno: res.data.apellidoMaterno,
                fechaCita: moment(res.data.fechaCita).format('YYYY-MM-DD'),
                horaCita: moment(res.data.horacita).format("HH:mm"),
                estudio: res.data.estudio,
                doctor: res.data.doctor,
                consultorio: res.data.consultorio,
                estado: res.data.estado
            });
            console.log(res.data);
        }).catch(error => {
            console.log("ERROR: ", error);
            toast.success("ERROR al actualizar médico");
            this.setState({ error: error, request: false });
        })
    }

    editarRegistro = (e) => {
        e.preventDefault();
        const { id } = this.props.match.params;
        console.log("Editar registro");
        
        axios.put(API_URL + `citas/${id}`, {
            pacienteId: this.state.pacienteId,
            nombre: this.state.nombre,
            apellidoPaterno: this.state.apellidoPaterno,
            apellidoMaterno: this.state.apellidoMaterno,
            fechaCita: moment(this.state.fechaCita).format('YYYY-MM-DD'),
            horaCita: moment(this.state.horacita).format("HH:mm"),
            estudio: this.state.estudio,
            doctor: this.state.doctor,
            consultorio: this.state.consultorio,
            estado: this.state.estado
        }).
            then(res => {
                if(res.data.success){
                    console.log("Cita actualizada con éxito");
                    toast.success(res.data.mensaje);
                    setTimeout(function(){
                        window.location.replace('/ListaCitas');
                      },2000);
                }else if(res.data.err){
                    console.log("ERROR al actualizar cita");
                    toast.error(res.data.mensaje);
                } 
            }).catch(err => {
                console.log("ERROR: ", err);
                toast.error("ERROR al actualizar cita");
                this.setState({ error: err, request: false });
            });
    }

    listaCitas = () => {
        this.props.history.push('/ListaCitas');
    }

    cambio = (event) => {
        const { id, value } = event.target;
        this.setState({ [id]: value })
        console.log(this.state);
    }

    getMedicos = () => {
        axios.get(API_URL + 'doctores')
            .then(res => {
                this.setState({ medicos: res.data, request: false });
            }).catch(err => {
                this.setState({ error: err, request: false });
            });
    }

    cargarSelect = () => {
        if (this.state.error) {
            return (
                <option>No hay opciones</option>
            );
        }
        return this.state.medicos.length ? this.state.medicos.map(md => {
            let doc = md.nombre + ' ' + md.apellidoPaterno + ' ' + md.apellidoMaterno;
            return (
                <option key={md._id} value={doc}>{doc}</option>
                //<input id="doctorId" hidden value={md._id}/>
            );
        }) : <div>Nada</div>
    }

    render() {
        let paciente = this.state.nombre + ' ' + this.state.apellidoPaterno + ' ' + this.state.apellidoMaterno;
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
                            <b><h3 className="centrarTexto">Editar Cita</h3></b>
                        </div>
                    </div><br /><br />
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="paciente">Nombre del Paciente</label>
                            <input type="text" disabled className="form-control" id="paciente" value={paciente} placeholder="Nombre completo" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label htmlFor="fechaCita">Fecha de la Cita</label>
                            <input type="date" onChange={this.cambio} className="form-control" id="fechaCita" value={this.state.fechaCita} />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="horaCita">Hora de la Cita</label>
                            <input type="time" onChange={this.cambio} className="form-control" id="horaCita" value={this.state.horaCita} />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="estudio">Estudio</label>
                            {/*<input type="text" disabled onChange={this.cambio} className="form-control" id="horaCita" value={this.state.estudio} />*/}
                            <select id="estudio" className="form-control" onChange={this.cambio}>
                                <option default>{this.state.estudio}</option>
                                <option value="Hematología Completa">Hematología Completa</option>
                                <option value="Química Sanguínea">Química Sanguínea</option>
                                <option value="Análisis de Enzimas Sanguíneas">Análisis de Enzimas Sanguíneas</option>
                                <option value="Pruebas de Coagulación">Pruebas de Coagulación</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="doctor">Nombre del Médico</label>
                            <select id="doctor" className="form-control" onChange={this.cambio}>
                                <option default>{this.state.doctor}</option>
                                {this.state.request ? <option>Cargando...</option> : this.cargarSelect()}
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="consultorio">Consultorio</label>
                            <select id="consultorio" className="form-control" onChange={this.cambio}>
                                <option default>{this.state.consultorio}</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="containerForm form-group col-md-12">
                            <button type="submit" className="btn accionGuardar" >
                                <MaterialIcon icon="mail" className="material-icons"></MaterialIcon>
                                &nbsp;Actualizar
                            </button>
                            <button type="button" onClick={this.listaCitas} className="btn accionCancelar" >
                                <MaterialIcon icon="clear" className="material-icons"></MaterialIcon>
                                &nbsp;Cerrar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditarCita;