import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import heroImage from '../../assets/images/hero.png';
import handsShowImage from '../../assets/images/hands-show.png';

const Hero = () => {
    return (
        <section id="hero-section" className="py-5 py-lg-5">
            <Container className="mt-lg-5">
                <Row className="align-items-center">
                    <Col lg={5} className="order-lg-2">
                        <img src={heroImage} className="img-fluid d-none d-lg-block" alt="" />
                        <img
                            src={heroImage}
                            className="img-fluid w-75 d-block d-lg-none mx-auto mb-4 mb-md-5"
                            alt=""
                        />
                    </Col>
                    <Col lg={7} className="order-lg-1">
                        <div className="text-center text-lg-start">
                            <h1 className="mb-4 fw-bold">
                                Anda Butuh Buku? <br /> Booklogia Solusinya
                            </h1>

                            <p className="w-75 lh-lg mb-4 mx-auto mx-lg-0">
                                Platform ulasan buku yang menjadi tempat berkumpulnya para penggemar
                                buku yang mencari bacaan baru untuk koleksinya maupun pembaca santai
                                yang ingin mencari bacaan diwaktu senggang mereka.
                            </p>

                            <Link to="/" className="btn btn-success text-white px-4 py-2 me-2">
                                Get Started
                            </Link>
                            <Link to="/" className="btn btn-danger text-white px-4 py-2">
                                Reading
                            </Link>
                        </div>

                        <Row className="justify-content-center justify-content-lg-start align-items-center pt-4 mt-3 mt-lg-5">
                            <Col xs="auto">
                                <img src={handsShowImage} className="img-fluid" alt="" />
                            </Col>
                            <Col xs="auto">
                                <h3>
                                    Find Your <br /> Story.
                                </h3>
                                <hr className="border border-2 border-dark opacity-100 mt-4" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
