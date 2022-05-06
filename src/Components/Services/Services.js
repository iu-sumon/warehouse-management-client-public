import React from 'react';

const Services = () => {
    return (
        <div className='container'>
            <h1>Our Services</h1>
            <div className='d-flex justify-content-between align-content-center py-5 gap-2'>

                <div className='border border-1 shadow rounded-3 p-3'>
                    <i className="fa-solid fa-globe"></i>
                    <h3>WORLDWIDE SUPPLY</h3>
                    <p>We work with the biggest delivery networks. It doesn't matter where in the world you are.</p>
                </div>
                <div  className='border border-1 shadow rounded-3 p-3'>
                    <i className="fa-solid fa-truck"></i>
                    <h3>FREE SHIPPING</h3>
                    <p>Stop wondering about shipping costs, what you see is what you pay.</p>
                </div>
                <div  className='border border-1 shadow rounded-3 p-3'>
                    <i className="fa-solid fa-money-check-dollar"></i>
                    <h3>MONEY BACK GUARANTEE</h3>
                    <p>Got a problem with the product? Don't worry, we have a 30 day money back guarantee.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;