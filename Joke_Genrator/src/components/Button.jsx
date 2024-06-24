import React from 'react';
import './Button.css'

const Button = (props)=>{
  return (
    <button onClick={props.callApi}>
        Click Here Genrerate a joke
    </button>
  );
}

export default Button;
