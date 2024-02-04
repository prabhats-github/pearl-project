import React from 'react'
import style from './Contact.module.css'


const Contact = () => {
  return (
    <div className={`${style.d1}`}>
      <input id={`${style.inp1}`} type="text" placeholder='Email' />
      <input type="text" placeholder='Password' />
      <div><p>Show Password <i id={`${style.toggleon}`} class="fa-solid fa-toggle-on"></i></p>
      <p  id={style.forgot}> <i class="fa-solid fa-lock"></i>Forgot Password?</p>
      
      </div>
      <div id={`${style.login}`}>
        <p>LOG IN</p>
      </div>

      <p id={`${style.privacy}`}>
        Privacy | Cookies | Terms of Use
      </p>
      
    </div>
  )
}

export default Contact