import React, {useState} from "react";
import classes from './App.module.css';
import Form from "./Form";
import Game from "./Game";
import Leadboard from "./Leadboard/Leadboard";
import state from './state/state'

function App() {
    const [name, setName] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [count, setCount] = useState(0);
    const [currentUser, setCurrentUser] = useState('');

    const [players, setPlayers] = useState([
        {id: 1, name: 'Oleg', points: 1000}
    ])
    const [player, setPlayer] = useState(''); 


    const nameHandler = (event) => {
        setName(event.target.value);
    }

    const loginHandler = (event) => {
        setLogin(event.target.value);
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }
    
    const toPlay = (event) => {
        event.preventDefault();
        setCount(count+1);
        if (login && name && password) {
            setPlayer({
                id: count,
                name: login,
                points: 10
            });
            setCurrentUser(login);
        } else alert('error');
        setPlayers([
            ...players,
            {player} 
        ])
        state.players.push(player)
    }

    return(
        <div>
            <div className={classes.inputWrapper}>
                <div className={classes.inputArea}>
                    <Form name={name} 
                            login={login} 
                            password={password}
                            nameHandler={nameHandler}
                            loginHandler={loginHandler}
                            passwordHandler={passwordHandler}
                            toPlay={toPlay} 
                    />
                </div>
            </div>
            <Game currentUser={currentUser} count={count} setCount={setCount} toPlay={toPlay}/>
            <Leadboard players={state.players}/>
        </div>
    )
}
export default App;