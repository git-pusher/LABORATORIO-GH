import React, { Component } from 'react';
import axios from 'axios';
import API_URL from '../../constants';
import MaterialIcon from 'material-icons-react';

class EditarMedico extends Component {
    constructor(props) {
        super(props);
        this.state = {
            request: true,
            doctores: [],
            error: ''
        };
        this.editarRegistro = this.editarRegistro.bind(this);
    }

    componentDidMount() {
        this.editarRegistro();
    }

    editarRegistro = (e) => { 
        const {id} = this.props.match.params;
        const doctor ={
            nombre: this.state.nombre,
            apellidoPaterno: this.state.apellidoPaterno,
            apellidoMaterno: this.state.apellidoMaterno,
            correoElectronico: this.state.correoElectronico,
            telefono: this.state.telefono,
            noCedula : this.state.noCedula,
            especialidad : this.state.especialidad
        }
        console.log(API_URL + `doctores/${id}`, doctor);
        axios.put(API_URL + `doctores/${id}`, doctor).
        then(res => {
            console.log("Detalles: ", res.data);
            this.setState({ 
                nombre: res.data.nombre,
                apellidoPaterno: res.data.apellidoPaterno,
                apellidoMaterno: res.data.apellidoMaterno,
                correoElectronico: res.data.correoElectronico,
                telefono: res.data.telefono,              
                noCedula: res.data.noCedula,
                especialidad : res.data.especialidad
            });
        }).catch(err => {
            console.log("ERROR: ", err);
            this.setState({error: err, request: false});
        });
    }

    listaDoctores = () => {
        this.props.history.push('/ListaMedicos');
    }

    cambio = (event) => {
        const {id, value} = event.target;
        this.setState({ [id]: value} )
        console.log(this.state);
    }

    render(){
        return(
            <div className="contenedor">
                <form className="" onSubmit={this.editarRegistro}>    
                    <div className="card">
                        <div className="cardBorder card-body">
                        <b><h3 className="centrarTexto">Editar Médico: {this.state.nombre} {this.state.apellidoPaterno} {this.state.apellidoMaterno}</h3></b>
                        </div>
                    </div><br/><br/>
                    <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" onChange={this.cambio} className="form-control" id="nombre" value={this.state.nombre} placeholder="Nombre(s)"/>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="apellidoPaterno">Apellido Paterno</label>
                        <input type="text" onChange={this.cambio} className="form-control" id="apellidoPaterno" value={this.state.apellidoPaterno} placeholder="Apellido Paterno"/>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="apellidoMaterno">Apellido Materno</label>
                        <input type="text" onChange={this.cambio} className="form-control" id="apellidoMaterno" value={this.state.apellidoMaterno} placeholder="Apellido Materno"/>
                    </div>
                    </div>
                    <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="correoElectronico">Correo Electrónico</label>
                        <input type="email" onChange={this.cambio} className="form-control" id="correoElectronico" value={this.state.correoElectronico} placeholder="Ejemplo: correo@algo.com"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="telefono">Teléfono</label>
                        <input type="text" onChange={this.cambio} className="form-control" id="telefono" value={this.state.telefono} placeholder="Ejemplo: 55 1122 3344"/>
                    </div>
                    </div>
                    <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="noCedula">Cédula Profesional</label>
                        <input type="text" onChange={this.cambio} className="form-control" id="noCedula" value={this.state.noCedula} placeholder="Min. 7 dígitos, Max. 8 dígitos" pattern="[0-9]+$"/>
                        <small id="noCedula" className="form-text text-muted">Ingresar solo números, completar con ceros a la izquierda en caso de ser menor a los dígitos solicitados</small>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="especialidad">Especialidad</label>
                        <select id="especialidad" className="form-control" onChange={this.cambio}>
                        <option default value={this.state.especialidad}>Seleccione una opción</option>
                        <option value="Cardiología">Cardiología</option>
                        <option value="Hematología">Hematología</option>
                        <option value="Traumatología">Traumatología</option>
                        </select>
                    </div>
                    </div>
                    <div className=" form-row">
                        <div className="containerForm form-group col-md-12">
                            <button type="submit" className="accionGuardar btn" >
                                <MaterialIcon icon="done" className="material-icons"></MaterialIcon>
                                &nbsp;Actualizar
                            </button>
                            <button type="button" onClick={this.listaDoctores} className="accionCancelar btn">
                                <MaterialIcon icon="close" className="material-icons"></MaterialIcon>
                                &nbsp;Cancelar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditarMedico;