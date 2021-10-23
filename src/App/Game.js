import React, { Component } from "react";
import classes from './Game.module.css';
import Board from "./GameBoard";
import userLogo from './user-logo.png'; 
// import state from './state/state';

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            count: 0,
            xIsNext: true,
            stepNumber: 0,
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length-1];
        const squares = current.squares.slice();
        
        if (calculateWinner(squares) || squares[i]) {      
          return;
        }
        
        if (this.state.count === 0) {
            alert('Нажмите "Старт" для начала игры');
        } else {
            squares[i] = this.state.xIsNext ? 'X' : 'O';
            this.setState({
                history:history.concat([{
                    squares:squares
                }]),
                stepNumber: history.length,
                xIsNext: !this.state.xIsNext
            });
        }


        
      }

      jumpTo(step) {
          this.setState({
              stepNumber: step,
              xIsNext: (step % 2 === 0)
          });
      }

       toStart = () => {
          let numOfGame = this.state.count + 1;
          this.setState({
              count: numOfGame
          });
      }

    render() {
        const {currentUser} = this.props;

        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        const count = this.state.count;

        let status;
        if (winner) {
            status = `Победитель: ${winner}`;

        } else {
            status = `Следующий ход: ${this.state.xIsNext ? 'X': 'O'}`;
        }

        const moves = history.map((step, move) => {
            const desc = move ? 
            `Перейти к ходу № ${move}` : 
            'К началу игры';

            return (
                <li key={move} >
                    <button className={classes.moveItem} 
                            onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            )
        });

        return(
            <section className={classes.wrapper}>
                <div className={classes.gameArea}>
                    <div className={classes.wrapperUserBar}>
                    <img src={userLogo} alt='user-logo'/>
                        <div className={classes.currentUser}>
                            <p className={classes.name}>Игрок: {currentUser} </p>
                            <p className={classes.numOfPlay}>Игра № {count}</p>
                        </div>
                    </div>
                    <Board squares={current.squares} 
                            onClick={(i) => this.handleClick(i)} />
                </div>  

                <div className={classes.gameInfo}>
                    <div className={classes.history}>
                        <div className={classes.status}> {status} </div>   
                        <ol className={classes.moves}> {moves} </ol>
                    </div>
                    <div className={classes.buttons}>
                        <button className={classes.viewRating}>Stop and results</button>
                        <button className={classes.viewRating}
                                onClick={this.toStart}>Start</button>
                    </div>
                </div>
            </section>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }