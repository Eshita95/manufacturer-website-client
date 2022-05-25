import React from 'react';
import memory from '../../../Pictures/Image/memory.jpg';
import adaptor from '../../../Pictures/Image/adaptor.jpg';
import proccessor from '../../../Pictures/Image/proccessor.jpg';
import Service from '../Service/Service';

const Partses = () => {
    const partses = [
        {
            _id: 1,
            name: 'Memory',
            description: '',
            img: memory,
            quantity: '500',
            price: '2300'

        },
        {
            _id: 2,
            name: 'Adaptor',
            description: '',
            img: adaptor,
            quantity: '560',
            price: '900'
        },
        {
            _id: 3,
            name: 'Proccessor',
            description: '',
            img: proccessor,
            quantity: '600',
            price: '2600'
        }
    ];
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-cyan-600 text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl text-cyan-600 '>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    partses.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Partses;