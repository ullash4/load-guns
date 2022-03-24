import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import { FaShoppingCart } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";


const Header = ({cart}) => {
    return (
        <div>
             <Navbar bg="dark" variant="dark" className='ullash'>
    <Container>
    <Navbar.Brand href="#home" className='fs-3'>Gun Load</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home"> <AiFillHome className='fs-3'/> </Nav.Link>
      <Nav.Link href="#features"> <FaShoppingCart className='fs-3'/>{cart.length}</Nav.Link>
      <Nav.Link href="#pricing" > <FcAbout className='fs-3'/> </Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;

