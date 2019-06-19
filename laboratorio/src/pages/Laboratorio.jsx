import React from 'react';
import Inicio from './inicio/inicio'
import Carrusel from '../components/carrusel/Carrusel';
import Examenes from '../components/examenes/Examenes';
import Footer from '../components/footer/Footer'


class Laboratorio extends React.Component {
    constructor(props) {
		super(props);
		this.state = {}
    }
    
    render () {
        return (
            <div>
                <Carrusel />
                <Examenes />
                <Footer />
            </div>
        );
    }
}

export default Laboratorio;