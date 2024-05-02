import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './../images/logo-no-background.png'

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg"  className='px-5' style={{boxShadow:'2px 2px 4px rgba(0, 0, 0, 0.2)'}}>
        <Navbar.Brand href="/"><img src={logo} alt="" style={{width:'150px'}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto my-4 my-md-1  fs-5 fw-semibold" style={{marginLeft:'35%'}}>
            <Nav.Link href="/" className="mx-3">Home</Nav.Link>
            <Nav.Link href="/Menu" className="mx-3">Menu</Nav.Link>
            <Nav.Link href="/About" className="mx-3">About</Nav.Link>
            <Nav.Link href="/Contact" className="mx-3">Contact</Nav.Link>
          </Nav>
          <Nav.Link href='/SignUp' className="d-lg-none" style={{marginLeft:'37%'}}>
            <Button >Sign Up</Button>
          </Nav.Link>
        </Navbar.Collapse>
        <Nav.Link href='/SignUp' className="d-none d-lg-flex" style={{marginLeft:'25%'}}>
          <Button  className='bg-warning border-0 px-4 mx-4 fw-semibold text-black' style={{fontSize:'18px'}}>Sign Up</Button>
        </Nav.Link>
    </Navbar>
  );
}

export default Header;
