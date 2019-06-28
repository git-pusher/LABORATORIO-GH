import React, { Component } from 'react';
import axios from 'axios';
import API_URL from '../../constants';
import MaterialIcon from 'material-icons-react';

class EditarCita extends Component {
    constructor(props) {
        super(props);
        this.state = {
            request: true,
            citas: [],
            error: ''
        };
        this.verDetalles = this.verDetalles.bind(this);
    
    }
    componentDidMount() {
        this.verDetalles();
    }

    verDetalles = (e) => { 
        const {id} = this.props.match.params;
        const cita ={
            paciente: this.state.paciente,
            fechaCita: this.state.fechaCita,
            horaCita: this.state.horaCita,
            estudio: this.state.estudio,
            doctor: this.state.doctor
        }
        axios.put(API_URL + `citas/${id}`, cita).
        then(res => {
            console.log("Detalles: ", res.data);
            //this.setState({ citas: res.data, request: false });
            this.setState({ 
                paciente: res.data.paciente,
                fechaCita:res.data.fechaCita,
                horaCita: res.data.horacita,
                estudio:  res.data.estudio,
                doctor:   res.data.doctor

            });
        }).catch(err => {
            console.log("ERROR: ", err);
            this.setState({error: err, request: false});
        });
    }

    listaCitas = () => {
        this.props.history.push('/ListaCitas');
    }

    cambio = (event) => {
        const {id, value} = event.target;
        this.setState({ [id]: value} )
        console.log(this.state);
    }

    render(){
        return(
            <div className="contenedor">
                <form className="" >
                    <div className="card">
                        <div className="cardBorder card-body">
                        <b><h3 className="centrarTexto">Editar Cita</h3></b>
                        </div>
                    </div><br/><br/>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="paciente">Nombre del Paciente</label>
                            <input type="text" disabled className="form-control" id="paciente" value={this.state.paciente} placeholder="Nombre completo" />
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
                            <input type="text" onChange={this.cambio} className="form-control" id="doctor" placeholder="Nombre completo" value={this.state.doctor} />
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