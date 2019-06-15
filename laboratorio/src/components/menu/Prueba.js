import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../../public/img/logo.png';
import './menu.css';

class Prueba extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        console.log(this.props.location);
        return (
			<nav className="navbar fixed-top navbar-expand-lg navbar-light" >
			<div className="container-fluid">
			  <NavLink className="navbar-brand" to="/">
				<img src={logo} alt="Landsteiner Scientific" height="50px"/>
			  </NavLink>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>     
			  <div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
				  <li className="nav-item">
					<NavLink className="nav-item nav-link" to="#">Inicio </NavLink> 
				  </li>
				  <li className="nav-item">
					<NavLink className="nav-item nav-link" to="">Médicos</NavLink>
				  </li>
				  <li className="nav-item">
					  <NavLink className="nav-item nav-link" to="">Pacientes</NavLink>
					</li>
				  <li className="nav-item">
					  <NavLink className="nav-item nav-link" to="">Citas</NavLink>
					</li>
				</ul>
				<ul className="nav navbar-nav navbar-right">
					{/* <li><NavLink to="#"><span className="glyphicon glyphicon-user"></span> Regístrate</NavLink></li> */}
					<li><NavLink to="#"><span className="glyphicon glyphicon-log-in"></span> Inicia sesión</NavLink></li>
				</ul>
			  </div>
			</div>  
		  </nav>
        );
    }
}

export default Prueba;