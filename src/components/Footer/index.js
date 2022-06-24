import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../assets/images/logo-1.png';

function Footer() {
  return (
    <footer className='bg-dark text-light py-5'>
      <Container>
        <Row>
          <Col md={3}>
            <h5 className='text-uppercase mb-4 font-weight-bold'>
              Company name
            </h5>
            <img className='d-block mb-4 mx-auto' src={logo} alt=' ' />
          </Col>

          <hr className='w-100 bg-secondary d-md-none' />

          <Col md={3} className='ps-xl-5'>
            <h5 className='text-uppercase mb-4 font-weight-bold'>Popular</h5>
            <ul className='list-unstyled'>
              <li className='mb-3'>
                <a href='#' className='text-light text-decoration-none'>
                  Becoming by Michelle Obama
                </a>
              </li>
              <li className='mb-3'>
                <a href='#' className='text-light text-decoration-none'>
                  Dear Tomorrow
                </a>
              </li>
              <li className='mb-3'>
                <a href='#' className='text-light text-decoration-none'>
                  Merdeka Sejak Hati
                </a>
              </li>
              <li className='mb-3'>
                <a href='#' className='text-light text-decoration-none'>
                  A Wrinkle in Time
                </a>
              </li>
            </ul>
          </Col>

          <hr className='w-100 bg-secondary d-md-none' />

          <Col md={3} className='pe-xl-5'>
            <h5 className='text-uppercase mb-4 font-weight-bold'>About</h5>
            <p>
              Buku sering disebut sebagai jendela dunia karena dengan membaca
              buku kita dapat mengetahui apa saja yang ada di dunia ini baik
              dimasa sekarang bahkan dimasa lampau, kuncinya hanyalah membaca.
            </p>
          </Col>

          <hr className='w-100 bg-secondary d-md-none' />

          <Col md={3} className='ps-xl-4'>
            <h5 className='text-uppercase mb-4 font-weight-bold'>Contact</h5>
            <ul className='list-unstyled'>
              <li className='mb-3'>
                <a href='#' className='text-light text-decoration-none'>
                  <i className='fas fa-home mr-3 text-white'></i>{' '}
                  <span>Indonesia</span>
                </a>
              </li>
              <li className='mb-3'>
                <a href='#' className='text-light text-decoration-none'>
                  <i className='fas fa-envelope mr-3 text-white'></i>{' '}
                  <span className=' m-lg-1'> booklogia@gmail.com </span>
                </a>
              </li>
              <li className='mb-3'>
                <a href='#' className='text-light text-decoration-none'>
                  <i className='fas fa-phone mr-3 text-white'></i>{' '}
                  <span className=' m-lg-1'> +6282131715623 </span>
                </a>
              </li>
              <li className='mb-3'>
                <form action='#' className='subscribe'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter your e-mail'
                  />

                  <input
                    type='submit'
                    className='btn btn-submits text-white'
                    value='Send'
                  />
                </form>
              </li>
            </ul>
          </Col>
        </Row>

        <hr className='my-3 bg-secondary' />

        <Row className='align-items-center'>
          <Col md={6} className='text-center text-md-start'>
            <span>&copy; 2022 Copyright:</span>
            <a
              className='text-white text-decoration-none'
              href='https://google.com/'
            >
              BookLogia
            </a>
          </Col>

          <Col md={6} className='text-center text-md-end'>
            <a
              className='btn m-1 text-white'
              role='button'
              href='https://www.instagram.com/'
            >
              <i className='fab fa-instagram  icon-media-footer'></i>
            </a>

            <a
              className='btn m-1 text-white'
              role='button'
              href='https://www.facebook.com/'
            >
              <i className='fab fa-facebook-f icon-media-footer'></i>
            </a>

            <a
              className='btn m-1 text-white'
              role='button'
              href='https://twitter.com/'
            >
              <i className='fab fa-twitter icon-media-footer'></i>
            </a>

            <a
              className='btn m-1 text-white'
              role='button'
              href='https://google.com/'
            >
              <i className='fab fa-google icon-media-footer'></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
