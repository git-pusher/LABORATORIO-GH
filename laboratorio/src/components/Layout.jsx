import React from 'react';

import Menu from './menu/Menu';
import Laboratorio from '../pages/Laboratorio';

function Layout(props) {
  // const children = props.children;

  return (
    <React.Fragment>
      <Menu />
      <Laboratorio />
      {props.children}
    </React.Fragment>
  );
}

export default Layout;