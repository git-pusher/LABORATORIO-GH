import React, { Component } from 'react';
import axios from 'axios';
import API_URL from '../../constants';
import MaterialIcon from 'material-icons-react';
import { ToastContainer, toast } from 'react-toastify';

class EditarRegistros extends Component {
    constructor(props) {
        super(props);
        this.state = {
            request: true,
            registros: [],
            errr: ''
        };
        this.editarRegistroUsuario = this.editarRegistroUsuario.bind(this);
    }

    componentDidMount() {
        this.obtenerRegistro();
    }

    obtenerRegistro = e => {
        const { id } = this.props.match.params;
        axios.get(API_URL + `registros/${id}`)
            .then(res => {
                this.setState({
                    nombre: res.data.nombre,
                    nombreUsuario: res.data.nombreUsuario,
                    password: res.data.password
                })
            }).catch(err => {
                console.log("error: ", err);
            });
    }

    editarRegistroUsuario = (e) => {
        e.preventDefault();
        const { id } = this.props.match.params;
        axios.put(API_URL + `registros/${id}`, {
            nombre: this.state.nombre,
            nombreUsuario: this.state.nombreUsuario,
            password: this.state.password,
            // hash: this.state.hash,
            estado: this.state.estado
        }).                
            then(res => {
                if(res.data.success){                
                    toast.success(res.data.mensaje);
                    setTimeout(function(){
                        window.location.replace('/ListaRegistros')
                      },2000);
                }else if(res.data.err){                              
                    toast.err(res.data.mensaje);
                }
            }).catch(err => {
                console.log("ERROR: ", err);
                toast.error("ERROR al actualizar el registro.");
                this.setState({ error: err, request: false });
            });       
    }

    listaRegistros = () => {
        this.props.history.push('/ListaRegistros');
    }

    cambio = (event) => {
        const { id, value } = event.target;
        this.setState({ [id]: value });
        
        console.log(this.state);
    }

    render() {
        return (
            <div className="contenedor">
                <ToastContainer
                    position="bottom-center"
                    autoClose={2000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                />
                <form className="" onSubmit={this.editarRegistroUsuario}>
                    <div className="card">
                        <div className="cardBorder card-body">
                            <b><h3 className="centrarTexto">Editar Usuario: {this.state.nombre}</h3></b>
                        </div>
                    </div><br /><br />
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="n">Nombre</label>
                            <input type="text" 
                                   onChange={this.cambio} 
                                   className="form-control" 
                                   id="nombre" 
                                   value={this.state.nombre} 
                                   aria-describedby="emailHelp" 
                                   placeholder="Introduzca un nombre"/>
                            <small id="emailHelp" className="form-text text-muted">Puede ser cualquier nombre corto para identificarlo.</small>
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="nombre-usuario">Nombre de usuario</label>
                            <input type="email" 
                                   onChange={this.cambio} 
                                   className="form-control" 
                                   id="nombreUsuario" 
                                   value={this.state.nombreUsuario} 
                                   aria-describedby="emailHelp" 
                                   placeholder="Ejemplo: correo@algo.com"/>
                            <small id="emailHelp" className="form-text text-muted">Introducir su correo electrónico.</small>
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="contrasenia">Contraseña</label>
                            <input type="password" 
                                   onChange={this.cambio} 
                                   className="form-control" 
                                   name="password"
                                   id="password" 
                                   value={this.state.password} 
                                   placeholder="Introducir contraseña"/>
                        </div>                    
                        <div className="form-group col-md-12">
                                <label htmlFor="cContrasenia">Verificar contraseña</label>
                                <input type="password" 
                                       className="form-control" 
                                       name="confPassword"
                                       id="confPassword" 
                                       placeholder="Verificar la contraseña - PENDIENTE"
                                       disabled/>
                        </div>  
                    </div>
                    <div className="form-row">
                        <div className="containerForm form-group col-md-12">
                            <button type="submit" className="btn accionGuardar" >
                                <MaterialIcon icon="done" className="material-icons"></MaterialIcon>
                                &nbsp;Actualizar
                            </button>
                            <button type="button" onClick={this.listaRegistros} className="btn accionCancelar">
                                <MaterialIcon icon="cancel" className="material-icons"></MaterialIcon>
                                &nbsp;Cancelar
                            </button>
                        </div>
                    </div>                                                                            
                </form>
            </div>        
        );
    }

}

export default EditarRegistros;