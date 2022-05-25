import React from 'react';
import client1 from '../../../Pictures/Image/client1.jpg'
import client2 from '../../../Pictures/Image/client2.jpg'
import client3 from '../../../Pictures/Image/client3.jpg'

const Review = () => {
    return (
        <div className='mb-8'>
            <div className='flex justify-center items-center'>
                <h1 className='text-4xl font-bold justify-center text-cyan-600'>Clients Reviews</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={client1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Hermounie Grenger</h2>
                        <p>Very professional and reasonable pricing.. owner and staff are pretty straight forward with whats best for your money. If you need a fix you can have them look at it and ask their opinion..</p>
                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" checked />
                            <input type="radio" name="rating-1" className="mask mask-star" checked />
                            <input type="radio" name="rating-1" className="mask mask-star" checked />
                            <input type="radio" name="rating-1" className="mask mask-star" checked />

                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={client2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Jenny Weaslley</h2>
                        <p>Very professional and reasonable pricing.. owner and staff are pretty straight forward with whats best for your money. If you need a fix you can have them look at it and ask their opinion..</p>
                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" checked />
                            <input type="radio" name="rating-1" className="mask mask-star" checked />
                            <input type="radio" name="rating-1" className="mask mask-star" checked />
                            <input type="radio" name="rating-1" className="mask mask-star" checked />

                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={client3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Dracco Malfoy</h2>
                        <p>Very professional and reasonable pricing.. owner and staff are pretty straight forward with whats best for your money. If you need a fix you can have them look at it and ask their opinion..</p>
                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" checked />
                            <input type="radio" name="rating-1" className="mask mask-star" checked />
                            <input type="radio" name="rating-1" className="mask mask-star" checked />
                            <input type="radio" name="rating-1" className="mask mask-star" checked />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;