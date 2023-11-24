import React, { useState } from 'react'

export default function Forms() {
    const [first,setFirst]=useState("");
    const [last,setLast]=useState("");
    const [error,setError]=useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(first.length===0 || last.length===0){
            setError(true);
        }
        else{
            console.log(first+" "+last);
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            Enter the First Name
            <input type='text' value={first} onChange={(e)=>setFirst(e.target.value)}></input>
            <div>
                {(error || first.length===0) ? <p>fill firstname</p> : ''}
            </div>
            Enter the last Name
            <input type='text' value={last} onChange={(e)=>setLast(e.target.value)}></input>
            <div>
                {(error || last.length===0) ? <p>fill lastname</p> : ''}
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
