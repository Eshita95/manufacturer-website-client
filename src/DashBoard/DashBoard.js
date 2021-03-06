import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../firebase.init';
import useAdmin from '../Hooks/useAdmin';

const DashBoard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile mb-2">

            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div className='drawer-content'>
                <h2 className='text-3xl font-bold text-center mt-5'>Welcome Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 shadow-2xl mt-2 bg-cyan-300 rounded-lg text-base-content">


                    <li><Link to='/dashboard/myProfile'>My Profile</Link></li>

                    {admin ? <>
                        <li><Link to='/dashboard/User'>All User</Link></li>
                        <li><Link to='/dashboard/makeAdmin'>Make Admin</Link></li>
                        <li><Link to='/dashboard/manageProduct'>Manage Product</Link></li>
                        <li><Link to='/dashboard/addProduct'>Add Product</Link></li>

                    </> :
                        <>
                            <li><Link to='/dashboard'>My Order</Link></li>
                            <li><Link to='/dashboard/addReview'>Add Review</Link></li>
                        </>}
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;