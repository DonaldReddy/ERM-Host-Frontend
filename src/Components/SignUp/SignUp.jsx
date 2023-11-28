import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Loader from '../Loader/Loader.jsx'
import Alert from '../Aleart/Alert.jsx'
import Styles from './SignUp.module.css'
import { useNavigate } from 'react-router-dom'

function SignUp() {

    const [user, setUser] = useState({ email: '', password: '', repassword: '' })
    const [isMatch, setIsMatch] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [showAlert, setShowAlert] = useState({ isShow: false, alert: '' })
    const navigate = useNavigate()

    useEffect(() => {
        setShowAlert({ isShow: false, alert: '' })
        setIsLoading(true)
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 1000)
        return (timeout) => { clearTimeout(timeout) }
    }, [])

    async function handleSignUp(event) {
        event.preventDefault()
        try {

            setIsLoading((prev) => {
                console.log(new Date().getTime());
                return true
            })

            const response = await axios.post("http://192.168.1.109:8000/signup", user, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            })
            if (!response.data.status) {
                console.log(response.data.error);
                throw new Error(response.data.error)
            }
            else {
                setTimeout(() => {
                    setIsLoading(false)
                    setShowAlert({ isShow: true, alert: 'Signed in successfully, please log in' })
                    setTimeout(() => {
                        setShowAlert({ isShow: false, alert: '' })
                        navigate('/')
                    }, 3100)
                }, 2000)
            }



        } catch (error) {
            setTimeout(() => {
                setIsLoading(false)
            }, 3000)
            setTimeout(() => {
                setShowAlert({ isShow: true, alert: 'Email already in use' })
                setTimeout(() => {
                    console.log(new Date().getTime());
                    setShowAlert({ isShow: false, alert: '' })
                }, 3000)
            }, 3200)
        }
    }


    function handleChange(event) {
        const target = event.target
        setUser((prevUser) => {
            const updatedUser = { ...prevUser, [target.name]: target.value };
            if (target.name != 'email')
                if (updatedUser.password != '' && updatedUser.password === updatedUser.repassword) {
                    setIsMatch(true)
                }
                else
                    setIsMatch(false)
            return updatedUser;
        })
    }

    return (

        isLoading ? <Loader /> :
            <div id={Styles['container']}>
                {(showAlert.isShow ? <Alert alert={showAlert.alert} /> : '')}

                <form id={Styles['signup-form']}>
                    <input name='email' type='email' placeholder='Email' onChange={handleChange} />
                    <input name='password' type='password' placeholder='Password' onChange={handleChange} />
                    <input name='repassword' type='password' placeholder='Re-type Password' onChange={handleChange} />
                    {!isMatch ?
                        <div id={Styles['retype']}>
                            <p>Password doesn't match</p>
                        </div>
                        : ''}
                    <button id={Styles['signup-btn']} onClick={handleSignUp} disabled={(user.email == '' || !isMatch || user.password == '')}>SignUp</button>
                </form>

            </div>
    )
}

export default SignUp