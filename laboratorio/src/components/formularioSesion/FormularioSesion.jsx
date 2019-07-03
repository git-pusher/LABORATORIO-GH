import React from 'react';
import { Link } from 'react-router-dom';

import './formularioSesion.css'

class FormularioSesion extends React.Component {
    constructor(props) {
		super(props);
        this.state = {}
    }
    
    render () {
        return (
            <div className="col">
                <h1 className="text-uppercase text-center">Bienvenido</h1>
                <form className="" onSubmit={this.guardar}>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="nombre-usuario">Nombre de usuario</label>
                            <input type="email" className="form-email" id="nombre-usuario" aria-describedby="emailHelp" placeholder="Ejemplo: correo@algo.com"/>
                            <small id="emailHelp" className="form-text text-muted">Introducir su correo electrónico.</small>
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="contrasenia">Contraseña</label>
                            <input type="password" className="form-pass" id="contrasenia" placeholder="Introducir contraseña"/>
                        </div>       
                    </div>
                    <div className="form-row">
                        <div className="containerForm form-group col-md-12">
                            <button type="submit" className="btn btn-lands accionGuardar">Iniciar sesión</button>
                            <Link to="/registro" className="text-muted small" >Registrar</Link>                        
                        </div>
                    </div>                     
                </form>
            </div>                         
        );
    }
}

export default FormularioSesion;