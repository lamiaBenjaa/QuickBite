import React, { useState } from 'react'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Header from './components/Navbar/Header'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Verify from './pages/verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'

export default function App() {
  const [showLogin,setShowLogin] = useState(false)
  return (
    <BrowserRouter>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin}/>:<></>}
       <Header setShowLogin={setShowLogin}/>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/Menu' element={<Menu/>}/>
         <Route path='/About' element={<About/>}/>
         <Route path='/Contact' element={<Contact/>}/>
         <Route path='/Cart' element={<Cart/>}/>
         <Route path='/Order' element={<PlaceOrder/>}/>
         <Route path='/verify' element={<Verify/>}/>
         <Route path='/myorders' element={<MyOrders/>}/>
         {/* <Route path='/SignUp' element={<SignUp/>}/> */}
       </Routes>
       <Footer/>
    </BrowserRouter>
  )
}
