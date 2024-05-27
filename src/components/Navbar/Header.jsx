import React, { useContext } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './../../images/logo-no-background.png'
import './Header.css'
import '../../assets/assets'
import { assets } from '../../assets/assets';
import './Header.css'
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';



const Header = ({setShowLogin}) => {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <Navbar collapseOnSelect expand="lg"  className='px-5' style={{boxShadow:'2px 2px 4px rgba(0, 0, 0, 0.2)'}}>
        <Link to="/"><Navbar.Brand><img src={logo} alt="" style={{width:'150px'}}/></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto my-4 my-md-1  fs-5 fw-semibold" style={{marginLeft:'35%'}}>
            <Link to='/'><Nav.Link href="/" className="mx-3">Home</Nav.Link></Link>
            <a href="#explore-menu"><Nav.Link href="/Menu" className="mx-3">Menu</Nav.Link></a>
            <a href="app-download"><Nav.Link href="/About" className="mx-3">App</Nav.Link></a>
            <a href="#footer"><Nav.Link href="/Contact" className="mx-3">Contact</Nav.Link></a>
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
          <Button onClick={()=>setShowLogin(true)}  className='bg-warning border-0 px-4 mx-4 fw-semibold text-black' style={{fontSize:'18px'}}>Sign Up</Button>
        </Nav.Link>
       
    </Navbar>
  );
}

export default Header;
