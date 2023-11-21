import React, { Component } from 'react'

export default class PropsClassComp extends Component {
    render() {
        PropsClassComp.defaultProps={
            college:'skcet'
        }
        return (
            <div>
        <h1>hi i am at {this.props.college}</h1>
      </div>
    )
}
}
