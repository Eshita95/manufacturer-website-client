import React from 'react';
import Notfound from '../../Pictures/Image/Notfound.png'

const NotFound = () => {
    return (
        <div className='flex justify-center items-center'>
            <img src={Notfound} alt="" />
        </div>
    );
};

export default NotFound;