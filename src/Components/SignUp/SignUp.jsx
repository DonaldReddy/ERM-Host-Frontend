import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'
import Loader from '../Loader/Loader.jsx'
import LoaderContext from '../../Context/LoaderContext/LoaderContext.js'
import Styles from './SignUp.module.css'

function SignUp() {

    const [user, setUser] = useState({ email: '', password: '', repassword: '' })
    const [isMatch, setIsMatch] = useState(true)
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

    async function handleSignUp(event) {
        event.preventDefault()
        setIsLoading(true)
        const response = await axios.post("http://192.168.1.109:8000/signup", user, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        if (!response.data.status)
            console.log(response.data.error);
        else
            console.log('successfully signed up');
        setIsLoading(false)
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