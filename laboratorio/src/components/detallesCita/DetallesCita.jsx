import React, { Component } from 'react';
import axios from 'axios';
import API_URL from '../../constants';
import MaterialIcon from 'material-icons-react';
import moment from 'moment';

const boton={backgroundColor: '#bc322ccf', border: 'none'};

class DetallesCita extends Component {
    constructor(props) {
        super(props);
        this.state = {
            request: true,
            citas: [],
            error: ''
        };
        this.verDetalles = this.verDetalles.bind(this);
    
    }
    componentDidMount() {
        this.verDetalles();
    }

    verDetalles = (e) => { 
        const {id} = this.props.match.params;
        const cita ={// moment(res.data.horacita).format(),
            paciente: this.state.paciente,
            fechaCita: this.state.fechaCita,
            horaCita: this.state.horaCita,
            estudio: this.state.estudio,
            doctor: this.state.doctor,
            estado: this.state.estado
        }
        axios.put(API_URL + `citas/${id}`, cita).
        then(res => {
            console.log("Detalles: ", res.data.estado);
            if(res.data.estado === 'I'){
                this.setState({estado: "Inactiva"});
            }else{
                this.setState({estado: "Activa"});
            }
            //this.setState({ citas: res.data, request: false });
            this.setState({ 
                paciente: res.data.paciente,
                fechaCita: moment(res.data.fechaCita).format('DD/MM/YYYY'),
                horaCita: moment(res.data.horacita).format('hh:mm'),
                estudio: res.data.estudio,
                doctor: res.data.doctor                
            });
        }).catch(err => {
            console.log("ERROR: ", err);
            this.setState({error: err, request: false});
        });
    }

    listaCitas = () => {
        this.props.history.push('/ListaCitas');
    }

    render(){
        return(
        <div className="contenedor">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Detalles Cita Médica</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.listaCitas}>
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p><b>Paciente:</b> {this.state.paciente} <br/>
                               <b>Fecha: </b> {this.state.fechaCita} <br/>
                               <b>Hora: </b> {this.state.horaCita} <br/>
                               <b>Estudio solicitado: </b> {this.state.estudio} <br/>
                               <b>Médico asignado: </b> {this.state.doctor} <br/>
                               <b>Estado: </b> {this.state.estado}
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary " style={boton} data-dismiss="modal" onClick={this.listaCitas}>Close</button>
                        </div>
                    </div>
                </div>
            </div>

            );
        
    }
}

export default DetallesCita;