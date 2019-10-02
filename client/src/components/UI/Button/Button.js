import React from 'react';
import './Button.css';

const Button = props => {
    const styleBtn = {
        backgroundColor: props.bgColor,
        color: props.color
    };

    

    return (
        <button id={props.id ? props.id : 'button'} style={styleBtn} onClick={props.clicked}>
            {props.children}
        </button>
    )
};

export default Button;