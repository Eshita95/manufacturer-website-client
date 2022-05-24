import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    if (user) {
        console.log(user);
    }

    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Email"
                                class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid email'
                                })}
                            />
                            <label class="label">
                                {errors.email?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}

                            </label>
                        </div>

                        <input />
                        {errors.firstName?.type === 'required' && "First name is required"}

                        <input {...register("lastName", { required: true })} />
                        {errors.lastName && "Last name is required"}

                        <input type="submit" />
                    </form>
                    <div className="divider">OR</div>
                    <button className="btn" onClick={() => signInWithGoogle()}>Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;