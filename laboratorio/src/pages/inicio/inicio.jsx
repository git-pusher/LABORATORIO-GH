import React from 'react';
// import Link from 'react-router-dom';
import labo from '../../../public/img/labo.png';
import FormularioSesion from '../../components/formularioSesion/FormularioSesion'
import './inicio.css'

class Inicio extends React.Component {
    constructor(props) {
		super(props);
		this.state = {}
    }
    
    render () {
        return (
            <div className="container-sesion">
                <div className="row fila">
                    <div className="col-md-5">
                        <img className="labo-img" src={labo} alt="Landsteiner Scientific"/> 
                    </div>
                    <div className="col-md-5">                        
                        <FormularioSesion />
                        {/* cargar formulario de registro en caso de requerir un nuevo usuario */}
                    </div>
                </div>
            </div>                
        );
    }
}

export default Inicio;