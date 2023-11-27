import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'
import Loader from '../Loader/Loader.jsx'
import LoaderContext from '../../Context/LoaderContext/LoaderContext.js'
import Styles from './Login.module.css'

function Login() {

    const [user, setUser] = useState({ email: '', password: '' })
    const { isLoading, setIsLoading } = useContext(LoaderContext)

    useEffect(() => {
        setIsLoading(true)
        const timeout = setTimeout(() => {
            setIsLoading(false);
            console.log("done");
        }, 1000)
        console.log(user.email == '');
        return (timeout) => { clearTimeout(timeout) }
    }, [])

    async function handleLogin(event) {
        event.preventDefault()
        setIsLoading(true)
        await axios.post("http://192.168.1.109:8000/login", user, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        if (!response.data.status)
            console.log(response.data.error);
        else
            console.log('successfully logged in');
        setIsLoading(false)
    }

    function handleChange(event) {
        const target = event.target
        setUser({ ...user, [target.name]: target.value })
    }

    return (
        isLoading ? <Loader /> :
            <div id={Styles['container']}>
                <form id={Styles['login-form']}>
                    <input name='email' type='email' placeholder='Email' onChange={handleChange} value={user['email']} />
                    <input name='password' type='password' placeholder='Password' onChange={handleChange} value={user['password']} />
                    <button id={Styles['login-btn']} onClick={handleLogin}>Login</button>
                </form>
            </div>
    )
}

export default Login