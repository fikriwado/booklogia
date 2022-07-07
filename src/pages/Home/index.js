import React from 'react';
import Hero from '../../components/Hero';
import About from '../../components/About';
import PopularReview from '../../components/PopularReview';
import Rating from '../../components/Rating';

function Home() {
    return (
        <div className="home-page">
            <Hero />
            <About />
            <PopularReview />
            <Rating />
        </div>
    );
}

export default Home;
