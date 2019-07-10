import React from 'react';
import './App.css';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
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

import Layout from './components/Layout';
import Laboratorio from './pages/Laboratorio';
import Registrar from './components/registrar/Registrar';
import Sesion from './pages/sesion/Sesion'; //Login
import ListaRegistros from './components/listaRegistros/ListaRegistros'; //MiPerfil
import EditarRegistros from './components/editarRegistro/EditarRegistros';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify';
// import MiPerfil from "./components/MiPerfil"; //ListaRegistro
import Perfil from './components/Perfil';
// import Login from "./components/lo";
import Logout from './components/Logout';


class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      users: [
        {
          user: 'administrador@gmail.com',
          password: '123456',
          firstName: 'Administrador'
        }
      ],
      loggedUser: null
    }
  }

  
  logout = () => {
    toast(`Adios, ${this.state.loggedUser.user}` )
    this.setState({
      loggedUser: null
    })
  }

  login = (user, password) => {
    let dataUser = this.state.users.find(u => {
      return u.user === user
    })
    console.log(dataUser)
    if (dataUser) {
      
      if (password === dataUser.password) {

        toast.success(`Login Exitoso para ${dataUser.user}`)
        this.setState({
          loggedUser: {
            user: dataUser.user,
            firstName: dataUser.firstName
          }
        })
        
      } else {

        toast.error('Password incorrecto')

      }

    } else {
      toast.error("No está registado Usuario")
    }
  }

  

  loginWithProps = () => {
    return <Sesion onLogin={this.login} loggedUser={this.state.loggedUser} />
  }

  render () {
    return (
      <div className="row App">
        <Router>
          <Layout>
            <Switch>              
              <Route exact path="/" component={Laboratorio}/>
              <Route path="/ListaMedicos" component={ListaMedicos}/>
              <Route path="/Medicos" component={Medico}/>
              <Route path="/EditarMedico/:id" component={EditarMedico}/>
              <Route path="/ListaPacientes" component={ListaPacientes}/>
              <Route path="/EditarPaciente/:id" component={EditarPaciente}/>
              <Route path="/Pacientes" component={Paciente}/>
              <Route path="/ListaCitas" component={ListaCitas}/>
              <Route path="/DetallesCita/:id" component={DetallesCita}/>
              <Route path="/EditarCita/:id" component={EditarCita}/>
              <Route path="/Cita" component={Cita}/>
              
              <Route path="/sesion" component={Sesion} render={this.loginWithProps}/>
              {/* <Route path="/registrar" component={Registrar}/>  */}
              <Route path="/ListaRegistros" component={ListaRegistros}/>
              <Route path="/EditarRegistro/:id" component={EditarRegistros}/>
              <Route path="/logout" render={() => {
                return (
                  <Logout 
                    loggedUser={this.state.loggedUser} 
                    onLogout={this.logout}
                  />
                  )
                }}/>
              <Route path="/perfil/:id" component={Perfil}/>
              <Route path="/mi-perfil" render={() => {
                return <ListaRegistros loggedUser={this.state.loggedUser}/>
              }}/>              
              <Route path="/registrar" render={() => {
                return <Registrar onRegistrar={this.registrar}/>
              }}/>
              {/* /perfil/1  o /perfil/2 */}
           </Switch>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;