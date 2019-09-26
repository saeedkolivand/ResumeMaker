import React from 'react';
import './Select.css';

const Select = props => {
    const optionsJSX = props.options.map(((value, index, array) => {
        return <option key={index} value={value}>{value}</option>
    } ));
    return (
        <select className="optionClass" id={props.id} onChange={props.changed}>
            <option >-</option>
            {optionsJSX}
        </select>
    );
};

export default Select;
