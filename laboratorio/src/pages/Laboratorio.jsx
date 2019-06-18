import React from 'react';
import Carrusel from '../components/carrusel/Carrusel';
import Examenes from '../components/examenes/Examenes';

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
            </div>
        );
    }
}

export default Laboratorio;