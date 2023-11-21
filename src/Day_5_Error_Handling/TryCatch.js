import React from 'react'

export default function TryCatch(props) {
    try{
        if(props.name==="Saran"){
            throw new Error("Name Error");
        }
    }
    catch(error){
        console.log(error);
        document.write("<h1>Name Error</h1>");
    }
    return (
        <div>
            <h1>
                Hi I am {props.name}
            </h1>
        </div>
    )
}
