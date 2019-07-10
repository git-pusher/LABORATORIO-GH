import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../../constants';
import MaterialIcon from 'material-icons-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import { validateAll } from 'indicative';
import { isNullOrUndefined } from 'util';

class Registrar extends Component {
    constructor(props) {
        super(props);
        // nombre, nombreUsuario, password
		this.state = {}
    }


    guardar = (e) => {
        e.preventDefault(); 
        console.log(this.state);
        var password = this.state.password;
        var confPassword = this.state.confPassword 

        if(!isNullOrUndefined(password)) {
            if (password.length <= 5){
                toast.error('Las contraseñas debe contener 6 o más caracteres.')
            } else {
                if(password !== confPassword ) {
                    toast.error('Las contraseñas no coinciden, verifíquelo nuevamente.')
                } else {
                    axios.post(API_URL + 'registros/', this.state)
                        .then(registro => {
                        if (registro.data.success) {
                            console.log('registro registrado correctamente: ', registro);
                            toast.success( registro.data.mensaje);
                            setTimeout(function(){
                            window.location.replace('/ListaRegistros')
                            },2000);
                        }else if(registro.data.err){
                            toast.error(registro.data.mensaje);
                            console.log("Error: ", registro.data.mensaje);
                        }
                        }).catch(err => {       
                            if (err.response.status=== 422) {
                                toast.error("Este usuario ya existe, prueve con otro correo electrónico.");
                            }else{
                                toast.error("Ocurrió un error", err);
                                console.log(err);
                            }
                        });
                }

            } 
        } else { 
            toast.error('Necesitas escribir una contraseña.')

        }
    }
    
    cambio = (event) => {
        const {id, value} = event.target;
        this.setState({ [id]: value} )
        console.log(this.state);
    }

    listaRegistros = ()=>{
        this.props.history.push('/ListaRegistros'); 
      }

    render () {
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
                        <b><h3 className="centrarTexto">Registrar Nuevo Usuario</h3></b>
                        </div>
                    </div><br /><br />
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="n">Nombre</label>
                            <input type="text" 
                                onChange={this.cambio} 
                                className="form-control" 
                                name="nombre" id="nombre" 
                                aria-describedby="emailHelp" 
                                placeholder="Introduzca un nombre"/>
                            <small id="emailHelp" className="form-text text-muted">Puede ser cualquier nombre corto para identificarlo.</small>
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="nombre-usuario">Nombre de usuario</label>
                            <input type="email" 
                                onChange={this.cambio} 
                                className="form-control" 
                                name="nombreUsuario" 
                                id="nombreUsuario" 
                                aria-describedby="emailHelp" 
                                placeholder="Ejemplo: correo@algo.com"/>
                            <small id="emailHelp" 
                            className="form-text text-muted">Introducir su correo electrónico.</small>
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="contrasenia">Contraseña</label>
                            <input type="password" 
                                onChange={this.cambio} 
                                className="form-control" 
                                name="password" 
                                id="password" 
                                placeholder="Introducir contraseña"/>
                                <small id="emailHelp" className="form-text text-muted">La contraseña debe tener seis o más caracteres. </small>
                        </div>                            
                        <div className="form-group col-md-12">
                            <label htmlFor="cContrasenia">Verificar contraseña</label>
                            <input type="password"
                                onChange={this.cambio} 
                                className="form-control" 
                                name="confPassword"
                                id="confPassword" 
                                placeholder="Verificar la contraseña"/>
                        </div>                            
                    </div>
                    <div className="form-row">
                        <div className="containerForm form-group col-md-12">
                            <button type="submit" className="btn accionGuardar" >
                                <MaterialIcon icon="done" className="material-icons"></MaterialIcon>
                                Registrar
                            </button>
                            <Link to="/ListaRegistros" className="btn accionCancelar">
                                <MaterialIcon icon="close" className="material-icons"></MaterialIcon>
                                Cancelar
                            </Link>
                        </div>
                    </div>                                                                            
                </form>
            </div>                 
                      
        );
    }
}

export default Registrar;