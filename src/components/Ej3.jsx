import React from 'react';
import { useState } from 'react';
const Ej3 = (props) => {
    const [msj, setMsj]=useState('');
    let cmsj='';
    const clickme=()=>{
       setMsj('(from changed state)');
       
    };
    return (
        <div>
            <h1>Hello {props.msj} {msj}</h1>
            <button type='button' onClick={clickme}>Click me</button>
            
        </div>
    );
};

export default Ej3;



