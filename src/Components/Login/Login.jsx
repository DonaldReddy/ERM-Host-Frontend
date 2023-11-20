import React from 'react'
import Styles from './Login.module.css'

function Login() {

    function handleLogin(event) {
        event.preventDefault()
    }

    return (
        <div id={Styles['container']}>
            <form id={Styles['login-form']}>
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <button id={Styles['login-btn']} onClick={handleLogin}>Login</button>
            </form>
        </div>
    )
}

export default Login