import React from 'react'
import PropTypes from 'prop-types'

export default function PropsValid(props) {
  return (
    <div>
        <h1>My Name Is {props.name}</h1>
    </div>
  )
}

PropsValid.propTypes={name:PropTypes.string}