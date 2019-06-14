import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Paciente from './components/Paciente.jsx';
import ListaPacientes from './components/ListaPacientes.jsx';
import Menu from './components/navbar/Menu.jsx';
import Carrusel from './components/carrusel/Carrusel.jsx';
// import Citas from './components/citas/Citas';
import Quienes from './components/quienes/Quienes';
import Examenes from './components/examenes/Examenes';

function App() {
    return (
      <div className="App">
        <Router>
          <Menu/>
          <Carrusel/>
          {/* <Citas/> */}
          <Quienes/>
          <Examenes/>
          <Route path="/paciente" Component={Paciente}/>
          <Route exact path="/" Component={ListaPacientes}/>
        </Router>
      </div>
    );
}

export default App;
