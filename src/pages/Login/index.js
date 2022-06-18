import { Button, Col, Container, Row } from 'react-bootstrap';
import './App.css';

function Login() {
  return (
    <Container className='py-3'>
      <Row>
        <Col md={6} className='mx-auto'>
          <h1 style={{ fontFamily: "'Montserrat', sans-serif" }}>Login</h1>
          <form>
            <div className='form-group'>
              <label htmlFor='exampleInputEmail1'>Email address</label>
              <input
                type='email'
                className='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
                placeholder='Enter email'
              />
              <small id='emailHelp' className='form-text text-muted'>
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputPassword1'>Password</label>
              <input
                type='password'
                className='form-control'
                id='exampleInputPassword1'
                placeholder='Password'
              />
            </div>
            <Button type='submit' className='btn btn-primary'>
              Submit
            </Button>
          </form>
        </Col>
        <Col md={6} className='mx-auto'>
          <h1>Login</h1>
          <form>
            <div className='form-group'>
              <label htmlFor='exampleInputEmail1'>Email address</label>
              <input
                type='email'
                className='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
                placeholder='Enter email'
              />
              <small id='emailHelp' className='form-text text-muted'>
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputPassword1'>Password</label>
              <input
                type='password'
                className='form-control'
                id='exampleInputPassword1'
                placeholder='Password'
              />
            </div>
            <Button type='submit' className='btn btn-primary'>
              Submit
            </Button>
          </form>
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
