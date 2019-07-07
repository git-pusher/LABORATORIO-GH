import React from 'react';
// import Link from 'react-router-dom';
import labo from '../../img/labo.png';
import FormularioSesion from '../../components/formularioSesion/FormularioSesion';
import FormularioRegistro from '../../components/formularioRegistro/FormularioRegistro';
import './sesionRegistro.css'
import {withRouter} from 'react-router-dom';

class Inicio extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
            formulario: ''
        }
    }

    componentDidMount(){
        this.checkUrl();
    }

    componentDidUpdate(){
        this.checkUrl();
    }

    checkUrl = ()=>{
        const path = window.location.pathname;
        if(path.includes('sesion') && this.state.formulario !== 'login'){
            this.setState({formulario: 'login'});
        }if(path.includes('registro') && this.state.formulario !== 'registro'){
            this.setState({formulario: 'registro'});
        }
    }
    
    
    render () {
        return (
            <div className="contenedor sesion-registro">
                <div className="form-row compSesReg ">
                    <div className="form-group col-12 col-md-6 col-lg-6">
                        <img className="labo-img d-none d-md-block" src={labo} alt="Landsteiner Scientific"/> 
                    </div>
                    <div className="form-group col-12 col-md-6 col-lg-6 sesReg ">  
                        {
                            this.state.formulario === 'login' ? <FormularioSesion /> : <FormularioRegistro />
                        }
                    </div>
                </div>
            </div>                
        );
    }
}

export default Inicio;