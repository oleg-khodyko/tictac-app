import React, { Component } from "react";
import classes from './App.module.css';
import Form from "./Form";
import Game from "./Game";
import Leadboard from "./Leadboard/Leadboard";
import state from './state/state'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 100,
            count: 1,
            name: '',
            login: '',
            password: '',
            points: 10,
            currentUser: '',
        }
    }

    handlerChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    handlerClick = (event) => {
        event.preventDefault();
        const key = this.state.key + 1;
        const count = this.state.count + 1;

        if (this.state.name && 
            this.state.login && 
            this.state.password) {
                this.setState({
                    key: key,
                    count: count
                });
                state.players.push(this.state);
                this.setState({
                    currentUser: this.state.login
                }) 
        } else alert('Заполните все поля');

        this.setState({
            name: '',
            login: '',
            password: ''
        });
    }

    render() {
        const name = this.state.name;
        const login = this.state.login;
        const password = this.state.password;
        const currentUser = this.state.currentUser;

        return(
            <div>
                <div className={classes.inputWrapper}>
                    <div className={classes.inputArea}>
                        <Form   name={name} 
                                login={login} 
                                password={password}
                                handlerChange={this.handlerChange}
                                handlerClick={this.handlerClick} />
                    </div>
                </div>
                <Game   currentUser={currentUser} />
                <Leadboard  players={state.players}/>
            </div>
        )
    }
}
