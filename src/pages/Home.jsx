import React from 'react';
import Banner from '../components/Banner';
import Works from '../components/Works';
import Services from '../components/Services';
import MarqueeImg from '../components/MarqueeImg';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Works></Works>
            <Services></Services>
            <MarqueeImg></MarqueeImg>
        </div>
    );
};

export default Home;