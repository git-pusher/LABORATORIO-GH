import React, { Component } from "react"
import { Redirect } from "react-router-dom";

class Login extends Component {

  constructor (props) {
    super(props)
    this.state = {
      userText: '',
      passwordText: ''
    }
  }
  
  componentDidMount () {
    console.log('Login Did Mount')
  }

  componentWillUnmount () {
    console.log('Login Will unMount')
  }

  updateUserText = (e) => {
    console.log(e.target.value)
    this.setState({
      userText: e.target.value
    })
  }
   
  updatePasswordText = (e) => {
    console.log(e.target.value)
    this.setState({
      passwordText: e.target.value
    })
  } 

  handleButtonClick = () => {
    this.props.onLogin(this.state.userText, this.state.passwordText)
  }
  
  render() {
    if ( this.props.loggedUser) {
      return <Redirect to="/" />
      }
      return (
        // <h1>Login</h1>
        <div>
          <div>
            <label htmlFor="">User</label>
            <input type="text" onChange={this.updateUserText}/>
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input type="password" onChange={this.updatePasswordText}/>
          </div>
          <div>
            <button onClick={this.handleButtonClick}>Login</button>
          </div>
        </div>
      );
  }
}


export default Login