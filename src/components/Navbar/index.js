import React from 'react';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
import { Container, Navbar as NavbarBootstrap, Nav } from 'react-bootstrap';

function Navbar() {
  return (
    <>
      <NavbarBootstrap bg='dark' variant='dark' expand='lg'>
        <Container>
          <NavbarBootstrap.Brand href='/'>
            <img
              alt=''
              src={logo}
              width='30'
              height='30'
              className='d-inline-block align-top'
            />{' '}
            Booklogia
          </NavbarBootstrap.Brand>
          <NavbarBootstrap.Toggle aria-controls='basic-navbar-nav' />
          <NavbarBootstrap.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link>
                <Link to='/' className='nav-link'>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/about' className='nav-link'>
                  About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/forum' className='nav-link'>
                  Forum
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/login' className='nav-link'>
                  Login
                </Link>
              </Nav.Link>
            </Nav>
          </NavbarBootstrap.Collapse>
        </Container>
      </NavbarBootstrap>
    </>
  );
}

export default Navbar;
