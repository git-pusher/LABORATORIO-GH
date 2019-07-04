import React from 'react';
// import Link from 'react-router-dom';
import labo from '../../img/labo.png';
import FormularioSesion from '../../components/formularioSesion/FormularioSesion';
import FormularioRegistro from '../../components/formularioRegistro/FormularioRegistro';
import './sesionRegistro.css'

class Inicio extends React.Component {
    constructor(props) {
		super(props);
		this.state = {}
    }
    
    render () {
        return (
            <div className="contenedor sesion-registro">
                <div className="form-row compSesReg ">
                    <div className="form-group col-12 col-md-6 col-lg-6">
                        <img className="labo-img d-none d-md-block" src={labo} alt="Landsteiner Scientific"/> 
                    </div>
                    <div className="form-group col-12 col-md-6 col-lg-6 sesReg ">                        
                        {/* <FormularioSesion /> */}
                        <FormularioRegistro />
                    </div>
                </div>
            </div>                
        );
    }
}

export default Inicio;