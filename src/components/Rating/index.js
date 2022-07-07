import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ratingsData from '../../utils/ratings.json';

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
                    {ratingsData.map((rating) => (
                        <Col lg={4} className="mb-3 mb-lg-0" key={rating.id}>
                            <Card className="rounded-0 bg-light border-light h-100 py-3">
                                <Card.Body>
                                    <img
                                        src={
                                            window.location.origin +
                                            '/assets/images/ratings/' +
                                            rating.foto
                                        }
                                        className="img-fluid mb-3"
                                        alt=""
                                    />

                                    <Card.Text className="fw-bold mb-2">{rating.nama}</Card.Text>

                                    <div className="mb-2">
                                        {Array.from(Array(rating.bintang), (e, i) => {
                                            return (
                                                <i className="fas fa-star text-warning" key={i}></i>
                                            );
                                        })}
                                    </div>

                                    <Card.Text>{rating.penilaian}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Rating;
