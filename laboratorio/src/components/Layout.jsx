import React from 'react';

import Inicio from '../pages/inicio/Inicio'; 
import Menu from './menu/Menu';
import Laboratorio from '../pages/Laboratorio';

function Layout(props) {
  // const children = props.children;

  return (
    <React.Fragment>
      {/* <Inicio /> .*/}
      <Menu /> 
      {/* <Laboratorio /> */}
      {props.children}
    </React.Fragment>
  );
}

export default Layout;