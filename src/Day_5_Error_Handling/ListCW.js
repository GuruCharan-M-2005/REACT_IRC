import React from 'react'
function Demo(props){
    return(
        <div>
            my name is {props.name}
        </div>
    )
}
export default function ListCW() {
    const list=["mango","orange","apple"];
  return (
    <div>
        {list.map((summa)=>
            <Demo name={summa}/>
        )}
    </div>
  )
}
