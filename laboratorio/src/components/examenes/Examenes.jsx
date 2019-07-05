import React, { Component } from 'react';
import hematologia from '../../img/hematologia.jpg'; 
import quimica from '../../img/quimica.jpg'; 
import enzimas from '../../img/enzimas.jpg'; 
import coagulacion from '../../img/coagulacion.jpg'; 
import './examenes.css';


class Examenes extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        console.log(this.props.location);
        return (
            <div id="examenes" className="examens mt-4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="text-uppercase">Exámenes</h2>
                            <hr/>
                            <p className="conoce-examenes">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam tempore, eos, 
                                dolorum cupiditate mollitia commodi perferendis consequatur earum fugiat vitae 
                                quasi voluptas alias nisi! Nesciunt enim dolorem voluptas esse quod. Lorem, ipsum 
                                dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                    </div>
                    <div className="row cards-examenes">
                        <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
                            <div className="card card-exa"  id="c-hematologia">
                                <img className="card-img-top" src={hematologia} alt="Hematología completa"/>
                                <div className="card-body">
                                    <h5 className="card-title">Hematología completa</h5>
                                    <p className="card-text">También se conoce este tipo de análisis como conteo sanguineo completo (CBC). 
                                                        Generalmente se pide este tipo de análisis en los exámenes de rutina ya que 
                                                        expone la cantidad de glóbulos rojos, glóbulos blancos, plaquetas y hemoglobina, 
                                                        lo cual le permite al profesional detectar si el paciente manifiesta alguna 
                                                        enfermedad de la sangre. A partir de la hematología completa se pueden detectar 
                                                        infecciones, anemia, problemas de coagulación, etc.  
                                    </p>        
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
                            <div className="card card-exa" id="c-quimica">
                                <img className="card-img-top" src={quimica} alt="Química sanguínea"/>
                                <div className="card-body">
                                    <h5 className="card-title">Química sanguínea</h5>
                                    <p className="card-text">También se lo denomina panel metabólico básico (BMP). Este tipo de análisis de 
                                                        sangre permite medir las sustancias químicas presentes en la sangre utilizando 
                                                        el plasma. Al utilizar el plasma se puede obtener información referida a los 
                                                        huesos, los músculos, el corazón, el hígado y los riñones.
                                    </p>        
                                </div>
                            </div>
                        </div>
                <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
                  <div className="card card-exa" id="c-enzimas">
                    <img className="card-img-top" src={enzimas} alt="Enzimas sanguíneas"/>
                    <div className="card-body">
                        <h5 className="card-title">Enzimas sanguíneas</h5>
                        <p className="card-text"> A partir de este tipo de analisis de sangre se pueden controlar ciertas
                                            reacciones químicas en el cuerpo. El análisis de enzimas sanguíneas permite 
                                            por ejemplo detectar un ataque al corazón. 
                        </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
                    <div className="card card-exa" id="c-coagulacion">
                      <img className="card-img-top" src={coagulacion} alt="Prebas de coagulación"/>
                      <div className="card-body">
                        <h5 className="card-title">Pruebas de coagulación</h5>
                        <p className="card-text">Mediante este tipo de análisis se busca determinar el nivel de coagulación 
                                             del paciente para poder diagnosticar trastornos en la coagulación. Un resultado que arroje un 
                                             nivel anormal de coagulación puede representar un riesgo de sangrado o que se formen coágulos 
                                             en los vasos sanguíneos. lore
                        </p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            </div>
            
        );			
    }
}

export default Examenes;