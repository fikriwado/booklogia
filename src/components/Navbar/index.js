import React from 'react';
import logo from '../../BookLogia_logo.png';
import { Link } from 'react-router-dom';
import { Container, Navbar as NavbarBootstrap, Nav } from 'react-bootstrap';
import {Button} from 'react-bootstrap';

function Navbar() {
    return (
        <>
            <NavbarBootstrap bg="warning" variant="warning" expand="lg" >
                <Container>
                    <NavbarBootstrap.Brand href="/">
                        <img
                            alt=""
                            src={logo}
                            className="d-inline-block align-top"
                        />{' '}
                    </NavbarBootstrap.Brand>
                    <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
                    <NavbarBootstrap.Collapse id="basic-navbar-nav">
                        <Nav className="navbar-nav ms-auto ">
                            <Nav.Link>
                                <Link to="/" className="nav-link text-light">
                                    Home
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/forum" className="nav-link text-light px-5">
                                    Forum
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/tips" className="nav-link text-light">
                                    Tips
                                </Link>
                            </Nav.Link>
                        </Nav>
                        <Nav  className="ms-auto">
                        <Button className="px-4 mx-3 btn-warning btn-outline-light">
                           <Link to="/Login" className="nav-link text-light">Login</Link>
                        </Button>
                        
                        <p className="nav-link text-dark my-auto">or</p>

                        <Button className="px-4 mx-2 btn-danger">
                           <Link to="/Sign Up" className="nav-link text-light">Sign Up</Link>
                        </Button>
                        </Nav>
                    </NavbarBootstrap.Collapse>
                </Container>
            </NavbarBootstrap>
        </>
    );
}

export default Navbar;
