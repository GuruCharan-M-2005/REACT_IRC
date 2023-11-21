import React, { useEffect, useState } from 'react'

export default function UseEffect() {
const[count,setCount]=useState({name:'Saran',age:'14'});
useEffect(()=>{
    setTimeout(()=>{
        setCount({
            name:'guru',
            age:'18'
        })
    },2000)
    // document.title=`count ${count}`  //RENAME THE WEB SERVER NAME
})
  return (
    <div>
        <h1>Count value {count.name} {count.age}</h1>
    </div>
  )
}
