import React from 'react';
import Link from 'react-router-dom';
import labo from '../../../public/img/labo.png';
import './inicio.css'

class Inicio extends React.Component {
    constructor(props) {
		super(props);
		this.state = {}
    }
    
    render () {
        return (
            <div className="container sesion">
                <div className="row fila">
                    <div className="col-md-6">
                        <img className="labo-img" src={labo} alt="Landsteiner Scientific"/> 
                    </div>
                    <div className="col-md-4">
                        <h1 className="text-uppercase text-center">Bienvenido</h1>
                        <form>
                            {/* <div className="form-group mt-4">
                                <label for="exampleInputName">Nombre</label>
                                <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Introduzca un nombre"/>
                                <small id="emailHelp" className="form-text text-muted">Puede ser cualquier nombre para identificarlo.</small>
                            </div> */}
                            <div className="form-group mt-4">
                                <label for="exampleInputEmail1">Nombre de usuario</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo electrónico"/>
                                <small id="emailHelp" className="form-text text-muted">Introducir su correo electrónico.</small>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Contraseña</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Introducir contraseña"/>
                            </div>                            
                            <button type="submit" className="btn btn-lands">Iniciar sesión</button>
                            {/* ARREGLAR ESTO */}
                            {/* <Link to="/registro" className="text-muted small" >Registrar</Link>*/}
                        </form>
                    </div>
                </div>
            </div>                
        );
    }
}

export default Inicio;