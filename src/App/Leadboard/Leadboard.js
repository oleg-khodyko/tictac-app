import React, { Component } from 'react';
import classes from './Leadboard.module.css';
import PositionItem from './PositionItem/Position-item';
import Arrow from './arrow.png';



const BackBtn = (props) => {
    return(
        <button className={classes.backBtn}> 
            <img src={props.arrImg} alt='back' />
        </button>
    )
}

export default class Leadboard extends Component {

    render() {
        const {players} = this.props;

        let itemElements = players.map((player, i) => {
                return <PositionItem 
                    number={player.id} 
                    userName={player.name} 
                    points={player.points} />  
        });

        return(
            <div className={classes.wrapper}>
                <BackBtn arrImg={Arrow}/>
                <div className={classes.header}>
                    <div className={classes.number}>Number</div>
                    <div className={classes.profile}>Player Profile</div>
                    <div className={classes.points}>Points</div>
                </div>
                <div className={classes.positionItem}>
                    <div> {itemElements} </div>
                </div>
            </div>
        );
    }
}