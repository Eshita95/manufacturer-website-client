import React from 'react';

const Blogs = () => {
    return (
        <div className=' grid grid-cols-3'>
            <div className="card w-96 h-96 bg-base-100 shadow-xl m-4">
                <div className="card-body">
                    <h2 className="card-title">1. How will you improve the performance of a React Application?</h2>
                    <p><strong>Answer:</strong> Keeping component state local where necessary.
                        Memoizing React components to prevent unnecessary re-renders.
                        Code-splitting in React using dynamic import()
                        Windowing or list virtualization in React.
                        Lazy loading images in React.</p>

                </div>
            </div>
            <div className="card w-96 h-96 bg-base-100 shadow-xl m-4">
                <div className="card-body">
                    <h2 className="card-title">2. What are the different ways to manage a state in a React application?</h2>
                    <p><strong>Answer:</strong>There are four main types of state you need to properly manage in your React apps:
                        *Local state.
                        *Global state.
                        *Server state.
                        *URL state.</p>

                </div>
            </div>
            <div className="card w-96 h-96 bg-base-100 shadow-xl m-4">
                <div className="card-body">
                    <h2 className="card-title">3.  How does prototypical inheritance work?</h2>
                    <p><strong>Answer:</strong>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. </p>

                </div>
            </div>
            <div className="card w-96 h-96 bg-base-100 shadow-xl m-4">
                <div className="card-body">
                    <h2 className="card-title">4. What is a unit test? Why should write unit tests?</h2>
                    <p><strong>Answer:</strong>Unit testing allows the programmer to refactor code at a later date, and make sure the module still works correctly (i.e. Regression testing). The procedure is to write test cases for all functions and methods so that whenever a change causes a fault, it can be quickly identified and fixed. </p>

                </div>
            </div>
            <div className="card w-96 h-96 bg-base-100 shadow-xl m-4">
                <div className="card-body">
                    <h2 className="card-title">5.  You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                    <p><strong>Answer:</strong>Unit testing allows the programmer to refactor code at a later date, and make sure the module still works correctly i.e. Regression testing. The procedure is to write test cases for all functions and methods so that whenever a change causes a fault, it can be quickly identified and fixed. </p>

                </div>
            </div>
        </div>
    );
};

export default Blogs;