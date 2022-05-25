import React from 'react';
import Banner from '../Banner/Banner';
import BusinessSummery from '../BusinessSummery/BusinessSummery';
import Partses from '../Partses/Partses';
import Review from '../Review/Review';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Partses></Partses>
            <BusinessSummery></BusinessSummery>
            <Review></Review>
        </div>
    );
};

export default Home;