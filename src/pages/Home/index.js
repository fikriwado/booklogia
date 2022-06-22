import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Tabs, Tab, Card } from 'react-bootstrap';
import heroImage from '../../assets/images/hero.png';
import aboutImage from '../../assets/images/about.png';
import aboutPhotosImage from '../../assets/images/about-photos.png';
import handsShowImage from '../../assets/images/hands-show.png';
import popularReview1 from '../../assets/images/popular-review/1.png';
import popularReview2 from '../../assets/images/popular-review/2.png';
import popularReview3 from '../../assets/images/popular-review/3.png';
import profileRating1 from '../../assets/images/rating-section/1.png';
import profileRating2 from '../../assets/images/rating-section/2.png';
import profileRating3 from '../../assets/images/rating-section/3.png';
import Slider from "react-slick";

function Home() {
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
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
          ]
    };

    return (
        <div className='home-page'>
            <section id='hero-section' className='py-5 py-lg-5'>
                <Container className='mt-lg-5'>
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
                            
                            <Row className='justify-content-center justify-content-lg-start align-items-center pt-4 mt-3 mt-lg-5'>
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
            
            <section id='about-section' className='py-4 py-lg-5'>
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
            
            <section id='popular-review-section' className='py-4 pt-lg-5'>
                <Container className='py-lg-3 text-center'>
                    <Row className='mb-lg-4'>
                        <Col>
                            <h1 className='mb-3 fw-bold'>Bacaan Populer</h1>
                            <p>Berbagai bacaan yang sedang ramai dibaca dapat kamu akses disini.</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col className='px-0'>
                            <Tabs variant='pills' defaultActiveKey="news" className="d-inline-flex p-3 mb-4 mb-lg-5 tab-pills-booklogia">
                                <Tab eventKey="news" title="News" className='text-start'>
                                    <Slider {...settings}>
                                        <Card className='rounded-0 bg-light border-light h-100'>
                                            <Card.Img className='rounded-0' variant="top" src={popularReview1} />
                                            <Card.Body>
                                                <Card.Title className='text-capitalize' style={{ lineHeight: 1.6 }}>6 Tips membaca buku</Card.Title>
                                            </Card.Body>
                                        </Card>
                                        
                                        <Card className='rounded-0 bg-light border-light h-100'>
                                            <Card.Img className='rounded-0' variant="top" src={popularReview2} />
                                            <Card.Body>
                                                <Card.Title className='text-capitalize' style={{ lineHeight: 1.6 }}>Ingin memulai membaca buku, lakukan hal berikut!</Card.Title>
                                            </Card.Body>
                                        </Card>
                                        
                                        <Card className='rounded-0 bg-light border-light h-100'>
                                            <Card.Img className='rounded-0' variant="top" src={popularReview3} />
                                            <Card.Body>
                                                <Card.Title className='text-capitalize' style={{ lineHeight: 1.6 }}>Buku bacaan ringan bagi sang pemula</Card.Title>
                                            </Card.Body>
                                        </Card>
                                        
                                        <Card className='rounded-0 bg-light border-light h-100'>
                                            <Card.Img className='rounded-0' variant="top" src={popularReview2} />
                                            <Card.Body>
                                                <Card.Title className='text-capitalize' style={{ lineHeight: 1.6 }}>Buku bacaan ringan bagi sang pemula</Card.Title>
                                            </Card.Body>
                                        </Card>
                                        
                                        <Card className='rounded-0 bg-light border-light h-100'>
                                            <Card.Img className='rounded-0' variant="top" src={popularReview3} />
                                            <Card.Body>
                                                <Card.Title className='text-capitalize' style={{ lineHeight: 1.6 }}>Buku bacaan ringan bagi sang pemula</Card.Title>
                                            </Card.Body>
                                        </Card>
                                        
                                        <Card className='rounded-0 bg-light border-light h-100'>
                                            <Card.Img className='rounded-0' variant="top" src={popularReview1} />
                                            <Card.Body>
                                                <Card.Title className='text-capitalize' style={{ lineHeight: 1.6 }}>Buku bacaan ringan bagi sang pemula</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Slider>
                                </Tab>

                                <Tab eventKey="popular" title="Popular" className='text-start'>
                                    <Slider {...settings}>
                                        <Card className='rounded-0 bg-light border-light h-100'>
                                            <Card.Img className='rounded-0' variant="top" src={popularReview3} />
                                            <Card.Body>
                                                <Card.Title className='text-capitalize' style={{ lineHeight: 1.6 }}>Buku bacaan ringan bagi sang pemula</Card.Title>
                                            </Card.Body>
                                        </Card>

                                        <Card className='rounded-0 bg-light border-light h-100'>
                                            <Card.Img className='rounded-0' variant="top" src={popularReview1} />
                                            <Card.Body>
                                                <Card.Title className='text-capitalize' style={{ lineHeight: 1.6 }}>6 Tips membaca buku</Card.Title>
                                            </Card.Body>
                                        </Card>
                                        
                                        <Card className='rounded-0 bg-light border-light h-100'>
                                            <Card.Img className='rounded-0' variant="top" src={popularReview2} />
                                            <Card.Body>
                                                <Card.Title className='text-capitalize' style={{ lineHeight: 1.6 }}>Ingin memulai membaca buku, lakukan hal berikut!</Card.Title>
                                            </Card.Body>
                                        </Card>
                                        
                                        <Card className='rounded-0 bg-light border-light h-100'>
                                            <Card.Img className='rounded-0' variant="top" src={popularReview2} />
                                            <Card.Body>
                                                <Card.Title className='text-capitalize' style={{ lineHeight: 1.6 }}>Buku bacaan ringan bagi sang pemula</Card.Title>
                                            </Card.Body>
                                        </Card>
                                        
                                        <Card className='rounded-0 bg-light border-light h-100'>
                                            <Card.Img className='rounded-0' variant="top" src={popularReview3} />
                                            <Card.Body>
                                                <Card.Title className='text-capitalize' style={{ lineHeight: 1.6 }}>Buku bacaan ringan bagi sang pemula</Card.Title>
                                            </Card.Body>
                                        </Card>
                                        
                                        <Card className='rounded-0 bg-light border-light h-100'>
                                            <Card.Img className='rounded-0' variant="top" src={popularReview1} />
                                            <Card.Body>
                                                <Card.Title className='text-capitalize' style={{ lineHeight: 1.6 }}>Buku bacaan ringan bagi sang pemula</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Slider>
                                </Tab>

                                <Tab eventKey="old" title="Old" className='text-start'>
                                    <Slider {...settings}>
                                        <Card className='rounded-0 bg-light border-light h-100'>
                                            <Card.Img className='rounded-0' variant="top" src={popularReview2} />
                                            <Card.Body>
                                                <Card.Title className='text-capitalize' style={{ lineHeight: 1.6 }}>Ingin memulai membaca buku, lakukan hal berikut!</Card.Title>
                                            </Card.Body>
                                        </Card>
                                        
                                        <Card className='rounded-0 bg-light border-light h-100'>
                                            <Card.Img className='rounded-0' variant="top" src={popularReview1} />
                                            <Card.Body>
                                                <Card.Title className='text-capitalize' style={{ lineHeight: 1.6 }}>6 Tips membaca buku</Card.Title>
                                            </Card.Body>
                                        </Card>
                                        
                                        <Card className='rounded-0 bg-light border-light h-100'>
                                            <Card.Img className='rounded-0' variant="top" src={popularReview3} />
                                            <Card.Body>
                                                <Card.Title className='text-capitalize' style={{ lineHeight: 1.6 }}>Buku bacaan ringan bagi sang pemula</Card.Title>
                                            </Card.Body>
                                        </Card>
                                        
                                        <Card className='rounded-0 bg-light border-light h-100'>
                                            <Card.Img className='rounded-0' variant="top" src={popularReview2} />
                                            <Card.Body>
                                                <Card.Title className='text-capitalize' style={{ lineHeight: 1.6 }}>Buku bacaan ringan bagi sang pemula</Card.Title>
                                            </Card.Body>
                                        </Card>
                                        
                                        <Card className='rounded-0 bg-light border-light h-100'>
                                            <Card.Img className='rounded-0' variant="top" src={popularReview3} />
                                            <Card.Body>
                                                <Card.Title className='text-capitalize' style={{ lineHeight: 1.6 }}>Buku bacaan ringan bagi sang pemula</Card.Title>
                                            </Card.Body>
                                        </Card>
                                        
                                        <Card className='rounded-0 bg-light border-light h-100'>
                                            <Card.Img className='rounded-0' variant="top" src={popularReview1} />
                                            <Card.Body>
                                                <Card.Title className='text-capitalize' style={{ lineHeight: 1.6 }}>Buku bacaan ringan bagi sang pemula</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Slider>
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                </Container>
            </section>
            
            <section id='rating-section' className='py-4 py-lg-5'>
                <Container className='pt-lg-3 pb-lg-5 text-center'>
                    <Row className='mb-lg-4'>
                        <Col>
                            <h1 className='mb-3 fw-bold'>Tanggapan Pembaca</h1>
                            <p>Masih ragu untuk bergabung ? <br /> Berikut tanggapan orang-orang yang sudah bergabung di Booklogia :</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={4} className='mb-3 mb-lg-0'>
                            <Card className='rounded-0 bg-light border-light h-100 py-3'>
                                <Card.Body>
                                    <img src={profileRating1} className='img-fluid mb-3' alt='' />

                                    <Card.Text className='fw-bold mb-2'>Cristiano Ronaldo</Card.Text>
                                    
                                    <div className='mb-2'>
                                        <i className='fas fa-star text-warning'></i>
                                        <i className='fas fa-star text-warning'></i>
                                        <i className='fas fa-star text-warning'></i>
                                        <i className='fas fa-star text-warning'></i>
                                        <i className='fas fa-star text-warning'></i>
                                    </div>

                                    <Card.Text>Web ini sungguh menarik, aku bisa tahu buku-buku menarik setelah mengetahui ulasan dari para pengguna lain dan web ini sangat bermanfaat.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} className='mb-3 mb-lg-0'>
                            <Card className='rounded-0 bg-light border-light h-100 py-3'>
                                <Card.Body>
                                    <img src={profileRating2} className='img-fluid mb-3' alt='' />

                                    <Card.Text className='fw-bold mb-2'>Ainsley Amanda</Card.Text>
                                    
                                    <div className='mb-2'>
                                        <i className='fas fa-star text-warning'></i>
                                        <i className='fas fa-star text-warning'></i>
                                        <i className='fas fa-star text-warning'></i>
                                        <i className='fas fa-star text-warning'></i>
                                        <i className='fas fa-star text-warning'></i>
                                    </div>

                                    <Card.Text>Aku sangat suka novel romance yang happy ending, ulasan orang-orang sangat membantuku mencari novel yang aku suka.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} className='mb-3 mb-lg-0'>
                            <Card className='rounded-0 bg-light border-light h-100 py-3'>
                                <Card.Body>
                                    <img src={profileRating3} className='img-fluid mb-3' alt='' />

                                    <Card.Text className='fw-bold mb-2'>Agatha Yuda</Card.Text>
                                    
                                    <div className='mb-2'>
                                        <i className='fas fa-star text-warning'></i>
                                        <i className='fas fa-star text-warning'></i>
                                        <i className='fas fa-star text-warning'></i>
                                        <i className='fas fa-star text-warning'></i>
                                        <i className='fas fa-star text-warning'></i>
                                    </div>

                                    <Card.Text>Orang-orang disini sangat supportive, mereka dengans enang hati memberikan rekomendasi buku yang menarik.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default Home;
