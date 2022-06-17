import { Button, Col, Container } from 'react-bootstrap';

function Login() {
  return (
    <Container className='py-3'>
      {' '}
      <Button as={Col} variant='primary'>
        Button #1
      </Button>
      <h1>Ini adalah Login!</h1> <button>ini button</button>
    </Container>
  );
}

export default Login;
