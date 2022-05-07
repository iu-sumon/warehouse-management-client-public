import React from 'react';

const Services = () => {
    return (
        <div className='container'>
            <h1>Our Services</h1>
            <div className='row row-cols-1 row-cols-md-3 g-4 py-5'>

                <div className='col border border-1 shadow rounded-3 p-3'>
                    <i className="fa-solid fa-globe"></i>
                    <h5>WORLDWIDE SUPPLY</h5>
                    <p>We work with the biggest delivery networks. It doesn't matter where in the world you are.</p>
                </div>
                <div  className='col border border-1 shadow rounded-3 p-3'>
                    <i className="fa-solid fa-truck"></i>
                    <h5>FREE SHIPPING</h5>
                    <p>Stop wondering about shipping costs, what you see is what you pay.</p>
                </div>
                <div  className='col border border-1 shadow rounded-3 p-3'>
                    <i className="fa-solid fa-money-check-dollar"></i>
                    <h5>MONEY BACK GUARANTEE</h5>
                    <p>Got a problem with the product? Don't worry, we have a 30 day money back guarantee.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;