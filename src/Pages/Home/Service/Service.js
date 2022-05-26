import React from 'react';

const Service = ({service}) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={service.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Name: {service.name}</h2>
                <p>Description: {service.description}</p>
                <p>Quantity: {service.quantity}</p>
                <p>Price: {service.price} per unit</p>
            </div>
        </div>
    );
};

export default Service;