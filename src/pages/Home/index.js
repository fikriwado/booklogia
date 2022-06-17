import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import heroImage from "../../assets/images/hero.png";
import handsShowImage from "../../assets/images/hands-show.png";

function Home() {
    return (
        <>
            <section id='hero-section' className='py-5'>
                <Container className='py-5 my-3'>
                    <Row className='align-items-center'>
                        <Col xl={7}>
                            <h1 className='mb-4 fw-bold'>Anda Butuh Buku? <br /> Booklogia Solusinya</h1>
                            
                            <p className='w-75 lh-lg mb-4'>Platform ulasan buku yang menjadi tempat berkumpulnya para penggemar buku yang mencari bacaan baru untuk koleksinya maupun pembaca santai yang ingin mencari bacaan diwaktu senggang mereka.</p>

                            <Link to="/" className="btn btn-success text-white px-4 py-2 me-2">Get Started</Link>
                            <Link to="/" className="btn btn-danger text-white px-4 py-2">Reading</Link>
                            
                            <Row className='align-items-center pt-4 mt-5'>
                                <Col md="auto">
                                    <img src={handsShowImage} className="img-fluid" alt="" />
                                </Col>
                                <Col>
                                    <h3>Find Your <br /> Story.</h3>
                                    <hr className='w-25 border border-2 border-dark opacity-100 mt-4' />
                                </Col>
                            </Row>
                        </Col>
                        <Col xl={5}>
                            <img src={heroImage} className="img-fluid" alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>
            
            <section id='about-section' className='bg-light py-5'>
                <Container className='py-3'>
                    <h1>Ini adalah About Section!</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis perferendis voluptatem neque esse est laboriosam dolor dolore, dignissimos id nihil provident dicta incidunt, exercitationem explicabo doloribus asperiores excepturi sequi ipsa maxime assumenda eos sunt quidem molestias! Error harum magnam sapiente nihil hic optio, facilis illum animi recusandae illo enim cum porro voluptas quasi corporis autem sed ex fugit incidunt exercitationem quidem rerum doloribus et! Quae laboriosam error provident.</p>
                </Container>
            </section>
            
            <section id='popular-review-section' className='py-5'>
                <Container className='py-3'>
                    <h1>Ini adalah Popular Review Section!</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis perferendis voluptatem neque esse est laboriosam dolor dolore, dignissimos id nihil provident dicta incidunt, exercitationem explicabo doloribus asperiores excepturi sequi ipsa maxime assumenda eos sunt quidem molestias! Error harum magnam sapiente nihil hic optio, facilis illum animi recusandae illo enim cum porro voluptas quasi corporis autem sed ex fugit incidunt exercitationem quidem rerum doloribus et! Quae laboriosam error provident.</p>
                </Container>
            </section>
        </>
    );
}

export default Home;
