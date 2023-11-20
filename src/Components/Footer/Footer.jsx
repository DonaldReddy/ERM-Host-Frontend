import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './Footer.module.css'

function Footer() {
    return (
        <div className={Styles['footer']}>

            <div className={Styles['logo']}>
                <p>
                    ERM
                </p>
            </div>

            <div className={Styles['footer-options']}>

                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signup'>Singup</Link></li>
                    <li><Link to='/contact'>Contact us</Link></li>
                </ul>

            </div>

            <p id={Styles['copy-rights']}>
                {'© ' + new Date().getFullYear()}
            </p>

        </div>

    )
}

export default Footer