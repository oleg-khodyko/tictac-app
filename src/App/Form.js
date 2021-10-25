import React from "react";
import classes from './Form.module.css';

function Form({name, login, password, handlerChange, handlerClick}) {

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
                                onChange={handlerChange}
                                autoComplete='off' />
                            <input 
                                placeholder='Login' 
                                value={login} 
                                name='login' 
                                onChange={handlerChange}
                                autoComplete='off' />
                            <input 
                                placeholder='Password' 
                                value={password} 
                                type='password'
                                name='password' 
                                onChange={handlerChange}
                                autoComplete='off' />

                            <button className={classes.toPlayBtn}
                                    onClick={handlerClick}
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