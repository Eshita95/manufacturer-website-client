import React, { useEffect, useState } from 'react';
import ToolService from './ToolService';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch(' https://aqueous-forest-62653.herokuapp.com/getParts', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])

    return (
        <div className='mt-16 border-2 p-5 rounded-lg'>
            <h1 className='text-3xl font-bold text-cyan-600 text-center'>Tools and Parts</h1>
            <div class="divider"></div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    tools.map((tool, index) => <ToolService
                        key={index}
                        tool={tool}
                    ></ToolService>)
                }
            </div>
        </div>
    );
};

export default Tools;