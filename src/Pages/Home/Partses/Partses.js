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
            description: 'For anyone looking for the bare computing essentials, 4GB of laptop RAM should be sufficient. If you want your PC to be able to flawlessly accomplish more demanding tasks at once, such as gaming, graphic design, and programming, you should have at least 8GB of laptop RAM.',
            img: memory,
            quantity: '500',
            price: '2300'
        },
        {
            _id: 2,
            name: 'Adaptor',
            description: 'Power adapter as known as power supply or power brick converts the high voltage AC power from a wall outlet into the low voltage DC power needed for your laptop. It provides power for the laptop and charges the battery.',
            img: adaptor,
            quantity: '560',
            price: '900'
        },
        {
            _id: 3,
            name: 'Proccessor',
            description: "At the heart of every laptop (or desktop) computer is a central processing unit (CPU), commonly called a processor or just, generically, a chip, that's responsible for nearly everything that goes on inside. The CPUs you'll find in current laptops are made by AMD, Intel, Apple, and Qualcomm. The options may seem endless and their names byzantine. But choosing one is easier than you think, once you know a few CPU ground rules.",
            img: proccessor,
            quantity: '600',
            price: '2600'
        }
    ];
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h2 className='text-4xl font-bold text-cyan-600'>Parts We Provide</h2>
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