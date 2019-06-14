import React, { Component } from 'react';

import './citas.css';


class Citas extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        console.log(this.props.location);
        return (
            <div className="menu">
                <div className="container-fluid">
                    <div className="row" id="fila">
                        <div className="col col-sm-6 formato-im">
                            <a href="#ind-med">
                                <li className="fas fa-user-md" id="mono"></li>
                                <li>Indicaciones médicas</li>
                            </a>
                        </div>
                        <div className="col col-sm-6 formato-im" style="background-color: #42929f">
                            <div id="citas" className="dropdown col col-sm-12">
                                <li className="far fa-calendar-check" id="mono1">
                                    <button className="btn btn-link" type="button" data-toggle="dropdown" aria-expanded="true" id="dropdownCitas">Citas
                                        <span className="caret"></span>
                                    </button>
                                    <ul className="dropdown-menu" role="menu">
                                        <li role="presentes"><a role="menuitem" tabindex="-1" href="catalogo/paciente/formulario_paciente.html">Nueva Cita</a></li>
                                        <li role="presentes"><a role="menuitem" tabindex="-1" href="catalogo/paciente/lista_citas.html">Mis Citas</a></li>
                                    </ul>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        );			
    }
}

export default Citas;