import React from 'react'
import Styles from './Table.module.css'

function Table({ tableNumber = 0, isOccupied = false, totalBill = 0 }) {
    return (
        <div id={Styles['container']}>
            <div id={Styles['table-num']}>
                <h3>Table #{tableNumber}</h3>
            </div>
            <div id={Styles['table-status']}>
                <p>occupied : {isOccupied ? '🟢' : '🔴'}</p>
                <p>Total Bill : {totalBill} rs</p>
            </div>
        </div>
    )
}

export default Table