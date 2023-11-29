import React from 'react'
import Styles from './Alert.module.css'

function Alert({ alert }) {
    return (
        <div id={Styles['alert']}>
            <p>{alert}</p>
            <div id={Styles['alert-status']}></div>
        </div>
    )
}

export default Alert