import React from 'react';
import Carrusel from '../components/carrusel/Carrusel';
import Examenes from '../components/examenes/Examenes';
import Indicaciones from '../components/indicaciones/Indicaciones';
import Footer from '../components/footer/Footer';


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
                <Indicaciones />
                <Footer />
            </div>
        );
    }
}

export default Laboratorio;