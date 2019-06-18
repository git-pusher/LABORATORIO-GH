import React from 'react';
import './App.css';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
// import Paciente from './components/Paciente.jsx';
// import ListaPacientes from './components/ListaPacientes.jsx';
// import Menu from './components/menu/Menu.jsx';
import Carrusel from './components/carrusel/Carrusel.jsx'; //Tiene fallo D:
import Examenes from './components/examenes/Examenes';
import Footer from './components/footer/Footer';
import Layout from './components/Layout';
// import Login from './components/sesion/Login';

function App() {
    return (
      <div className="App">
        <Router>
          <Layout>
            <Switch>
                <Route exact path="/"/>
                {/* <Route exact path="/badges/new" component={BadgeNew} /> */}
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
