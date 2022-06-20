import { Col, Container, Row } from 'react-bootstrap';
import heroImage from '../../assets/images/hero.png';
import iconlinkedin from '../../assets/images/Lingkedin Icon.svg';
import icongoogle from '../../assets/images/Google Icon.svg';
import iconfb from '../../assets/images/Facebook Icon.svg';
import icongithub from '../../assets/images/Github Icon.svg';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <Container className='py-5 my-3'>
      <Row className='align-items-center'>
        <Col md={6} xl={6} className='mx-auto'>
          <h1 className='fw-bold font-poppins'>
            Let's Meet Up With
          </h1>
          <h1 className='fw-bold font-poppins'>
            Your Reading Buddy !
          </h1>
          <form className='form-login'>
            <div className='form-group'>
              <label className='fw-semibold' htmlFor='exampleInputEmail1'>
                Email <span className='text-danger'>*</span>{' '}
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
                Password <span className='text-danger'>*</span>
              </label>
              <input
                type='password'
                className='form-control'
                id='exampleInputPassword1'
              />
            </div>
            <Link to='/' className='btn btn-danger text-white px-4 py-2'>
              SIGN IN
            </Link>
          </form>
          <div className='sign-option my-5'>
            <h6 className='fw-bold'>Or sign in using :</h6>
            <div className='icon-sign-option my-3'>
              <img src={iconlinkedin} className='icon-option mx-2' alt=''></img>
              <img src={icongoogle} className='icon-option mx-2' alt=''></img>
              <img src={iconfb} className='icon-option mx-2' alt=''></img>
              <img src={icongithub} className='icon-option mx-2' alt=''></img>
            </div>
          </div>
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
