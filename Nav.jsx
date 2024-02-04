import React from 'react'
import style from './Nav.module.css'

const Nav = () => {
  return (
    <div className={`${style.navdiv}`}>
        <div id={`${style.client}`}>
            <h4>PEARL <br /> CLIENT WORKSPACE</h4>
            <div id=''></div>
        </div>
    </div>
  )
}

export default Nav