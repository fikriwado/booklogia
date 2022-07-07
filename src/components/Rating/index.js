import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import profileRating1 from '../../assets/images/rating-section/1.png';
import profileRating2 from '../../assets/images/rating-section/2.png';
import profileRating3 from '../../assets/images/rating-section/3.png';

const Rating = () => {
    return (
        <section id="rating-section" className="py-4 py-lg-5">
            <Container className="pt-lg-3 pb-lg-5 text-center">
                <Row className="mb-lg-4">
                    <Col>
                        <h1 className="mb-3 fw-bold">Tanggapan Pembaca</h1>
                        <p>
                            Masih ragu untuk bergabung ? <br /> Berikut tanggapan orang-orang yang
                            sudah bergabung di Booklogia :
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col lg={4} className="mb-3 mb-lg-0">
                        <Card className="rounded-0 bg-light border-light h-100 py-3">
                            <Card.Body>
                                <img src={profileRating1} className="img-fluid mb-3" alt="" />

                                <Card.Text className="fw-bold mb-2">Cristiano Ronaldo</Card.Text>

                                <div className="mb-2">
                                    <i className="fas fa-star text-warning"></i>
                                    <i className="fas fa-star text-warning"></i>
                                    <i className="fas fa-star text-warning"></i>
                                    <i className="fas fa-star text-warning"></i>
                                    <i className="fas fa-star text-warning"></i>
                                </div>

                                <Card.Text>
                                    Web ini sungguh menarik, aku bisa tahu buku-buku menarik setelah
                                    mengetahui ulasan dari para pengguna lain dan web ini sangat
                                    bermanfaat.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} className="mb-3 mb-lg-0">
                        <Card className="rounded-0 bg-light border-light h-100 py-3">
                            <Card.Body>
                                <img src={profileRating2} className="img-fluid mb-3" alt="" />

                                <Card.Text className="fw-bold mb-2">Ainsley Amanda</Card.Text>

                                <div className="mb-2">
                                    <i className="fas fa-star text-warning"></i>
                                    <i className="fas fa-star text-warning"></i>
                                    <i className="fas fa-star text-warning"></i>
                                    <i className="fas fa-star text-warning"></i>
                                    <i className="fas fa-star text-warning"></i>
                                </div>

                                <Card.Text>
                                    Aku sangat suka novel romance yang happy ending, ulasan
                                    orang-orang sangat membantuku mencari novel yang aku suka.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} className="mb-3 mb-lg-0">
                        <Card className="rounded-0 bg-light border-light h-100 py-3">
                            <Card.Body>
                                <img src={profileRating3} className="img-fluid mb-3" alt="" />

                                <Card.Text className="fw-bold mb-2">Agatha Yuda</Card.Text>

                                <div className="mb-2">
                                    <i className="fas fa-star text-warning"></i>
                                    <i className="fas fa-star text-warning"></i>
                                    <i className="fas fa-star text-warning"></i>
                                    <i className="fas fa-star text-warning"></i>
                                    <i className="fas fa-star text-warning"></i>
                                </div>

                                <Card.Text>
                                    Orang-orang disini sangat supportive, mereka dengan senang hati
                                    memberikan rekomendasi buku yang menarik.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Rating;
