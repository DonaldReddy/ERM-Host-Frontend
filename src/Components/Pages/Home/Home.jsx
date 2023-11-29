import React from 'react'
import Styles from './Home.module.css'
import { Link } from 'react-router-dom'
import Table from '../../Table/Table.jsx'

function Home() {

    function click() {
        console.log("clicked");
    }


    return (
        <div id={Styles['container']}>
            <div id={Styles['main']}>
                <h1 id={Styles['name']}>
                    Restaurant Name
                </h1>
                <ul id={Styles['options']}>
                    <li>
                        <Link>
                            Waiters
                        </Link>
                    </li>
                    <li>
                        <Link>
                            Tables
                        </Link>
                    </li>
                    <li>
                        <p>Take Orders</p>
                        <input id={Styles['checkbox']} type='checkbox' />
                        <label id={Styles['checkbox-label']} htmlFor={Styles['checkbox']} onClick={click} />
                    </li>
                </ul>
                <div id={Styles['tables']}>
                    <Table />
                    <Table />
                    <Table />
                    <Table />
                    <Table />
                </div>
            </div>
        </div>
    )
}

export default Home