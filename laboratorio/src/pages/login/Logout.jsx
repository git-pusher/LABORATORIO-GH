import React, { Component } from "react"
import { Redirect } from "react-router-dom";

class Logout extends Component {  
  render() {
    if (this.props.loggedUser) {
      this.props.onLogout()
      return <></>
    } else {
      return <Redirect to="/"/>
    }
  }
}

export default Logout