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
        this.editarRegistroUsuario();
    }

    editarRegistroUsuario = (e) => {
        
        const { id } = this.props.match.params;
        const registro = {
            nombre: this.state.nombre,
            nombreUsuario: this.state.nombreUsuario,
            password: this.state.password
        }
        // e.preventDefault();
        console.log(API_URL + `registros/${id}`, registro);
        // e.preventDefault();
        axios.put(API_URL + `registros/${id}`, registro).
            then(res => {
                this.setState({
                    nombre: res.data.nombre,
                    nombreUsuario: res.data.nombreUsuario,
                    password: res.data.password                    
                });
                toast.success(`"${this.state.nombre}" actualizado con éxito.`);
            }).catch(err => {
                console.log("ERROR: ", err);
                toast.success("ERROR al actualizar el registro.");
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
                            <b><h3 className="centrarTexto">Editar Registro: {this.state.nombre}</h3></b>
                        </div>
                    </div><br /><br />
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="n">Nombre</label>
                            <input type="text" onChange={this.cambio} className="form-control" id="nombre" value={this.state.nombre} aria-describedby="emailHelp" placeholder="Introduzca un nombre"/>
                            <small id="emailHelp" className="form-text text-muted">Puede ser cualquier nombre corto para identificarlo.</small>
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="nombre-usuario">Nombre de usuario</label>
                            <input type="email" onChange={this.cambio} className="form-control" id="nombreUsuario" value={this.state.nombreUsuario} aria-describedby="emailHelp" placeholder="Ejemplo: correo@algo.com"/>
                            <small id="emailHelp" className="form-text text-muted">Introducir su correo electrónico.</small>
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="contrasenia">Contraseña</label>
                            <input type="password" onChange={this.cambio} className="form-control" id="password" value={this.state.password} placeholder="Introducir contraseña"/>
                        </div>                    
                        <div className="form-group col-md-12">
                                <label htmlFor="cContrasenia">Verificar contraseña</label>
                                <input type="password" className="form-control" id="cPassword" placeholder="Verificar la contraseña"/>
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