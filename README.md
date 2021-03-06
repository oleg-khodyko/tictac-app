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
        if (login && name && password) {
            setCurrentUser(login || name);
            setCount(count + 1);
        } else {
            alert('error')
        }

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
            <Game currentUser={currentUser} count={count} setCount={setCount}/>
            <Leadboard players={state.players}/>
        </div>
    )
}
export default App;