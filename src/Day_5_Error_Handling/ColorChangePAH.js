import React, { Component } from 'react'

export default class ColorChangePAH extends Component {
   state={color:"I am Neo"}
componentDidMount()
{
    setTimeout(()=>{this.setState({color:"Welcome To Skcet"})},3000)
}

 
    render() {
    return (
      <div>
        <h1>{this.state.color}</h1>
        <p id="i"></p>
      </div>
    )
  }
}