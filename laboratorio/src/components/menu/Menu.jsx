import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../public/img/logo.png';
import Login from '../sesion/Login';
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
				<Link className="navbar-brand" to="/">
					<img src={logo} alt="Landsteiner Scientific" height="50px"/>
				</Link>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>     
				<div className="collapse navbar-collapse" id="navbarNavAltMarku">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link active ClassName="active" to="/">Inicio </Link> 
						</li>
						<li className="nav-item">
							<Link active ClassName="active" to="/Medicos">Médicos</Link>
						</li>
						<li className="nav-item">
							<Link active ClassName="active" to="/Pacientes">Pacientes</Link>
							</li>
						<li className="nav-item">
							<Link active ClassName="active" to="/Citas">Citas</Link>
						</li>
					</ul>
					<ul className="nav navbar-nav navbar-right">
						<li><Link to="#examenes" className="btn btn-outline-light" to="/Login">Inicia sesión</Link></li>
					</ul>
				</div>
			</div>  
		  </nav>
        );
    }
}

export default Menu;