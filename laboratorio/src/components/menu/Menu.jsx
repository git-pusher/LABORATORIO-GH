import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import labo from '../../img/logo.png';
import './menu.css';

class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        console.log(this.props.location);
        return (
			<nav className="navbar navbar-expand-lg navbar-light fixed-top" >
					<NavLink className="navbar-brand" to="/">
						<img src={labo} alt="Landsteiner Scientific" height="40px"/>
					</NavLink>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>     
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav">
								<NavLink className="nav-item nav-link" to="/">Inicio </NavLink> 
								<NavLink className="nav-item nav-link" to="/ListaMedicos">Médicos </NavLink> 
								<NavLink className="nav-item nav-link" to="/ListaPacientes">Pacientes </NavLink> 
								<NavLink className="nav-item nav-link" to="/ListaCitas">Citas </NavLink> 
								<NavLink className="nav-item nav-link" to="/ListaRegistros">Usuarios </NavLink>
						</div>
						<div className="boton-sesion">
							{
								! this.state.loggedUser 
								?
								// <Navlink to="/login">Login</Navlink>
								<NavLink className="btn btn-outline-light" to="/Login">Inicia sesión</NavLink>
								:
								<NavLink className="btn btn-outline-light" to="/logout">Logout</NavLink>
							}
						</div>						
					</div>
			</nav>
        );
    }
}

export default Menu;