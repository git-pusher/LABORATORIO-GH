import React, { Component } from 'react';
import axios from 'axios';
import API_URL from '../../constants';
import MaterialIcon from 'material-icons-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

class Medico extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  guardar = (e) => {
    e.preventDefault();
    axios.post(API_URL + 'doctores/', this.state)
      .then(doctor => {
        if (doctor.data.success) {
          console.log('Doctor registrado correctamente: ', doctor);
          toast.success( doctor.data.mensaje);
          setTimeout(function(){
            window.location.replace('/ListaMedicos')
          },2000);
        }else if(doctor.data.err){
            toast.error(doctor.data.mensaje);
        }
      }).catch(err => {
        toast.error("Ocurrió un error", err);
        console.log("Ocurrió un error", err);
      });
  }

  listaDoctores = () => {
    this.props.history.push('/ListaMedicos');
  }

  cambio = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value })
    console.log(this.state);
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
              <b><h3 className="centrarTexto">Registrar Nuevo Médico</h3></b>
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
            <div className="form-group col-md-6">
              <label htmlFor="correoElectronico">Correo Electrónico</label>
              <input type="email" onChange={this.cambio} className="form-control" id="correoElectronico" placeholder="Ejemplo: correo@algo.com" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="telefono">Teléfono</label>
              <input type="text" onChange={this.cambio} className="form-control" id="telefono" placeholder="Ejemplo: 55 1122 3344" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="noCedula">Cédula Profesional</label>
              <input type="text" onChange={this.cambio} className="form-control" id="noCedula" placeholder="Min. 7 dígitos, Max. 8 dígitos" pattern="[0-9]+$" />
              <small id="noCedula" className="form-text text-muted">Ingresar solo números, completar con ceros a la izquierda en caso de ser menor a los dígitos solicitados</small>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="especialidad">Especialidad</label>
              <select id="especialidad" className="form-control" onChange={this.cambio}>
                <option default>Seleccione una opción</option>
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
                &nbsp;Registrar
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

export default Medico;