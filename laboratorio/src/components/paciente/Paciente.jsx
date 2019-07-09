import React, { Component } from 'react';
import axios from 'axios';
import MaterialIcon from 'material-icons-react'
import './paciente.css'
import API_URL from '../../constants'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class Paciente extends Component {

  constructor(props) {
    super(props);
    this.state = {
      //fechaNacimiento: new Date()
    }
    this.handleChange = this.handleChange.bind(this);
  }

  guardar = (e) => {
    e.preventDefault();
    axios.post(API_URL + 'pacientes/', this.state)
      .then(paciente => {
        if (paciente.data.success) {
          console.log('Paciente registrado correctamente: ', paciente);
          toast.success( paciente.data.mensaje);
          setTimeout(function(){
            window.location.replace('/ListaPacientes')
          },2000);
        }else if(paciente.data.err){
          toast.error(paciente.data.mensaje);
          console.log("Error: ", paciente.data.mensaje);
        }
      }).catch(err => {
        toast.error("Ocurrió un error", err);
        console.log("Ocurrió un error", err);
      });
  }

  cambio = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value })
    console.log(this.state);
  }

  handleChange(date){
    this.setState({
      fechaNacimiento: date
    });
  }

  listaPacientes = () => {
    this.props.history.push('/ListaPacientes');
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
        <form className="" onSubmit={this.guardar}>
          <div className="card">
            <div className="cardBorder card-body">
              <b><h3 className="centrarTexto">Registrar Nuevo Paciente</h3></b>
            </div>
          </div><br /><br />
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" onChange={this.cambio} className="form-control" id="nombre" placeholder="Nombre(s)" />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="apellidoPaterno">Apellido Paterno</label>
              <input type="text" onChange={this.cambio} className="form-control" id="apellidoPaterno" placeholder="Apellido Paterno" />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="apellidoMaterno">Apellido Materno</label>
              <input type="text" onChange={this.cambio} className="form-control" id="apellidoMaterno" placeholder="Apellido Materno" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label><br></br>
              {/*<input type="date" onChange={this.cambio} className="form-control" id="fechaNacimiento" />*/}
              <DatePicker 
                selected={this.state.fechaNacimiento} 
                onChange={this.handleChange} 
                className="form-control" 
                placeholderText="Seleccione una fecha"
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="correoElectronico">Correo Electrónico</label>
              <input type="email" onChange={this.cambio} className="form-control" id="correoElectronico" placeholder="Ejemplo: correo@algo.com" />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="telefono">Teléfono</label>
              <input type="text" onChange={this.cambio} className="form-control" id="telefono" placeholder="Ejemplo: 55 1122 3344" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="direccion">Dirección</label>
              <input type="text" onChange={this.cambio} className="form-control" id="direccion" placeholder="Calle, #int, #ext, Col." />
            </div>
          </div>
          <div className="form-row">
            <div className="containerForm form-group col-md-12">
              <button type="submit" className="btn accionGuardar">
                <MaterialIcon icon="done" className="material-icons"></MaterialIcon>
                &nbsp;Registrar
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

export default Paciente;