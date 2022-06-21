import React from 'react';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
import { Container, Navbar as NavbarBootstrap, Nav } from 'react-bootstrap';

function Navbar() {
  return (
    <>
      <NavbarBootstrap bg='warning' variant='light' expand='lg' className='py-3'>
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
                <Link to='/' className='nav-link ms-2 me-3'>
                  Home
                </Link>
                <Link to='/about' className='nav-link me-3'>
                  About
                </Link>
                <Link to='/forum' className='nav-link me-3'>
                  Forum
                </Link>
                <Link to='/login' className='nav-link me-3'>
                  Login
                </Link>
                <Link to='/register' className='nav-link'>
                  Register
                </Link>
            </Nav>
          </NavbarBootstrap.Collapse>
        </Container>
      </NavbarBootstrap>
    </>
  );
}

export default Navbar;
