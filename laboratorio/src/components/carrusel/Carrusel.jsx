import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import carrusel1 from '../../img/carrusel1.jpg';
import carrusel2 from '../../img/carrusel2.jpg';
import carrusel3 from '../../img/carrusel3.jpg';
import './carrucel.css';


class Carrusel extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        console.log(this.props.location);
        return (
            <div className="container-fluid carru" id="main">
                <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel" data-pause="false">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={carrusel1}  alt="Laboratorio 1"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={carrusel2} alt="Laboratorio 2"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={carrusel3} alt="Laboratorio 3"/>
                        </div>
                        <div className="overlay carousel-caption">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-md-6 offset-md-6 text-center text-md-right">
                                        <h1 className="text-uppercase">Grace HOPPER</h1>
                                        <h4>Laboratorio de hematología</h4>
                                        <p className="d-none d-md-block carrusel-detalles">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                            Ut enim ad minim veniam, quis nos toud duty ullamco laboris nisi ut aliquip ex ea 
                                            commodoregur. Velit esse cillum dolore eu fugiat nulla pariatur. 
                                            Excepteur sint occaecat cupidatat no proidente, sol en la culpa qui officia deserunt 
                                            mollit anim id est laborum </p>                                        
                                        <Link to="/ListaCitas" className="btn btn-lands" >Citas</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
                <div className="container-fluid debajoCarrusel">
                    <div className="row bc"> <br/> </div>
                </div>
            </div>
            
        );			
    }
}

export default Carrusel;