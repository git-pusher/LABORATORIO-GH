import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Paciente from './components/Paciente.js';
import Doctor from './components/Doctor.js';
import ListaPacientes from './components/ListaPacientes.js';
import ListaDoctores from './components/ListaDoctores.js';
import Menu from './components/Menu.js';

function App() {
    return (
      <div className="App">
        <Router>
          <Menu/>
          <Route path="/pacientes" component={Paciente}/>
          <Route path="/ListaPacientes" component={ListaPacientes}/>
          <Route path="/doctores" component={Doctor}/>
          <Route path="/ListaDoctores" component={ListaDoctores}/>
        </Router>
      </div>
    );
}

export default App;
