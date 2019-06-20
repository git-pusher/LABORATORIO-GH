import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        console.log("ubicación: ",this.props.location);
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
				<NavLink className="navbar-brand" to="/">Pacientes</NavLink>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<NavLink className="nav-item nav-link" exact activeClassName="active" to="/">Inicio</NavLink>
						<NavLink className="nav-item nav-link" activeClassName="active" to="/pacientes">Registrar Paciente</NavLink>
						<NavLink className="nav-item nav-link" activeClassName="active" to="/ListaPacientes">Pacientes</NavLink>
						<NavLink className="nav-item nav-link" activeClassName="active" to="/doctores">Registrar Doctor</NavLink>
						<NavLink className="nav-item nav-link" activeClassName="active" to="/ListaDoctores">Doctores</NavLink>
					</div>
				</div>
			</nav>
        );
    }
}

export default Menu;