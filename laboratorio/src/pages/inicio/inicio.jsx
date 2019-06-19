import React from 'react';
import labo from '../../../public/img/labo.png'
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
                            <div className="form-group mt-4">
                                <label for="exampleInputEmail1">Nombre de usuario</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Contraseña</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-lands">Submit</button>
                        </form>
                    </div>
                </div>
            </div>                
        );
    }
}

export default Inicio;