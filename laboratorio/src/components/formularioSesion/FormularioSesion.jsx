import React from 'react';
// import { Link } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';

import './formularioSesion.css'

class FormularioSesion extends React.Component {
    constructor(props) {
		super(props);
        this.state = {
            usuario : {
                nombreUsuario: '',
                password: '',
            }
        };
    }
    
    cambio = (event) => {
        
        const { id, value } = event.target;
        this.setState({ [id]: value });        
        console.log(this.state);
    }

    onSubmit =(e) => {
        e.preventDefault();

    }

    
    render () {
        return (
            <div className="col-12">
                <h1 className="text-uppercase text-center pb-2 bienvenido">Bienvenido</h1>
                <form className="" onSubmit={this.login}>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="nombre-usuario">Nombre de usuario</label>
                            <input type="email" onChange={this.cambio} className="form-control" id="nombreUsuario" aria-describedby="emailHelp" placeholder="Ejemplo: correo@algo.com"/>
                            <small id="emailHelp" className="form-text text-muted">Introducir su correo electrónico.</small>
                        </div>
                        <div className="form-group col-md-12">
                                <label htmlFor="contrasenia">Contraseña</label>
                                <input type="password" onChange={this.cambio} className="form-control" id="password" placeholder="Introducir contraseña"/>
                            </div>       
                    </div>
                    <div className="form-row">
                        <div className="containerForm registro form-group col-md-12">
                            <button type="submit" className="btn btn-lands accionGuardar">Iniciar sesión</button>                           
                            {/* <Link to="/registro" className="text-muted small" >Registrar</Link>                         */}
                        </div>
                    </div>                     
                </form>
            </div>                         
        );
    }
}

export default FormularioSesion;