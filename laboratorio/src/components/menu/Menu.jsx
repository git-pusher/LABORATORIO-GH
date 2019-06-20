import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import Paciente from '../Paciente'
import labo from '../../../public/img/logo.png';
import Login from '../sesion/Login';
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
			<nav className="navbar fixed-top navbar-expand-lg navbar-light" >
				<div className="container-fluid">
				<NavLink className="navbar-brand" to="/">
					<img src={labo} alt="Landsteiner Scientific" height="50px"/>
				</NavLink>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>     
				<div className="collapse navbar-collapse" id="navbarNavAltMarku">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<NavLink active ClassName="active" to="/">Inicio </NavLink> 
						</li>
						<li className="nav-item dropdown">
							<NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Médicos
							</NavLink>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<NavLink className="dropdown-item" to="/Listar-Medicos">Listar Médicos</NavLink>
								<NavLink className="dropdown-item" to="/Medicos">Nuevo Medico</NavLink>
							</div>							
						</li>
						<li className="nav-item dropdown">
							<NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Pacientes
							</NavLink>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<NavLink className="dropdown-item" to="/Listar-Pacientes">Listar Pacientes</NavLink>
								<NavLink className="dropdown-item" to="/Pacientes">Nuevo Paciente</NavLink>
							</div>							
						</li>
						
						<li className="nav-item">
							<NavLink active ClassName="active" to="/Citas">Citas</NavLink>
						</li>
					</ul>
					<ul className="nav navbar-nav navbar-right">
						<li><NavLink to="#examenes" className="btn btn-outline-light" to="/Login">Inicia sesión</NavLink></li>
					</ul>
				</div>
			</div>  
		  </nav>
        );
    }
}

export default Menu;