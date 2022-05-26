import React from 'react';

const SharedButton = ({children}) => {
    return (
        <div>
            <button className='btn w-full'>{children}</button>
        </div>
    );
};

export default SharedButton;