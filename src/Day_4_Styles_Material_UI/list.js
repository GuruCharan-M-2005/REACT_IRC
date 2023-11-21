import React from 'react'

function Demo(props){
    return(
        <h1>Here you go {props.name}</h1>
    )
}
export default function List() {
    const fruits=["mango","apple"]
    const display=fruits.map((name)=>{return <li>{name}</li>})
  return (
    <div>
        <Demo name='List of Fruits'/>
        <ul>
        {display}
        </ul></div>
  )
}
