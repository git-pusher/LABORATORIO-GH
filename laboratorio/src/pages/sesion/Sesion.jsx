import React from 'react';
import {Link } from 'react-router-dom';
import labo from '../../img/labo.png';
import { ToastContainer, toast } from 'react-toastify';
import { Redirect } from "react-router-dom";
import './sesion.css'

class Inicio extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
            userText: '',
            passwordText: ''
        }
    }
     
    // cambio = (event) => {
        
    //     const { id, value } = event.target;
    //     this.setState({ [id]: value });        
    //     console.log(this.state);
    // }

    updateUserText = (e) => {
        console.log(e.target.value)
        this.setState({
          userText: e.target.value
        })
      }
       
      updatePasswordText = (e) => {
        console.log(e.target.value)
        this.setState({
          passwordText: e.target.value
        })
      } 
    
    // onSubmit =(e) => {
    //     e.preventDefault();

    // }

    handleButtonClick = () => {
        this.props.onLogin(this.state.userText, this.state.passwordText)
    }

    render () {
        if ( this.props.loggedUser) {
            return <Redirect to="/ListaRegistros" />
          }
        return (
            <div className="container sesion">
                <div className="form-row compSes ">
                    <div className="form-group col-12 col-md-6 col-lg-6 logo">
                        <div className="div-img d-none d-md-block">
                            <img className="img" src={labo} alt="Landsteiner Scientific"/> 
                        </div>
                    </div>
                    <div className="form-group col-12 col-md-6 col-lg-6 ses ">  
                    <div className="col-12">
                <h1 className="text-uppercase text-center pb-2 bienvenido">Bienvenido</h1>
                 <div className="datos-sesion"> {/* onSubmit={this.login} >*/}
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="nombre-usuario">Nombre de usuario</label>
                            <input type="tetx" onChange={this.updateUserText} className="form-control" id="nombreUsuario" aria-describedby="emailHelp" placeholder="Ejemplo: correo@algo.com"/>
                            <small id="emailHelp" className="form-text text-muted">Introducir su correo electrónico.</small>
                        </div>
                        <div className="form-group col-md-12">
                                <label htmlFor="contrasenia">Contraseña</label>
                                <input type="password" onChange={this.updatePasswordText} className="form-control" id="password" placeholder="Introducir contraseña"/>
                            </div>       
                    </div>
                    <div className="form-row">
                        <div className="containerForm registro form-group col-md-12">
                            {/* type="submit" */}
                            <button  onClick={this.handleButtonClick} className="btn btn-lands accionGuardar">Iniciar sesión</button>                           
                            <Link to="/registro" className="text-muted small disabled-link" >¿Olvidó su contraseña?</Link>                        
                        </div>
                    </div>                     
                </div>
            </div>    
                    </div>
                </div>
            </div>                
        );
    }
}

export default Inicio;