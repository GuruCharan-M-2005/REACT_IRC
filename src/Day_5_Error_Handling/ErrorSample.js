import React from 'react'

export default function ErrorSample({studentName}) {
    if(studentName==="Saran"){
        throw new Error("Name not accepted");
    } 
    return (
      <div>
        <h1>Hi I am  {studentName}</h1>
      </div>
    )
}
