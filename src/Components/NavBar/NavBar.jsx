import React from "react";
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";


const NavBar = () =>{

    const categories = ['Audio', 'TV', 'Tablets', 'Smartwatch'];

    return (
        <Navbar bg="white" expand="lg" className="shadow-sm p-4">
      <Container>
        <Navbar.Brand href="#"><Logo/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        
        <Nav className="ms-auto">
            <Nav.Link href="#">Inicio</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown" className="me-5">
                
                {categories.map((category) => {
                    return <NavDropdown.Item href="#">{category}</NavDropdown.Item>
                })}

            </NavDropdown>
        </Nav>

        <CartWidget/>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavBar;