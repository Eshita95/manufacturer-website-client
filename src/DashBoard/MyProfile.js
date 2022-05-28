import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import SharedButton from '../Pages/Shared/SharedButton';


const MyProfile = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    const { email, photoURL, displayName } = user;

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
                    const addProfile = {
                        displayName: data.displayName,
                        address: data.address,
                        bio: data.bio,
                        img: img
                    }
                    // send to data base
                    fetch(` https://aqueous-forest-62653.herokuapp.com/user/${email}`, {
                        method: "PUT",
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(addProfile)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            toast.success('Profile Added Successfully')
                        })
                }
                console.log('image', result);
            })
    }
    return (
        <div className='flex justify-center h-screen items-center'>
            <div className=' flex gap-4 border-2 p-4 shadow-2xl'>
                <div className='mt-11'>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <div class="avatar flex justify-center">
                                <div class="w-24 rounded-full border-2 border-cyan-500 ">
                                    <img src={photoURL} alt='' />
                                </div>
                            </div>
                            <input className='border-2 p-2 rounded-lg border-cyan-400' type="text" disabled value={displayName} />
                            <input className='border-2 p-2 rounded-lg border-cyan-400' type="text" disabled value={email} />
                            <input className='border-2 p-2 rounded-lg border-cyan-400' type="text" disabled />
                            <h2>f</h2>


                        </div>
                    </div>
                </div>

                <div className='w-[370px] p-5 border-2 shadow-2xl rounded-xl'>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2 className='font-bold text-center text-xl mb-3'>Add your Profile</h2>
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
                                <span className="label-text">Add Bio</span>
                            </label>
                            <textarea
                                type="text"
                                placeholder="Your Bio"
                                className="input input-bordered w-full max-w-xs"
                                {...register("bio", {
                                    required: {
                                        value: true,
                                        message: "Bio is Required"
                                    },

                                })}
                            />

                            <label className="label">
                                {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Address"
                                className="input input-bordered w-full max-w-xs"
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: "Address is Required"
                                    },

                                })}
                            />

                            <label className="label">
                                {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}

                            </label>
                        </div>
                        <SharedButton>Add Profile</SharedButton>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default MyProfile;