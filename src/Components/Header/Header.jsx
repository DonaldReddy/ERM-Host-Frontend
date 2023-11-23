import React from 'react'
import Styles from './Header.module.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className={Styles['nav-bar']}>

            <div id={Styles['logo']}>
                <Link to=''>
                    <p>
                        ERM
                    </p>
                </Link>
            </div>

            <ul className={Styles['nav-options']}>

                <li><Link to='/login' >Login</Link></li>
                <li><Link to='/signup'>SignUp</Link></li>

            </ul>

        </div>
    )
}

export default Header