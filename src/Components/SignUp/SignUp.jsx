import React from 'react'
import Styles from './SingUp.module.css'

function SignUp() {

    function handleSignUp(event) {
        event.preventDefault()
    }

    return (
        <div id={Styles['container']}>
            <form id={Styles['login-form']}>
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <input type='password' placeholder='ReEnter Password' />
                <button id={Styles['login-btn']} onClick={handleSignUp}>SignUp</button>
            </form>
        </div>
    )
}

export default SignUp