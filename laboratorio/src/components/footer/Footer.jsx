import React, { Component } from 'react';

import './footer.css';


class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        console.log(this.props.location);
        return (
            <div id="footer" className="container-fluid pt-2 pb-2">
                <div className="container-fluid">
                    <hr/>
                    <div className="row text-center foo">
                        <div className="col-12 col-lg">
                            <span className="hca">Hecho con </span>
                            <span className="hca">💙</span>
                            <span className="hca"> para el curso de 
                                <a 
                                href="https://bedu.org/producto/full-stack-javascript/"
                                target= "_blank"
                                className="FSJS"> FSJS</a>.
                            </span>                            
                        </div>             
                    </div>                  
                </div>  
            </div>            
        );			
    }
}

export default Footer;