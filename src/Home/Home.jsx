import React from 'react';
import Banner from './Home/Banner';
import About from './Home/About/About';
import Services from './Home/Services/Services';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <About></About>
           <Services></Services>
        </div>
    );
};

export default Home;