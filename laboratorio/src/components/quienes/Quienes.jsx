import React, { Component } from 'react';
import exameneslab from '../../../public/img/exameneslab.jpg'; 
import './quienes.css';


class Quienes extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        console.log(this.props.location);
        return (
            <div id="quienes-somos" className="about">
                <h2><span>QUIÉNES SOMOS</span></h2>
                <div className="row" id="fila-quienes">
                    <div className="col-12 col-lg-8">
                        <article className="quienes">
                            <div className="quienes-detalles">
                                <h3 className="quienes-title">Landsteiner Scientific</h3>
                                <p className="quienes-descripcion">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae qui esse accusamus 
                                minus provident! Alias, illum odit velit laborum temporibus nam consequuntur, aspernatur vitae,
                                ut hic ducimus nostrum dolorum doloribus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae qui esse accusamus 
                                minus provident! Alias, illum odit velit laborum temporibus nam consequuntur, aspernatur vitae,
                                ut hic ducimus nostrum dolorum doloribus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae qui esse accusamus 
                                minus provident! Alias, illum odit velit laborum temporibus nam consequuntur, aspernatur vitae,
                                ut hic ducimus nostrum dolorum doloribus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae qui esse accusamus 
                                minus provident! Alias, illum odit velit laborum temporibus nam consequuntur, aspernatur vitae,
                                ut hic ducimus nostrum dolorum doloribus. </p>
                            </div>
                        </article>
                    </div>
                    <div className="col-12 col-lg-4">
                        <img src={exameneslab}/>
                    </div>
                </div>
                <div className="row" id="vision-mision">
                    <div className="col-sm-12 col-lg-6">
                    <h2>VISIÓN</h2>
                        <article>
                        <div className="vision-mision-detalles">
                            <p className="vision-mision-descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Quisquam ipsum repudiandae dicta beatae. Sit distinctio rem, 
                                corporis aliquam sint illum praesentium pariatur! Pariatur, 
                                deleniti dolor explicabo commodi eligendi esse ratione!</p>
                        </div>
                        </article> 
                    </div>                  
                    <div className="col-sm-12 col-lg-6">
                    <h2>MISIÓN</h2>
                        <article>
                        <div className="vision-mision-detalles">
                            <p className="vision-mision-descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Quisquam ipsum repudiandae dicta beatae. Sit distinctio rem, 
                                corporis aliquam sint illum praesentium pariatur! Pariatur, 
                                deleniti dolor explicabo commodi eligendi esse ratione!</p>
                        </div>
                        </article> 
                    </div>                  
                    </div>
            </div>
            
        );			
    }
}

export default Quienes;