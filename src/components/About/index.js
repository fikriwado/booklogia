import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import aboutImage from '../../assets/images/about.png';
import aboutPhotosImage from '../../assets/images/about-photos.png';

const About = () => {
    return (
        <section id="about-section" className="py-4 py-lg-5">
            <Container className="py-lg-3">
                <Row className="align-items-center">
                    <Col lg={5}>
                        <img src={aboutImage} className="img-fluid d-none d-lg-block" alt="" />
                        <img
                            src={aboutImage}
                            className="img-fluid w-75 d-block d-lg-none mx-auto mb-4 mb-md-5"
                            alt=""
                        />
                    </Col>
                    <Col lg={7} className="ps-lg-5">
                        <div className="text-center text-lg-start ms-lg-5">
                            <h1 className="mb-4 fw-bold">
                                Mengenal tentang Booklogia <br /> lebih dalam yuk!
                            </h1>

                            <p className="w-75 lh-lg mb-4 mx-auto mx-lg-0">
                                Kamu ingin mencari bacaan menarik? bingung ini memilih cerita
                                seperti apa? lagi malas membaca tapi ingin tau seperti apa
                                ceritanya? Booklogi bisa membantumu.
                            </p>

                            <div className="my-4">
                                <img src={aboutPhotosImage} className="img-fluid" alt="" />
                            </div>

                            <Link to="/register" className="btn btn-success text-white px-4 py-2">
                                Get Started
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
