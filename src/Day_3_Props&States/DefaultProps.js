import React from 'react'

export default function DefaultProps(props) {
  DefaultProps.defaultProps={
    // name:'guru',
    college:'skcet'
  }
  return (
    <h1>Hi {props.name} I am Student at {props.college}</h1>
  )
}
