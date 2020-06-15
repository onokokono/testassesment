import React from 'react';
import './Button.css';

const Button = (props) => {

    return (
        <button onClick={props.onClick} >
            {props.btnTxt}
        </button>
    )
};

export default Button;