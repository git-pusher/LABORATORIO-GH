import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Paciente from './components/Paciente.js';
import ListaPacientes from './components/ListaPacientes.js';
import Menu from './components/Menu.js';

function App() {
    return (
      <div className="App">
        <Router>
          <Menu/>
          <ListaPacientes/>
          <Route path="/pacientes" Component={Paciente}/>
          <Route exact path="/ListaPacientes" Component={ListaPacientes}/>
        </Router>
      </div>
    );
}

export default App;
