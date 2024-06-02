import React, { useContext, useEffect, useState } from 'react'
import './loginPopup.css'
import cross from './../../images/cross_icon.png'
import { StoreContext } from '../context/StoreContext'
import axios from 'axios'

export default function LoginPopup({setShowLogin}) {
  const {setToken} =useContext(StoreContext)

  const [currState,setCurrState] = useState("Sign Up")
  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  })

  const onChangeHandler = (e) =>{
      const name = e.target.name 
      const value = e.target.value 
      setData({...data,[name]:value})
  }

  const onLogin = async (e) =>{
    e.preventDefault()
    let url = "http://localhost:5000"
    if(currState==="Login"){
      url += "/api/user/login"

    }else{
      url += "/api/user/register"
    }

    const response = await axios.post(url,data)

    if(response.data.success){
      setToken(response.data.token)
      localStorage.setItem("token",response.data.token)
      setShowLogin(false)
    }else{
      alert(response.data.message)
    }
  }

 
  return (
    <div className='login-popup'>
       <form className="login-popup-container" onSubmit={onLogin}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={()=>setShowLogin(false)} src={cross} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login"?<></>: <input type="text" name="name" onChange={onChangeHandler} value={data.name} placeholder='Your name' required/>}
           <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required/>
           <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required/>
        </div>
        <button type='submit'>{currState === "Sign Up" ? "Create Account" : "Login"}</button>

        <div className="login-popup-condition">
          <input type="checkbox" name="" id="" required/>
          <p>By continuing, i agree to the the terms of use & privacy policy.</p>
        </div>
        
        {currState==="Login" ? <p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p> :  <p>Already have an acount? <span onClick={()=>setCurrState("Login")}>Login here</span></p>}
       
       </form>
    </div>
  )
}
