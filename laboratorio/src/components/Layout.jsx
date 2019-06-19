import React from 'react';

import Menu from './menu/Menu';
import Laboratorio from '../pages/Laboratorio';
import Inicio from '../pages/inicio/inicio';

function Layout(props) {
  // const children = props.children;

  return (
    <React.Fragment>
      <Inicio />
      {/* <Menu /> */}
      {/* <Laboratorio /> */}
      {props.children}
    </React.Fragment>
  );
}

export default Layout;