import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Paciente from './components/Paciente.jsx';
import ListaPacientes from './components/ListaPacientes.jsx';
import Menu from './components/navbar/Menu.jsx';
import Carrusel from './components/carrusel/Carrusel.jsx';

function App() {
    return (
      <div className="App">
        <Router>
          <Menu/>
          <Carrusel/>
          <Route path="/paciente" Component={Paciente}/>
          <Route exact path="/" Component={ListaPacientes}/>
        </Router>
      </div>
    );
}

export default App;
