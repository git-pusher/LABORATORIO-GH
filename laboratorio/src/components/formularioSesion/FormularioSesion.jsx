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
            <form className="form-sesion">
                <div className="col-md-6">
                <h1 className="text-uppercase text-center">Bienvenido</h1>
                    <div className="form-group-usuario mt-4">
                        <label for="nombre-usuario">Nombre de usuario</label>
                        <input type="email" className="form-email" id="nombre-usuario" aria-describedby="emailHelp" placeholder="Ejemplo: correo@algo.com"/>
                        <small id="emailHelp" className="form-text text-muted">Introducir su correo electrónico.</small>
                    </div>
                    <div className="form-group-usuario mt-4">
                        <label for="contrasenia">Contraseña</label>
                        <input type="password" className="form-pass" id="contrasenia" placeholder="Introducir contraseña"/>
                    </div>       
                    <div>
                        <button type="submit" className="btn btn-lands btn-sesion">Iniciar sesión</button>
                        <Link to="/registro" className="text-muted small" >Registrar</Link>                        
                    </div>                     
                </div>                         
            </form>
        );
    }
}

export default FormularioSesion;