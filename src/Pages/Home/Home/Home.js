import React from 'react';
import AddReviewDetails from '../../../DashBoard/AddReviewDetails';
import Tools from '../../../Tools/Tools';
import Banner from '../Banner/Banner';
import BusinessSummery from '../BusinessSummery/BusinessSummery';



const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Tools></Tools>
            <AddReviewDetails></AddReviewDetails>
            <BusinessSummery></BusinessSummery>
        </div>
    );
};

export default Home;