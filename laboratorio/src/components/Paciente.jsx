import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

class Paciente extends Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    console.log("Render de Form Pacientes");
    return (
      <div className="contenedor">
      <form className="containerForm">    
            <div className="form-row">
              <div className="form-group col-md-4">
                <label for="nombre">Nombre</label>
                <input type="text" className="form-control" id="nombre" placeholder="Nombre(s)"/>
              </div>
              <div className="form-group col-md-4">
                <label for="aPaterno">Apellido Paterno</label>
                <input type="text" className="form-control" id="aPaterno" placeholder="Apellido Paterno"/>
              </div>
              <div className="form-group col-md-4">
                <label for="aMaterno">Apellido Materno</label>
                <input type="text" className="form-control" id="aMaterno" placeholder="Apellido Materno"/>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label for="email">Correo Electrónico</label>
                <input type="email" className="form-control" id="email" placeholder="Ejemplo: correo@algo.com"/>
              </div>
              <div className="form-group col-md-4">
                <label for="telefono">Teléfono</label>
                <input type="text" className="form-control" id="telefono" placeholder="Ejemplo: 55 1122 3344"/>
              </div>
              <div className="form-group col-md-4">
                <label for="turno">Turno</label>
                <select id="turno" className="form-control">
                  <option selected>Seleccione una opción</option>
                  <option>Matutino</option>
                  <option>Vespertino</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label for="inputCity">Fecha Deseada</label>
                <input type="date" className="form-control" id="fecha"/>
              </div>
              <div className="form-group col-md-4">
                <label for="inputState">Lugar</label>
                <select id="inputState" className="form-control">
                  <option selected>Seleccione una opción</option>
                  <option>Hospital</option>
                  <option>Laboratorio</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label for="inputZip">Tipo de Examen</label>
                <select id="inputState" className="form-control">
                  <option selected>Seleccione una opción</option>
                  <option>Hematología Completa</option>
                  <option>Quémica Sanguínea</option>
                  <option>Prueba de Coagulación</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="gridCheck"/>
                  <label className="form-check-label" for="gridCheck">
                    Recibir notificación
                  </label>  
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-12">
                <label>
                < button type="button" className="btn btn-primary btn-lg">Solicitar Cita
                </button>
                </label>
              </div>
            </div>
      </form>
    </div>
    );
  }
}

export default Paciente;