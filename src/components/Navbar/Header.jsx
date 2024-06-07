import React, { useContext } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './../../images/logo-no-background.png'
import './Header.css'
import '../../assets/assets'
import { assets } from '../../assets/assets';
import './Header.css'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';



const Header = ({setShowLogin}) => {
  const {getTotalCartAmount ,token ,setToken} = useContext(StoreContext)
  const navigate = useNavigate()
  const logout = () =>{
    localStorage.removeItem("token")
    setToken("")
    navigate("/")
  }
  return (
    <Navbar collapseOnSelect expand="lg"  className='px-5' style={{boxShadow:'2px 2px 4px rgba(0, 0, 0, 0.2)'}}>
        <Link to="/"><Navbar.Brand><img src={logo} alt="" style={{width:'150px'}}/></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto my-4 my-md-1  fs-5 fw-semibold" style={{marginLeft:'35%'}}>
            <Nav.Link href="/" className="mx-4">Home</Nav.Link>
            <Nav.Link href="/Menu" className="mx-4">Menu</Nav.Link>
            <Nav.Link href="/About" className="mx-4" >App</Nav.Link>
            <Nav.Link href="/Contact" className="mx-4">Contact</Nav.Link>
          </Nav>
          <Nav.Link  className="d-lg-none" style={{marginLeft:'37%'}}>
            <Button  className='bg-warning border-0' >Sign Up</Button>
          </Nav.Link>
        </Navbar.Collapse>
       
        <Nav.Link className="d-none d-lg-flex" style={{marginLeft:'25%'}}>
          <div className='navbar-search-icon'>
             <Link to='/Cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        {!token?<Button onClick={()=>setShowLogin(true)}  className='bg-warning border-0 px-4 mx-4 fw-semibold text-black' style={{fontSize:'18px'}}>Sign Up</Button>:
        <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className='navbar-profile-dropdown'>
              <li onClick={()=>navigate('/myorders')} className='text-center'><img src={assets.bag_icon} alt="" /><p>orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>logout</p></li>
            </ul>
        </div>}
          
        </Nav.Link>
       
    </Navbar>
  );
}

export default Header;
