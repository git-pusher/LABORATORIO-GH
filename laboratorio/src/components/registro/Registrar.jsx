import React, { Component} from 'react';
// import Link from 'react-router-dom';
import labo from '../../img/labo.png';
import axios from 'axios';
import API_URL from '../../constants';
import MaterialIcon from 'material-icons-react';
import './registrar.css'

class Registrar extends Component {
    constructor(props) {
		super(props);
		this.state = {}
    }
    

    guardar = (e) => {
        e.preventDefault();
        console.log('Guardando registro...');
        axios.post(API_URL+'registros/', this.state)
        .then(registro => {
          console.log('Usuario registrado correctamente: ', registro);
          this.listaRegistros();
        }).catch(err => {
          console.log("Ocurrió un error", err);
        });
      }
    
    listaRegistros = ()=>{
    this.props.history.push('/ListaRegistros'); 
    }

    cambio = (event) => {
    const {id, value} = event.target;
    this.setState({ [id]: value} )
    console.log(this.state);
    }

    render () {
        return (
            <div className="container sesion">
                <div className="row fila">
                    <div className="col-md-6">
                        <img className="labo-img" src={labo} alt="Landsteiner Scientific"/> 
                    </div>
                    <div className="col col-md-4">
                        <h1 className="text-uppercase text-center">Registro</h1>
                        <form className="container" onSubmit={this.guardar}>
                            <div className="form-group mt-4">
                                <label htmlFor="n">Nombre</label>
                                <input type="text" onChange={this.cambio} className="form-control" id="nombre" aria-describedby="emailHelp" placeholder="Introduzca un nombre"/>
                                <small id="emailHelp" className="form-text text-muted">Puede ser cualquier nombre para identificarlo.</small>
                            </div>
                            <div className="form-group mt-4">
                                <label htmlFor="exampleInputEmail1">Nombre de usuario</label>
                                <input type="email" onChange={this.cambio} className="form-control" id="nombreUsuario" aria-describedby="emailHelp" placeholder="Correo electrónico"/>
                                <small id="emailHelp" className="form-text text-muted">Introducir su correo electrónico.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Contraseña</label>
                                <input type="password" onChange={this.cambio} className="form-control" id="password" placeholder="Introducir contraseña"/>
                            </div>                            
                            {/* <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Verificar contraseña</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Introducir contraseña"/>
                            </div>                             */}
                            <div className="form-row">
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary " >
                                        <MaterialIcon icon="done_outline" className="material-icons"></MaterialIcon>
                                        Registrar
                                    </button>
                                    {/* onClick={this.listaDoctores} */}
                                    <button type="button"  className="btn btn-danger">
                                        <MaterialIcon icon="cancel" className="material-icons"></MaterialIcon>
                                        Cancelar
                                    </button>
                                </div>
                            </div>                                                                            
                        </form>
                    </div>
                </div>
            </div>                
        );
    }
}

export default Registrar;