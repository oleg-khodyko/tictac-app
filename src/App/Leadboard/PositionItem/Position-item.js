import React, { Component } from "react";
import classes from './Position-item.module.css';
import image from './user-logo.png';

export default class PositionItem extends Component {

    render() {
        
        const {number, userName, points} = this.props;
        return(
            <div className={classes.item}>
                <p className={classes.number}> {number} </p>
                <div className={classes.profile}>
                    <img src={image} alt='user-logo'/>
                    <p className={classes.name}> {userName} </p>
                </div>
                <p className={classes.points}> {points} </p>
            </div>
        );
    }
}