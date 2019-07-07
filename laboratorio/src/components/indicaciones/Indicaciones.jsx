import React, { Component } from 'react';
import indicaciones from '../../img/indicaciones.jpg'; 
import './indicaciones.css';


class Indicaciones extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        console.log(this.props.location);
        return (
            <div className="indicaciones-medicas" id="ind-med">
                <div className="container-fluid">
                    <h2 className="text-center">INDICACIONES MÉDICAS</h2>
                    <hr/>
                    <p className="indicaciones-medicas-descripcion">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam tempore, eos, 
                        dolorum cupiditate mollitia commodi perferendis consequatur earum fugiat vitae 
                        quasi voluptas alias nisi! Nesciunt enim dolorem voluptas esse quod. Lorem, ipsum 
                        dolor sit amet consectetur adipisicing elit. Iusto commodi officiis iste harum. 
                        Delectus hic repellat mollitia libero, itaque suscipit soluta quam iste possimus 
                        asperiores dolores natus ex maiores ipsum.</p>
                    <div className="row">
                        <div className="col-12 col-lg-6 pr-10 align-self-center" id="indicaciones">
                            <div className="accordion" id="medical-indication">
                                <div className="card" id="card-im">
                                    <div className="card-header" id="uno">
                                        <h5 className="mb-0">
                                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#hematologia-sanguinea" aria-expanded="false" aria-controls="hematologia-sanguinea">
                                            <h5 className="h5-text-card text-uppercase">Hematología completa</h5>
                                        </button>
                                        </h5>
                                    </div>     
                                    <div id="hematologia-sanguinea" className="collapse" aria-labelledby="uno" data-parent="#medical-indication">
                                        <div className="card-body-descripcion-im">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>
                                <div className="card" id="card-im">
                                    <div className="card-header" id="dos">
                                        <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#quimica-sanguinea" aria-expanded="false" aria-controls="quimica-sanguinea">
                                            <h5 className="h5-text-card text-uppercase">Química sanguínea</h5>
                                        </button>
                                        </h5>
                                    </div>
                                    <div id="quimica-sanguinea" className="collapse" aria-labelledby="dos" data-parent="#medical-indication">
                                        <div className="card-body-descripcion-im">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>
                                <div className="card" id="card-im">
                                    <div className="card-header" id="tres">
                                        <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#enzima-sanguinea" aria-expanded="false" aria-controls="enzima-sanguinea">
                                            <h5 className="h5-text-card text-uppercase">Enzimas sanguíneas</h5>
                                        </button>
                                        </h5>
                                    </div>
                                    <div id="enzima-sanguinea" className="collapse" aria-labelledby="tres" data-parent="#medical-indication">
                                        <div className="card-body-descripcion-im">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>
                                <div className="card" id="card-im">
                                    <div className="card-header" id="cuatro">
                                        <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#prueba-coagula" aria-expanded="false" aria-controls="prueba-coagula">
                                            <h5 className="h5-text-card text-uppercase">Prueba de coagulación</h5>
                                        </button>
                                        </h5>
                                    </div>
                                    <div id="prueba-coagula" className="collapse" aria-labelledby="cuatro" data-parent="#medical-indication">
                                        <div className="card-body-descripcion-im">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6" id="indicaciones">
                            <img src={indicaciones} alt="Indicaciones médicas"/>
                        </div>
                </div>
            </div>  
        </div>            
        );			
    }
}

export default Indicaciones;