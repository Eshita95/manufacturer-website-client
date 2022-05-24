import React from 'react';

const Blogs = () => {
    return (
        <div className='m-8 flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">1. How will you improve the performance of a React Application?</h2>
                    <p><strong>Answer:</strong> Keeping component state local where necessary.
                        Memoizing React components to prevent unnecessary re-renders.
                        Code-splitting in React using dynamic import()
                        Windowing or list virtualization in React.
                        Lazy loading images in React.</p>

                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">2. What are the different ways to manage a state in a React application?</h2>
                    <p><strong>Answer:</strong>There are four main types of state you need to properly manage in your React apps:
                        *Local state.
                        *Global state.
                        *Server state.
                        *URL state.</p>

                </div>
            </div>
        </div>
    );
};

export default Blogs;