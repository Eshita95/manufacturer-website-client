import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Pages/Shared/Loading/Loading';
import AdminRow from './AdminRow';


const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('user', () => fetch('http://localhost:5000/user', {
        method: "GET"
    }).then(res => res.json()));


    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>all users</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map(user => <AdminRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></AdminRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;