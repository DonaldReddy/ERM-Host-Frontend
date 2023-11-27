import React from 'react'
import Styles from './Loader.module.css'

export default function Loader() {
  return (
    <div id={Styles['container']} >
      <div id={Styles['main']}>
        <div className={Styles['circle']}></div>
        <div className={Styles['circle']}></div>
      </div>
    </div>
  )
}
