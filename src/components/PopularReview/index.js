import React from 'react';
import { Container, Row, Col, Tabs, Tab, Card } from 'react-bootstrap';
import popularReview1 from '../../assets/images/popular-review/1.png';
import popularReview2 from '../../assets/images/popular-review/2.png';
import popularReview3 from '../../assets/images/popular-review/3.png';
import Slider from 'react-slick';

const PopularReview = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 600,
                settings: 'unslick'
            },
            {
                breakpoint: 480,
                settings: 'unslick'
            }
        ]
    };

    return (
        <section id="popular-review-section" className="py-4 pt-lg-5">
            <Container className="py-lg-3 text-center">
                <Row className="mb-lg-4">
                    <Col>
                        <h1 className="mb-3 fw-bold">Bacaan Populer</h1>
                        <p>Berbagai bacaan yang sedang ramai dibaca dapat kamu akses disini.</p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Tabs
                            variant="pills"
                            defaultActiveKey="news"
                            className="d-inline-flex p-3 mb-4 mb-lg-5 tab-pills-booklogia">
                            <Tab eventKey="news" title="News" className="text-start">
                                <Slider {...settings}>
                                    <Card className="rounded-0 bg-light border-light h-100">
                                        <Card.Img
                                            className="rounded-0"
                                            variant="top"
                                            src={popularReview1}
                                        />
                                        <Card.Body>
                                            <Card.Title
                                                className="text-capitalize"
                                                style={{ lineHeight: 1.6 }}>
                                                6 Tips membaca buku
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>

                                    <Card className="rounded-0 bg-light border-light h-100">
                                        <Card.Img
                                            className="rounded-0"
                                            variant="top"
                                            src={popularReview2}
                                        />
                                        <Card.Body>
                                            <Card.Title
                                                className="text-capitalize"
                                                style={{ lineHeight: 1.6 }}>
                                                Ingin memulai membaca buku, lakukan hal berikut!
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>

                                    <Card className="rounded-0 bg-light border-light h-100">
                                        <Card.Img
                                            className="rounded-0"
                                            variant="top"
                                            src={popularReview3}
                                        />
                                        <Card.Body>
                                            <Card.Title
                                                className="text-capitalize"
                                                style={{ lineHeight: 1.6 }}>
                                                Buku bacaan ringan bagi sang pemula
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>

                                    <Card className="rounded-0 bg-light border-light h-100">
                                        <Card.Img
                                            className="rounded-0"
                                            variant="top"
                                            src={popularReview2}
                                        />
                                        <Card.Body>
                                            <Card.Title
                                                className="text-capitalize"
                                                style={{ lineHeight: 1.6 }}>
                                                Buku bacaan ringan bagi sang pemula
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>

                                    <Card className="rounded-0 bg-light border-light h-100">
                                        <Card.Img
                                            className="rounded-0"
                                            variant="top"
                                            src={popularReview3}
                                        />
                                        <Card.Body>
                                            <Card.Title
                                                className="text-capitalize"
                                                style={{ lineHeight: 1.6 }}>
                                                Buku bacaan ringan bagi sang pemula
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>

                                    <Card className="rounded-0 bg-light border-light h-100">
                                        <Card.Img
                                            className="rounded-0"
                                            variant="top"
                                            src={popularReview1}
                                        />
                                        <Card.Body>
                                            <Card.Title
                                                className="text-capitalize"
                                                style={{ lineHeight: 1.6 }}>
                                                Buku bacaan ringan bagi sang pemula
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Slider>
                            </Tab>

                            <Tab eventKey="popular" title="Popular" className="text-start">
                                <Slider {...settings}>
                                    <Card className="rounded-0 bg-light border-light h-100">
                                        <Card.Img
                                            className="rounded-0"
                                            variant="top"
                                            src={popularReview3}
                                        />
                                        <Card.Body>
                                            <Card.Title
                                                className="text-capitalize"
                                                style={{ lineHeight: 1.6 }}>
                                                Buku bacaan ringan bagi sang pemula
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>

                                    <Card className="rounded-0 bg-light border-light h-100">
                                        <Card.Img
                                            className="rounded-0"
                                            variant="top"
                                            src={popularReview1}
                                        />
                                        <Card.Body>
                                            <Card.Title
                                                className="text-capitalize"
                                                style={{ lineHeight: 1.6 }}>
                                                6 Tips membaca buku
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>

                                    <Card className="rounded-0 bg-light border-light h-100">
                                        <Card.Img
                                            className="rounded-0"
                                            variant="top"
                                            src={popularReview2}
                                        />
                                        <Card.Body>
                                            <Card.Title
                                                className="text-capitalize"
                                                style={{ lineHeight: 1.6 }}>
                                                Ingin memulai membaca buku, lakukan hal berikut!
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>

                                    <Card className="rounded-0 bg-light border-light h-100">
                                        <Card.Img
                                            className="rounded-0"
                                            variant="top"
                                            src={popularReview2}
                                        />
                                        <Card.Body>
                                            <Card.Title
                                                className="text-capitalize"
                                                style={{ lineHeight: 1.6 }}>
                                                Buku bacaan ringan bagi sang pemula
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>

                                    <Card className="rounded-0 bg-light border-light h-100">
                                        <Card.Img
                                            className="rounded-0"
                                            variant="top"
                                            src={popularReview3}
                                        />
                                        <Card.Body>
                                            <Card.Title
                                                className="text-capitalize"
                                                style={{ lineHeight: 1.6 }}>
                                                Buku bacaan ringan bagi sang pemula
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>

                                    <Card className="rounded-0 bg-light border-light h-100">
                                        <Card.Img
                                            className="rounded-0"
                                            variant="top"
                                            src={popularReview1}
                                        />
                                        <Card.Body>
                                            <Card.Title
                                                className="text-capitalize"
                                                style={{ lineHeight: 1.6 }}>
                                                Buku bacaan ringan bagi sang pemula
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Slider>
                            </Tab>

                            <Tab eventKey="old" title="Old" className="text-start">
                                <Slider {...settings}>
                                    <Card className="rounded-0 bg-light border-light h-100">
                                        <Card.Img
                                            className="rounded-0"
                                            variant="top"
                                            src={popularReview2}
                                        />
                                        <Card.Body>
                                            <Card.Title
                                                className="text-capitalize"
                                                style={{ lineHeight: 1.6 }}>
                                                Ingin memulai membaca buku, lakukan hal berikut!
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>

                                    <Card className="rounded-0 bg-light border-light h-100">
                                        <Card.Img
                                            className="rounded-0"
                                            variant="top"
                                            src={popularReview1}
                                        />
                                        <Card.Body>
                                            <Card.Title
                                                className="text-capitalize"
                                                style={{ lineHeight: 1.6 }}>
                                                6 Tips membaca buku
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>

                                    <Card className="rounded-0 bg-light border-light h-100">
                                        <Card.Img
                                            className="rounded-0"
                                            variant="top"
                                            src={popularReview3}
                                        />
                                        <Card.Body>
                                            <Card.Title
                                                className="text-capitalize"
                                                style={{ lineHeight: 1.6 }}>
                                                Buku bacaan ringan bagi sang pemula
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>

                                    <Card className="rounded-0 bg-light border-light h-100">
                                        <Card.Img
                                            className="rounded-0"
                                            variant="top"
                                            src={popularReview2}
                                        />
                                        <Card.Body>
                                            <Card.Title
                                                className="text-capitalize"
                                                style={{ lineHeight: 1.6 }}>
                                                Buku bacaan ringan bagi sang pemula
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>

                                    <Card className="rounded-0 bg-light border-light h-100">
                                        <Card.Img
                                            className="rounded-0"
                                            variant="top"
                                            src={popularReview3}
                                        />
                                        <Card.Body>
                                            <Card.Title
                                                className="text-capitalize"
                                                style={{ lineHeight: 1.6 }}>
                                                Buku bacaan ringan bagi sang pemula
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>

                                    <Card className="rounded-0 bg-light border-light h-100">
                                        <Card.Img
                                            className="rounded-0"
                                            variant="top"
                                            src={popularReview1}
                                        />
                                        <Card.Body>
                                            <Card.Title
                                                className="text-capitalize"
                                                style={{ lineHeight: 1.6 }}>
                                                Buku bacaan ringan bagi sang pemula
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Slider>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default PopularReview;
