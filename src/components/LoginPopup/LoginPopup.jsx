import React, { useState } from 'react'
import './loginPopup.css'
import cross from './../../images/cross_icon.png'

export default function LoginPopup({setShowLogin}) {

  const [currState,setCurrState] = useState("Sign Up")
  return (
    <div className='login-popup'>
       <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={()=>setShowLogin(false)} src={cross} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login"?<></>: <input type="text" name="" id="" placeholder='Your name' required/>}
           <input type="email" placeholder='Your email' required/>
           <input type="password" placeholder='Password' required/>
        </div>
        <button >{currState === "Sign Up" ? "Create Account" : "Login"}</button>

        <div className="login-popup-condition">
          <input type="checkbox" name="" id="" required/>
          <p>By continuing, i agree to the the terms of use & privacy policy.</p>
        </div>
        
        {currState==="Login" ? <p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p> :  <p>Already have an acount? <span onClick={()=>setCurrState("Login")}>Login here</span></p>}
       
       </form>
    </div>
  )
}
