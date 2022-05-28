import React from 'react';
import AddReviewDetails from '../../../DashBoard/AddReviewDetails';
import Tools from '../../../Tools/Tools';
import Banner from '../Banner/Banner';
import BusinessSummery from '../BusinessSummery/BusinessSummery';
import ContactUs from '../ContactUs';



const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Tools></Tools>
            <AddReviewDetails></AddReviewDetails>
            <BusinessSummery></BusinessSummery>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;