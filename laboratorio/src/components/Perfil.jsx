import React, { Component } from "react"
import { timingSafeEqual } from "crypto";

class Perfil extends Component {
  
  componentDidMount () {
    console.log('Perfil Did Mount')
  }

  componentWillUnmount () {
    console.log('Perfil Will unMount')
  }
  
  render() {
    console.log(this.props)
    const perfiles = [
      {
        id: 1,
        name: 'Name 1'
      },
      {
        id: 2,
        name: 'Name 2'
      },
      {
        id: 3,
        name: 'Name 3'
      },
      {
        id: 4,
        name: 'Name 4'
      },
    ]

    const perfilToShow = perfiles.find(perfil => {
      return perfil.id == this.props.match.params.id 
    })

    console.log(perfilToShow)

    return <>
      <h1>{perfilToShow.name}</h1>
    </>
  }
}

export default Perfil