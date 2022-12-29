import React from "react";
import { Link } from "react-router-dom";
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";

const NavBar = ({categories}) =>{

    return (
    <Navbar bg="white" expand="lg" className="shadow-sm p-4">
      <Container>
      <Link to={'/'}><Navbar.Brand><Logo/></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        
        <Nav className="ms-auto">
            <Link to={'/'} className="text-decoration-none"><Nav.Link as="span">Inicio</Nav.Link></Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown" className="me-5">
                
                {categories.map((category) => {
                    
                    return(
                    <Link to={`/category/${category.id}`} className="text-decoration-none" key={category.id}>
                      <NavDropdown.Item as="span">{category.nombre}</NavDropdown.Item>
                    </Link>
                    )

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