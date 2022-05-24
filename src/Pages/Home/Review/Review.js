import React from 'react';

const Review = () => {
    return (
        <div className='mb-8'>
            <div>
                <h1 className='text-4xl font-bold'>Clients Reviews</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Noel William</h2>
                        <p>Very professional and reasonable pricing.. owner and staff are pretty straight forward with whats best for your money. If you need a fix you can have them look at it and ask their opinion..</p>
                        <div class="rating">
                            <input type="radio" name="rating-1" class="mask mask-star" />
                            <input type="radio" name="rating-1" class="mask mask-star" checked />
                            <input type="radio" name="rating-1" class="mask mask-star" checked />
                            <input type="radio" name="rating-1" class="mask mask-star" checked />
                            <input type="radio" name="rating-1" class="mask mask-star" checked />

                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Noel William</h2>
                        <p>Very professional and reasonable pricing.. owner and staff are pretty straight forward with whats best for your money. If you need a fix you can have them look at it and ask their opinion..</p>
                        <div class="rating">
                            <input type="radio" name="rating-1" class="mask mask-star" />
                            <input type="radio" name="rating-1" class="mask mask-star" checked />
                            <input type="radio" name="rating-1" class="mask mask-star" checked />
                            <input type="radio" name="rating-1" class="mask mask-star" checked />
                            <input type="radio" name="rating-1" class="mask mask-star" checked />

                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Noel William</h2>
                        <p>Very professional and reasonable pricing.. owner and staff are pretty straight forward with whats best for your money. If you need a fix you can have them look at it and ask their opinion..</p>
                        <div class="rating">
                            <input type="radio" name="rating-1" class="mask mask-star" />
                            <input type="radio" name="rating-1" class="mask mask-star" checked />
                            <input type="radio" name="rating-1" class="mask mask-star" checked />
                            <input type="radio" name="rating-1" class="mask mask-star" checked />
                            <input type="radio" name="rating-1" class="mask mask-star" checked />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;