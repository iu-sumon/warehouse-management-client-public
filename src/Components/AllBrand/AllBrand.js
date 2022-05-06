import React from 'react';
import b1 from '../../images/brand/tb1.jpg'
import b2 from '../../images/brand/tb2.jpg'
import b3 from '../../images/brand/tb3.jpg'
import b4 from '../../images/brand/tb4.jpg'
import b5 from '../../images/brand/tb5.jpg'

const AllBrand = () => {
    return (
        <div className='container pb-5 gap-2'>
            <h1 className='pb-5'>Top Brands</h1>
            <div className='d-flex justify-content-between align-content-center'>
                <div className='border border-1 shadow rounded-3 p-3'>
                    <img src={b1} alt="" />
                </div>
                <div className='border border-1 shadow rounded-3 p-3'>
                    <img src={b2} alt="" />
                </div>
                <div className='border border-1 shadow rounded-3 p-3'>
                    <img src={b3} alt="" />
                </div>
                <div className='border border-1 shadow rounded-3 p-3'>
                    <img src={b4} alt="" />
                </div>
                <div className='border border-1 shadow rounded-3 p-3'>
                    <img src={b5} alt="" />
                </div>


            </div>
        </div>
    );
};

export default AllBrand;