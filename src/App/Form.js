import React, {useState} from "react";
import classes from './Form.module.css';

function Form({name, login, password, nameHandler, loginHandler, passwordHandler, toPlay}) {

    return (
        <section className={classes.wrapper}>
            <div className={classes.content}>
                    <h1 className={classes.title}>Registration</h1>
                <div className={classes.inputWrapper}>
                    <div className={classes.inputArea}>
                        <form className={classes.form}>
                            <input 
                                placeholder='Name' 
                                value={name} 
                                name='name' 
                                onChange={nameHandler}
                                autoComplete='off' />
                            <input 
                                placeholder='Login' 
                                value={login} 
                                name='login' 
                                onChange={loginHandler}
                                autoComplete='off' />
                            <input 
                                placeholder='Password' 
                                value={password} 
                                name='password' 
                                onChange={passwordHandler}
                                autoComplete='off' />

                            <button className={classes.toPlayBtn}
                                    onClick={toPlay}
                            > To Play
                            </button>
                            
                        </form>
                    </div>
                </div>
            </div>

        </section>



    )
}

export default Form;