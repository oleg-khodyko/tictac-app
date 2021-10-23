import React from 'react';
import classes from './Square.module.css';

function Square({value, onClick}) {
    return (
        <button className={classes.square} onClick={onClick} >
            {value}
        </button>
    )
}

export default Square;
