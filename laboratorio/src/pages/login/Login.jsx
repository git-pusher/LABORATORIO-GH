import React from 'react';
import {Link } from 'react-router-dom';
import labo from '../../img/labo.png';
import { ToastContainer, toast } from 'react-toastify';
import { Redirect } from "react-router-dom";
import './login.css'
// import { registro } from '../../../../API/controllers/registroCRUD';

class Inicio extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
            nombreUsuario: "",
            password: "",
            error: {}
        };
    }

      
      
      
      // cambio = (event) => {
          
      //     const { id, value } = event.target;
      //     this.setState({ [id]: value });        
      //     console.log(this.state);
      // }

    // onSubmit =(e) => {
    //     e.preventDefault();

    // }

    // function singIn (req, res) {
    //     Registro.find({ nombreUsuario: req.body.nombreUsuario}, (err, registro) => {
    //         if(err) return res.status(500).send({message: err})
    //         if(!user) return res.status(404).send({message: "No existe el usuario"})

    //         req.registro = registro
    //         res.status(200).send({
    //             message: "TEhas logueado correctamene",
    //             //token
    //         })
    //     })
    // }

    render () {
        return (
            <div className="container sesion">
                <div className="form-row compSes ">
                    <div className="form-group col-12 col-md-6 col-lg-6 logo">
                        <div className="div-img d-none d-md-block">
                            <img className="img" src={labo} alt="Grace Hooper"/> 
                        </div>
                    </div>
                    <div className="form-group col-12 col-md-6 col-lg-6 ses ">  
                        <div className="col-12">
                            <h1 className="text-uppercase text-center pb-2 bienvenido">Bienvenido</h1>
                            <form className="datos-sesion" onSubmit={this.login}>
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
                                        <Link to="/registro" className="text-muted small disabled-link" >¿Olvidó su contraseña?</Link>                        
                                    </div>
                                </div>                     
                            </form>
                        </div>    
                    </div>
                </div>
            </div>                
        );
    }
}

export default Inicio;