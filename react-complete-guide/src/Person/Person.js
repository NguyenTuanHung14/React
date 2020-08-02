import React from 'react';
import './Person.css'
const person = (props)=>{
return (
    <div className="Person">
         <p>I'm {props.name}</p>
         <p>{props.children}</p>
         <input type="text" onChange={props.change} value={props.name}/>
    </div>
   
) 

}

export default person;