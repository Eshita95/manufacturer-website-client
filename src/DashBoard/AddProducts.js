import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import SharedButton from '../Pages/Shared/SharedButton';

const AddProducts = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        const imageStorageKey = '554340da0ae4107e57d6910247c7dbb5';
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const addToolsParts = {
                        name: data.name,
                        description: data.description,
                        quantity: data.quantity,
                        price: data.price,
                        sellQuantity: data.sellQuantity,
                        img: img
                    }
                    console.log(addToolsParts)
                    // send to data base
                    fetch(' https://aqueous-forest-62653.herokuapp.com/addParts', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(addToolsParts)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('tools added successfully');
                                reset()

                            }
                            else {
                                toast.error('failed to added tools')
                            }
                        })
                }
                console.log('image', result);
            })
    }
    return (
        <div className='flex justify-center h-screen items-center my-20'>
            <div className=' '>

                <div className='w-[370px] p-5 border-2 shadow-2xl rounded-xl'>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2 className='font-bold text-center text-xl mb-3'>Add your Product</h2>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Photo</span>
                            </label>
                            <input
                                type="file"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs mb-2"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: "file is Required"
                                    },

                                })}
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is Required"
                                    },

                                })}
                            />

                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}


                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Add Description</span>
                            </label>
                            <textarea
                                type="text"
                                placeholder="Your description"
                                className="input input-bordered w-full max-w-xs"
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: "description is Required"
                                    },

                                })}
                            />

                            <label className="label">
                                {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">available quantity</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your quantity"
                                className="input input-bordered w-full max-w-xs"
                                {...register("quantity", {
                                    required: {
                                        value: true,
                                        message: "quantity is Required"
                                    },
                                })}
                            />

                            <label className="label">
                                {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Minimum sell quantity</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your minimum sell quantity"
                                className="input input-bordered w-full max-w-xs"
                                {...register("sellQuantity", {
                                    required: {
                                        value: true,
                                        message: "sellQuantity is Required"
                                    },
                                })}
                            />

                            <label className="label">
                                {errors.sellQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.sellQuantity.message}</span>}

                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">price</span>
                            </label>
                            <input
                                type="number"
                                placeholder="per quantity price"
                                className="input input-bordered w-full max-w-xs"
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: "price is Required"
                                    },
                                })}
                            />

                            <label className="label">
                                {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}

                            </label>
                        </div>
                        <SharedButton>Add Product</SharedButton>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddProducts;