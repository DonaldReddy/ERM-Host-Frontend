import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Loader from '../Loader/Loader.jsx'
import Alert from '../Alert/Alert.jsx'
import Styles from './Login.module.css'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [user, setUser] = useState({ email: '', password: '' })
    const [isLoading, setIsLoading] = useState(false)
    const [showAlert, setShowAlert] = useState({ isShow: false, alert: '' })
    const navigate = useNavigate()

    useEffect(() => {
        setIsLoading(true)
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 1000)
        return (timeout) => { clearTimeout(timeout) }
    }, [])

    async function handleLogin(event) {
        event.preventDefault()
        try {

            setIsLoading(true)
            const response = await axios.post("http://192.168.1.109:8000/login", user, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            })
            setIsLoading(false)
            if (!response.data.status) {
                setShowAlert({ isShow: true, alert: response.data.error })
                setTimeout(() => {
                    setShowAlert({ isShow: false, alert: '' })
                }, 3000)
                setUser({ ...user, password: '' })
            }
            else {
                localStorage.setItem('user', JSON.stringify(user.email))
                navigate('/')
            }
        } catch (error) {
            setIsLoading(false)
            setShowAlert({ isShow: true, alert: error.message })
            setTimeout(() => {
                setShowAlert({ isShow: false, alert: '' })
            }, 3000)
        }
    }

    function handleChange(event) {
        const target = event.target
        setUser({ ...user, [target.name]: target.value })
    }

    return (
        isLoading ? <Loader /> :
            <div id={Styles['container']}>
                {(showAlert.isShow ? <Alert alert={showAlert.alert} /> : '')}
                <form id={Styles['login-form']}>
                    <input name='email' type='email' placeholder='Email' onChange={handleChange} value={user['email']} autoFocus />
                    <input name='password' type='password' placeholder='Password' onChange={handleChange} value={user['password']} />
                    <button id={Styles['login-btn']} onClick={handleLogin} disabled={(user.email == '' || user.password == '')} >Login</button>
                </form>
            </div>
    )
}

export default Login