import React, { Component } from 'react';


import './contacto.css';


class Contacto extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        console.log(this.props.location);
        return (
            <div className="contacto">
                <div className="container">
                    <div>
                        <h1 className="contacto-titulo text-center">CONTÁCTANOS</h1>
                    </div>
                    <div className="row">
                        <div className="col" id="mapa-contacto">
                            <div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d431.3210695625728!2d-99.15966951147038!3d19.41796240269412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff3af7dee189%3A0x6b604487e013ecf8!2sBedu!5e0!3m2!1ses-419!2smx!4v1550864115930" width="600" height="450" frameborder="0" style="border:0" allowfullscreen>
                                </iframe>
                            </div>
                        </div>
                        <div className="col">
                            <div className="datos-contacto">
                                <div className="container">
                                    <h5 className="text-center">Información general</h5>
                                    <h6 className="text-center">Visítanos.</h6>
                                    <div id="datos-de-contacto">
                                        <div className="row">
                                            <div className="col">
                                                <div className="direccion text-center">
                                                    Dirección <br/>
                                                    Correo electrónico <br/>
                                                    Teléfono <br/>
                                                </div>
                                            </div>
                                        </div>
                                        <form className="form-horizontal" method="post">
                                            <div className="form-group">
                                                <span className="col-md-1 col-md-offset-1 text-center"></span>
                                                <div className="col-md-8">
                                                    <input id="fname" name="name" type="text" placeholder="Introduzca su nombre" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <span className="col-md-1 col-md-offset-1 text-center"></span>
                                                <div className="col-md-8">
                                                    <input id="lname" name="name" type="text" placeholder="Apellido (s)" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <span className="col-md-1 col-md-offset-1 text-center">
                                                <i className="fa fa-envelope-o bigicon"></i>
                                                </span>
                                                <div className="col-md-8">
                                                    <input id="email" name="email" type="text" placeholder="Correo electrónico" className="form-control"/>
                                                </div>
                                            </div>                                            
                                            <span className="col-md-1 col-md-offset-1 text-center">
                                                <i className="fa fa-phone-square bigicon"></i>
                                            </span>
                                            <div className="col-md-8">
                                                <input id="phone" name="phone" type="text" placeholder="Phone" className="form-control"/>
                                            </div>                                    
                                            <div className="form-group">
                                                <span className="col-md-1 col-md-offset-1 text-center">
                                                    <i className="fa fa-pencil-square-o bigicon"></i>
                                                </span>
                                                <div className="col-md-8">
                                                    <textarea className="form-control" id="message" name="message" placeholder="Introduzca su mensaje aquí." rows="7"></textarea>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-12 text-center">
                                                    <button type="submit" className="btn btn-primary btn-lg">Enviar</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        );			
    }
}

export default Contacto;