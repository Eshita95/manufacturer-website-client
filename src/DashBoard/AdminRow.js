import React from 'react';
import { toast } from 'react-toastify';

const AdminRow = ({ user,refetch}) => {
    const { email } = user;
    const makeAdmin = () => {
        fetch(`/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Admin Successful')
                }
            })
    }
    return (

        <tr>
            <td>1</td>
            <td>{email}</td>
            <td><button onClick={makeAdmin}>Admin</button></td>
        </tr>

    );
};

export default AdminRow;