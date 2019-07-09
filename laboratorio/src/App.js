import React,{Component} from 'react';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Laboratorio from './pages/Laboratorio';
import Medico from './components/medico/Medico';
import ListaMedicos from './components/listaMedicos/ListaMedicos';
import EditarMedico from './components/editarMedico/EditarMedico';
import Paciente from './components/paciente/Paciente';
import ListaPacientes from './components/listaPacientes/ListaPacientes';
import EditarPaciente from './components/editarPaciente/EditarPaciente';
import Cita from './components/cita/Cita';
import ListaCitas from './components/listaCitas/ListaCitas';
import DetallesCita from './components/detallesCita/DetallesCita';
import EditarCita from './components/editarCita/EditarCita';
import Registrar from './components/registrar/Registrar';
import SesionRegistro from './pages/sesionRegistro/SesionRegistro';
import ListaRegistros from './components/listaRegistros/ListaRegistros';
import EditarRegistros from './components/editarRegistro/EditarRegistros';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './App.css';

const passport = require('passport');


class App extends Component {

  constructor (props) {
    super(props);
    this.state = {}
  }

  render(){
    return (
      <div className="row App">
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
        <Router>
          <Layout>
            <Switch>              
              <Route exact path="/" component={Laboratorio}/>
              <Route path="/Medicos" component={Medico}/>
              <Route path="/ListaMedicos" component={ListaMedicos}/>
              <Route path="/EditarMedico/:id" component={EditarMedico}/>
              <Route path="/Pacientes" component={Paciente}/>
              <Route path="/ListaPacientes" component={ListaPacientes}/>
              <Route path="/EditarPaciente/:id" component={EditarPaciente}/>
              <Route path="/Cita" component={Cita}/>
              <Route path="/ListaCitas" component={ListaCitas}/>
              <Route path="/DetallesCita/:id" component={DetallesCita}/>
              <Route path="/EditarCita/:id" component={EditarCita}/>
              
              <Route path="/sesion" component={SesionRegistro}/>


              {/* <Route path="/registro" component={SesionRegistro}/> */}
              <Route path="/registrar" component={Registrar}/>
              <Route path="/ListaRegistros" component={ListaRegistros}/>
              <Route path="/EditarRegistro/:id" component={EditarRegistros}/>
           </Switch>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;