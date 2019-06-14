import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../../public/img/logo.png';
import './menu.css';

class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        console.log(this.props.location);
        return (
			<nav className="navbar navbar-inverse fixed-top navbar-expand-lg navbar-light" >
			<div className="container-fluid">
			  <NavLink className="navbar-brand" to="/">
				<img src={logo} alt="Landsteiner Scientific" height="50px"/>
			  </NavLink>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>     
			  <div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
				  <li className="nav-item nav-pills">
					<NavLink className="nav-link" to="#">Inicio </NavLink> 
				  </li>
				  <li className="nav-item nav-pills">
					<NavLink className="nav-link" to="#quienes-somos">¿Quiénes somos?</NavLink>
				  </li>
				  <li className="nav-item nav-pills dropdown">
					<NavLink className="nav-link text-lands dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					  Exámenes
					</NavLink>
					<div className="dropdown-menu" aria-labelledby="navbarDropdown">
					  <NavLink className="dropdown-item" to="#c-hematologia">Hematología completa</NavLink>
					  <NavLink className="dropdown-item" to="#c-quimica">Química sanguínea</NavLink>
					  <NavLink className="dropdown-item" to="#c-enzimas">Análisis de enzimas sanguíneas</NavLink>
					  <NavLink className="dropdown-item" to="#c-coagulacion">Pruebas de coagulación</NavLink>
					</div>
				  </li>
				  <li className="nav-item nav-pills dropdown">
					<NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					  Resultados
					</NavLink>
					<div className="dropdown-menu" aria-labelledby="navbarDropdown">
					  <NavLink className="dropdown-item" to="#">Paciente</NavLink>
					  <NavLink className="dropdown-item" to="#">Médico</NavLink>
					  <div className="dropdown-divider"></div>
					  <NavLink className="dropdown-item" to="#">Laboratorio</NavLink>
					</div>
				  </li>
				  <li className="nav-item nav-pills">
					  <NavLink className="nav-link" to="#">Cotizar</NavLink>
					</li>
				  <li className="nav-item nav-pills">
					  <NavLink className="nav-link" to="contacto.html">Contáctanos</NavLink>
					</li>
				</ul>
				<ul className="nav navbar-nav navbar-right">
					<li><NavLink to="#"><span className="glyphicon glyphicon-user"></span> Regístrate</NavLink></li>
					<li><NavLink to="#"><span className="glyphicon glyphicon-log-in"></span> Inicia sesión</NavLink></li>
				  </ul>
			  </div>
			</div>  
		  </nav>
        );
    }
}

export default Menu;