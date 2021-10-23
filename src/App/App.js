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
            points: 0,
            currentUser: '',
        }
    }

    handlerChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    toPlay = (event) => {
        event.preventDefault();
        const key = this.state.key + 1;
        const count = this.state.count + 1;
        this.setState({
            key: key,
            count: count
        });

        if (this.state.name && 
            this.state.login && 
            this.state.password) {
                state.players.push(this.state);
                this.setState({
                    currentUser: this.state.login
                }) 
        } else alert('Заполните все поля')
    }

    render() {
        const name = this.state.name;
        const login = this.state.login;
        const password = this.state.password;
        const key = this.state.key;
        const currentUser = this.state.currentUser;

        return(
            <div>
                <div className={classes.inputWrapper}>
                    <div className={classes.inputArea}>
                        <Form   name={name} 
                                login={login} 
                                password={password}
                                handlerChange={this.handlerChange}
                                toPlay={this.toPlay} />
                    </div>
                </div>
                <Game   currentUser={currentUser} 
                        toPlay={''} 
                        pushArr={''} />
                <Leadboard  players={state.players}
                            keys={key}/>
            </div>
        )
    }
}
