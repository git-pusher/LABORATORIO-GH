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
            <div id="footer" className="container-fluid pb-4 pt-4">
                <div className="container-fluid">
                    <div className="row text-center">
                        <div className="col-12 col-lg">
                            <li>Social media</li>
                        </div>                  
                        <div className="col-12 col-lg">
                            <li>Dirección</li>
                        </div>                  
                        <div className="col-12 col-lg">
                            <li>Privacidad</li>
                        </div>
                    </div>                  
                </div>  
            </div>            
        );			
    }
}

export default Footer;