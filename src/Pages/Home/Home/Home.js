import React from 'react';
import Banner from '../Banner/Banner';
import BusinessSummery from '../BusinessSummery/BusinessSummery';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <BusinessSummery></BusinessSummery>
            <Review></Review>
        </div>
    );
};

export default Home;