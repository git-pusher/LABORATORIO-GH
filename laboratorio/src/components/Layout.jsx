import React from 'react';

import Menu from './menu/Menu';

function Layout(props) {
  // const children = props.children;

  return (
    <React.Fragment>
      <Menu /> 
      {props.children}
    </React.Fragment>
  );
}

export default Layout;