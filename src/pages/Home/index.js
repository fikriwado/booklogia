import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import heroImage from '../../assets/images/hero.png';
import aboutImage from '../../assets/images/about.png';
import aboutPhotosImage from '../../assets/images/about-photos.png';
import handsShowImage from '../../assets/images/hands-show.png';

function Home() {
    return (
        <div className='home-page'>
            <section id='hero-section' className='py-lg-5'>
                <Container className='py-5 my-lg-3'>
                    <Row className='align-items-center'>
                        <Col lg={5} className='order-lg-2'>
                            <img src={heroImage} className='img-fluid d-none d-lg-block' alt='' />
                            <img src={heroImage} className='img-fluid w-75 d-block d-lg-none mx-auto mb-4 mb-md-5' alt='' />
                        </Col>
                        <Col lg={7} className='order-lg-1'>
                            <div className='text-center text-lg-start'>
                                <h1 className='mb-4 fw-bold'>Anda Butuh Buku? <br /> Booklogia Solusinya</h1>
                                
                                <p className='w-75 lh-lg mb-4 mx-auto mx-lg-0'>Platform ulasan buku yang menjadi tempat berkumpulnya para penggemar buku yang mencari bacaan baru untuk koleksinya maupun pembaca santai yang ingin mencari bacaan diwaktu senggang mereka.</p>

                                <Link to='/' className='btn btn-success text-white px-4 py-2 me-2'>Get Started</Link>
                                <Link to='/' className='btn btn-danger text-white px-4 py-2'>Reading</Link>
                            </div>
                            
                            <Row className='justify-content-center justify-content-lg-start align-items-center pt-4 mt-5'>
                                <Col xs='auto'>
                                    <img src={handsShowImage} className='img-fluid' alt='' />
                                </Col>
                                <Col xs='auto'>
                                    <h3>Find Your <br /> Story.</h3>
                                    <hr className='border border-2 border-dark opacity-100 mt-4' />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            
            <section id='about-section' className='py-lg-5'>
                <Container className='py-lg-3'>
                    <Row className='align-items-center'>
                        <Col lg={5}>
                            <img src={aboutImage} className='img-fluid d-none d-lg-block' alt='' />
                            <img src={aboutImage} className='img-fluid w-75 d-block d-lg-none mx-auto mb-4 mb-md-5' alt='' />
                        </Col>
                        <Col lg={7} className='ps-lg-5'>
                            <div className='text-center text-lg-start ms-lg-5'>
                                <h1 className='mb-4 fw-bold'>Mengenal tentang Booklogia <br /> lebih dalam yuk!</h1>
                                
                                <p className='w-75 lh-lg mb-4 mx-auto mx-lg-0'>Kamu ingin mencari bacaan menarik? bingung ini memilih cerita seperti apa? lagi malas membaca tapi ingin tau seperti apa ceritanya? Booklogi bisa membantumu.</p>

                                <div className='my-4'>
                                    <img src={aboutPhotosImage} className='img-fluid' alt='' />
                                </div>

                                <Link to='/' className='btn btn-success text-white px-4 py-2'>Get Started</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            
            <section id='popular-review-section' className='py-lg-5'>
                <Container className='py-lg-3 text-center'>
                    <Tabs variant='pills' defaultActiveKey="news" className="d-inline-flex p-3 mb-3 tab-pills-booklogia">
                        <Tab eventKey="news" title="News" className='text-start'>
                            jkasndjksa
                        </Tab>
                        <Tab eventKey="popular" title="Popular" className='text-start'>
                            sadsad
                        </Tab>
                        <Tab eventKey="old" title="Old" className='text-start'>
                            xzcdsas
                        </Tab>
                    </Tabs>
                </Container>
            </section>
        </div>
    );
}

export default Home;
