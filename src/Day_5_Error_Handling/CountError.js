import React, { useState } from 'react'

export default function CountError() {
    const [count,setCount]=useState(0)
    const incre=()=>{
        setCount(count+1);
    }
    const decre=()=>{
        setCount(count-1);
    }
    try{
        if(count>=10){
            throw new Error("Number Error")
        }
    }
    catch(error){
        console.log(error);
        document.write("<h1>Error</h1>")
    }
  return (
    <div>
        <p>{count}</p>
        <button onClick={incre}>Increment</button>
        <button onClick={decre}>Decrement</button>
    </div>
  )
}
