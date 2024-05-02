import React from 'react'
import img from './../images/yellow.jpg'
import img1 from './../images/pizza.webp'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='row ' style={{backgroundColor:'#FFF2B2',height:'100vh'}} >
       <div className='col-md-6' >
        <img src={img} alt="" className='d-none d-md-block w-100  rounded-end-5' style={{objectFit:'cover',height:'100vh'}}/>
       </div>
       <div className='col-md-6 text-center m-auto' >
         <div className='w-100 m-auto'>
          <h1 className='fw-bold ' style={{fontSize:'80px'}}>Sign Up</h1>
          <h6 className='py-2'>You have chance to create new account if you really want to .</h6>
         </div>
         <div className='py-3 w-75 m-auto text-start'>
            <div className='py-2'>
              <label htmlFor="" className='d-block py-2 fw-semibold'>User Name :</label>
              <input type="text" name='name' placeholder='Enter your user Name .... ' className='w-100 border-0 py-1 px-2 rounded ' />
            </div>
            <div  className='py-2'>
              <label htmlFor="" className='d-block py-2 fw-semibold'>Email :</label>
              <input type="text" name='email' placeholder='Enter your Email .... ' className='w-100 border-0 py-1 px-2 rounded '/>
            </div>
            <div className='py-2'>
              <label htmlFor="" className='d-block py-2 fw-semibold'>Password :</label>
              <input type="text" name='password' placeholder='Enter your Password .... 'className='w-100 border-0 py-1 px-2 rounded '/>
            </div>
            <div className='py-4'>
              <button className='w-100 border-0 rounded py-1 fw-semibold' style={{backgroundColor:'#FFC000'}}>Sign Up</button>
              <Link to='/Login'><p className='py-4 text-center w-100'>Already have an account?</p></Link>
            </div>
         </div>
       </div>
    </div>
  )
}
