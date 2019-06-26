import React, { Component } from 'react';
import axios from 'axios';
// import ReactDOM from 'react-dom';
import MaterialIcon from 'material-icons-react'
import './paciente.css'
import API_URL from '../../constants'

class Paciente extends Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  guardar = (e) => {
    e.preventDefault();
    console.log('Guardando...');
    axios.post(API_URL+'pacientes/', this.state)
    .then(paciente => {
      console.log('Paciente registrado correctamente: ', paciente);
      //this.props.history.push('/ListaPacientes'); 
      this.listaPacientes();
    }).catch(err => {
      console.log("Ocurrió un error", err);
    });
  }  

  cambio = (event) => {
    const {id, value} = event.target;
    this.setState({ [id]: value} )
    console.log(this.state);
  }

  listaPacientes = ()=>{
    this.props.history.push('/ListaPacientes'); 
  }

  render() {
    return (
      <div className="contenedor">
      <form className="containerForm" onSubmit={this.guardar}>    
            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" onChange={this.cambio} className="form-control" id="nombre" placeholder="Nombre(s)"/>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="apellidoPaterno">Apellido Paterno</label>
                <input type="text" onChange={this.cambio} className="form-control" id="apellidoPaterno" placeholder="Apellido Paterno"/>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="apellidoMaterno">Apellido Materno</label>
                <input type="text" onChange={this.cambio} className="form-control" id="apellidoMaterno" placeholder="Apellido Materno"/>
              </div>
            </div>
            <div className="form-row">
            <div className="form-group col-md-4">
                <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
                <input type="date" onChange={this.cambio} className="form-control" id="fechaNacimiento"/>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="correoElectronico">Correo Electrónico</label>
                <input type="email" onChange={this.cambio} className="form-control" id="correoElectronico" placeholder="Ejemplo: correo@algo.com"/>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="telefono">Teléfono</label>
                <input type="text" onChange={this.cambio} className="form-control" id="telefono" placeholder="Ejemplo: 55 1122 3344"/>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-12">
                <label htmlFor="direccion">Dirección</label>
                <input type="text" onChange={this.cambio} className="form-control" id="direccion" placeholder="Calle, #int, #ext, Col."/>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-12">
                <button type="submit" className="btn btn-primary" >
                  <MaterialIcon icon="done" className="material-icons"></MaterialIcon>
                  Registrar Paciente 
                </button>
                <button type="button" onClick={this.listaPacientes} className="btn btn-danger">
                    <MaterialIcon icon="cancel" className="material-icons"></MaterialIcon>
                    Cancelar
                </button>
              </div>
            </div>
      </form>
    </div>
    );
  }
}

export default Paciente;