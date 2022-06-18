import { Col, Container, Row } from 'react-bootstrap';
import heroImage from '../../assets/images/hero.png';
import { Link } from 'react-router-dom';
import './App.css';

function Login() {
  return (
    <Container className='py-5 my-3'>
      <Row className='align-items-center'>
        <Col md={6} xl={6} className='mx-auto'>
          <h1
            className='fw-bold'
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Let's Meet Up With
          </h1>
          <h1
            className='fw-bold'
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Your Reading Buddy !
          </h1>
          <form className='form-login'>
            <div className='form-group'>
              <label className='fw-semibold' htmlFor='exampleInputEmail1'>
                Email <span style={{ color: 'red' }}>*</span>{' '}
              </label>
              <input
                type='email'
                className='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
              />
            </div>

            <div className='form-group my-4'>
              <label className='fw-semibold' htmlFor='exampleInputPassword1'>
                Password
                <span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type='password'
                className='form-control'
                id='exampleInputPassword1'
              />
            </div>
            <Link to='/' className='btn btn-login px-4 py-2'>
              SIGN IN
            </Link>
          </form>
        </Col>
        <Col md={6} xl={6} className='mx-auto'>
          <img src={heroImage} className='img-fluid' alt='' />
        </Col>
      </Row>{' '}
      {/* <Button className='btn-login' as={Col} variant='primary'>
        Button #1
      </Button>
      <h1>Ini adalah Login!</h1> <button>ini button</button> */}
    </Container>
  );
}

export default Login;
