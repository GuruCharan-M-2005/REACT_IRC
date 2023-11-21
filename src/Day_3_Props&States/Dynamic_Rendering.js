import React from 'react'

export default function Dynamic_Rendering(props) {
  Dynamic_Rendering.defaultProps={
    num:'10'
  }
  return (
    <div>
        {props.num==='10' ? <h1>correct</h1> : <h1>Wrong</h1>}
    </div>
  )
}
