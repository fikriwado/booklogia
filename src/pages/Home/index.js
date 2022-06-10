import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
    return (
        <>
            <section id='hero-section' className='bg-light py-5'>
                <Container className='py-3'>
                    <Row>
                        <Col xl={7}>
                            <h1>Ini adalah Hero Section!</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis perferendis voluptatem neque esse est laboriosam dolor dolore, dignissimos id nihil provident dicta incidunt, exercitationem explicabo doloribus asperiores excepturi sequi ipsa maxime assumenda eos sunt quidem molestias! Error harum magnam sapiente nihil hic optio, facilis illum animi recusandae illo enim cum porro voluptas quasi corporis autem sed ex fugit incidunt exercitationem quidem rerum doloribus et! Quae laboriosam error provident.</p>
                        </Col>
                        <Col xl={5}>
                            <h3>Ini adalah gambar</h3>
                        </Col>
                    </Row>
                </Container>
            </section>
            
            <section id='about-section' className='py-5'>
                <Container className='py-3'>
                    <h1>Ini adalah About Section!</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis perferendis voluptatem neque esse est laboriosam dolor dolore, dignissimos id nihil provident dicta incidunt, exercitationem explicabo doloribus asperiores excepturi sequi ipsa maxime assumenda eos sunt quidem molestias! Error harum magnam sapiente nihil hic optio, facilis illum animi recusandae illo enim cum porro voluptas quasi corporis autem sed ex fugit incidunt exercitationem quidem rerum doloribus et! Quae laboriosam error provident.</p>
                </Container>
            </section>
            
            <section id='popular-review-section' className='bg-light py-5'>
                <Container className='py-3'>
                    <h1>Ini adalah Popular Review Section!</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis perferendis voluptatem neque esse est laboriosam dolor dolore, dignissimos id nihil provident dicta incidunt, exercitationem explicabo doloribus asperiores excepturi sequi ipsa maxime assumenda eos sunt quidem molestias! Error harum magnam sapiente nihil hic optio, facilis illum animi recusandae illo enim cum porro voluptas quasi corporis autem sed ex fugit incidunt exercitationem quidem rerum doloribus et! Quae laboriosam error provident.</p>
                </Container>
            </section>
        </>
    );
}

export default Home;
