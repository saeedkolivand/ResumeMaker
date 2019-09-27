import React from 'react';
import './Input.css';

const Input = props => {
    return (
        <input 
            id={props.id}
            onChange={props.changed} 
            placeholder={props.placeholder} 
            autoComplete={props.autocomplete}
            type={props.type} 
            name={props.name} />
    );
};

export default Input;
