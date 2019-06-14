import React, { Component } from 'react';

import './footer.css';


class Indicaciones extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        console.log(this.props.location);
        return (
            <div id="footer" className="pb-4 pt-4">
                <div className="container-fluid">
                    <div className="row text-center">
                        <div className="col-12 col-lg">
                            <a href="#">Social media</a>
                        </div>                  
                        <div className="col-12 col-lg">
                            <a href="#">Dirección</a>
                        </div>                  
                        <div className="col-12 col-lg">
                            <a href="#">Privacidad</a>
                        </div>
                    </div>                  
                </div>  
            </div>            
        );			
    }
}

export default Indicaciones;