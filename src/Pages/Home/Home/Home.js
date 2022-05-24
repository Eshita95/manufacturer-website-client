import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import BusinessSummery from '../BusinessSummery/BusinessSummery';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <BusinessSummery></BusinessSummery>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;