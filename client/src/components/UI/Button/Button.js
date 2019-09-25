import React from 'react';
import './Button.css';

const Button = props => {
    const styleBtn = {
        backgroundColor: props.bgColor,
        color: props.color
    };
    return (
        <button id="button" style={styleBtn} onClick={props.clicked}>
            {props.children}
        </button>
    )
};

export default Button;