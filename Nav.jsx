import React from 'react'
import style from './Nav.module.css'

const Nav = () => {
  return (
    <div className={`${style.navdiv}`}>
     
        <div id={`${style.client}`}>
            <h4 id={`${style.h4}`}>PEARL <br /> CLIENT WORKSPACE</h4>
            
        </div>
        <div id={`${style.logos}`}>
        <a href="https://www.facebook.com/login/"><i class="fa-brands fa-facebook"></i></a>

        <a href="https://twitter.com/i/flow/login"><i  class="fa-brands fa-square-twitter"></i></a>
       <a href="https://www.linkedin.com/login"><i class="fa-brands fa-linkedin"></i></a> 
        <a href="https://in.pinterest.com/login/"><i class="fa-brands fa-pinterest"></i></a>
        <a href="https://www.youtube.com/"><i class="fa-brands fa-square-youtube"></i></a>
        </div>
        <p id={`${style.p1}`}>© 2024 Pearl Organisation All rights reserved.</p>
        <p id={`${style.trademark}`}>PEARL ORGANISATION <sup>TM</sup> is a registered trademark of VUNUM Infotech Solutions PVT. LTD. company.</p>
    </div>
  )
}

export default Nav