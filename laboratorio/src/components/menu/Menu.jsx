import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import labo from '../../img/logo.png';
// import Login from '../sesion/Login';
// import Contacto from '../../pages/Contacto'
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
				<div className="container-fluid">
					<NavLink className="navbar-brand" to="/">
						<img src={labo} alt="Landsteiner Scientific" height="40px"/>
					</NavLink>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>     
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<ul className="navbar-nav mr-auto">
								<NavLink className="nav-link" to="/">Inicio </NavLink> 
								<NavLink className="nav-link" to="/ListaMedicos">Médicos </NavLink> 
								<NavLink className="nav-link" to="/ListaPacientes">Pacientes </NavLink> 
								<NavLink className="nav-link" to="/ListaCitas">Citas </NavLink> 
								<NavLink className="nav-link" to="/ListaRegistros">Registros </NavLink>
						</ul>
						<ul className="nav navbar-nav navbar-right">
							<li><NavLink className="btn btn-outline-light" to="/sesion">Inicia sesión</NavLink></li>
						</ul>
					</div>
				</div>  
			</nav>
        );
    }
}

export default Menu;