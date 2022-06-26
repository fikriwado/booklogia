import logo from '../../assets/images/logo-text.png';
import { Link } from 'react-router-dom';
import { Container, Navbar as NavbarBootstrap, Nav, Button } from 'react-bootstrap';

function Navbar() {
  return (
    <>
      <NavbarBootstrap bg='warning' variant='light' expand='lg' className='py-3'>
        <Container>
          <NavbarBootstrap.Brand href='/'>
            <img
              alt=''
              src={logo}
              height='30'
              className=''
            />{' '}
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
                <Link to='/tips' className='nav-link me-3'>
                  Tips
                </Link>
                <Link to='/forum' className='nav-link me-3'>
                  Forum
                </Link>
            </Nav>
            <Nav>
              <Link to='/login' className='me-2'>
                <Button variant='outline-light' className='px-4 py-2'>
                Login
                </Button>
              </Link>

              <span className='nav-link me-2'>or</span>

              <Link to='/register'>
                <Button variant='orange' className='px-4 py-2 text-light'>
                Register
                </Button>
              </Link>
            </Nav>
          </NavbarBootstrap.Collapse>
        </Container>
      </NavbarBootstrap>
    </>
  );
}

export default Navbar;
