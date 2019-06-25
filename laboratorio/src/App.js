import React from 'react';
import './App.css';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import Medico from './components/medico/Medico';
import ListaMedicos from './components/listaMedicos/ListaMedicos';
import Paciente from './components/paciente/Paciente';
import ListaPacientes from './components/listaPacientes/ListaPacientes';
import ListaCitas from './components/listaCitas/ListaCitas';
import Cita from './components/cita/Cita';

import Layout from './components/Layout';
import Laboratorio from './pages/Laboratorio';
import Inicio from './pages/inicio/Inicio';
import Registrar from './components/registro/Registrar';


function App() {
    return (
      <div className="App">
        <Router>
          <Layout>
            <Switch>              
              <Route exact path="/" component={Laboratorio}/>
              <Route path="/ListaMedicos" component={ListaMedicos}/>
              <Route path="/Medicos" component={Medico}/>
              <Route path="/ListaPacientes" component={ListaPacientes}/>
              <Route path="/Pacientes" component={Paciente}/>
              <Route path="/ListaCitas" component={ListaCitas}/>
              <Route path="/Cita" component={Cita}/>
              <Route path="/sesion" component={Inicio}/>
              <Route path="/registro" component={Registrar}/>
           </Switch>
          </Layout>
        </Router>


        {/* <Router>    
          <Menu/>
          <Carrusel/>
          <Examenes/>
          <Footer/>
          <Route path="/paciente" Component={Paciente}/>
          <Route exact path="/" Component={ListaPacientes}/>
        </Router> */}

      </div>
    );
}

export default App;
