import React from 'react';
import Eshita from '../../../Pictures/Image/Eshita.jpg'

const myPortfolio = () => {
    return (
        <div>
            <div class="avatar justify-center items-center flex mt-4">
                <div class="w-24 rounded-full">
                    <img src={Eshita} alt='' />
                </div>
            </div>
            <h1 className='shadow text-4xl font-bold justify-center items-center flex my-4 text-cyan-600'>Zobaida Sheikh Eshita</h1>
            <div className='my-4 p-4 bg-base-200'>
                <h2 className='text-2xl font-semibold justify-center items-center flex'>Educational Background</h2>
                <p className='justify-center items-center flex text-lg'>Diploma In Engineering</p>
            </div>
            <div className='my-4 p-4 bg-base-200'>
                <h2 className='text-2xl font-semibold justify-center items-center flex'>List Of Technologies Or Skills</h2>
                <div className='justify-center items-center flex'>
                    <div className='m-4'>
                        <li>HTML</li>
                        <li>BOOTSTRAP</li>
                        <li>VANILLA CSS</li>
                        <li>TAILWIND</li>
                    </div>
                    <div className='m-4'>
                        <li>JAVASCRIPT</li>
                        <li>REACT.JS</li>
                        <li>NODE.JS</li>
                        <li>MONGDB</li>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default myPortfolio;