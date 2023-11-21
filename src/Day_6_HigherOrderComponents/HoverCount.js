import React, { Component } from 'react'
import Increment from './Increment'

class HoverCount extends Component {
    render() {
        return (
          <div>
            <button onMouseOver={this.props.inc}>CLick ME</button>
            <h1>{this.props.count}</h1>
          </div>
        )
      }
}

export default Increment(HoverCount)
