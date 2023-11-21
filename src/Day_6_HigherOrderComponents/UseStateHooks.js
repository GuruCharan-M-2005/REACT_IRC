import React,{Component,useState} from 'react'

export default function UseStateHooks() {
    const styles={
        border:'solid 3px black'
    }
    const[name,setName]=React.useState('');
    const finput = (event) => {
        setName(event.target.value)
    }

    const[age,setAge]=useState('');
    const sinput = (event) => {
        setAge(event.target.value)
    }

    const[data,setData]=useState('')
    const handleChange=(e)=>{
        e.preventDefault();
        setData(
          name + " " + age
        )
    }


    return (
      <div>
          <form>
              <input type='text'placeholder='password' style={styles} onChange={sinput} value={age} id='b'></input><br></br>
              <input type='text' placeholder='username' style={styles} onChange={finput} value={name} id='a'></input><br></br><br></br>
              <button style={styles} onClick={handleChange}>Click me!</button>
              <br></br>
              <h1>{data}</h1>
          </form>
      </div>
    )
}

