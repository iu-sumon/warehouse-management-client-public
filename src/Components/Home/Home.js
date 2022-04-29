import React from 'react';
import ReactCarousel from '../ReactCarousel/ReactCarousel';
import bPhoto from '../../images/banner/banner1_1_400x320.webp'

const Home = () => {
    return (
        <div style={{ backgroundColor: "#2DBEBF" }} className='py-5 h-100'>

            <div className='d-flex justify-content-evenly align-items-center border border-1'>  
                <div>
                    <img className='rounded-3 shadow border border-1 p-1' src={bPhoto} alt="" />
                </div>
                <div className='w-50 border border-1'>
                    <ReactCarousel></ReactCarousel>
                </div>
            </div>



        </div>
    );
};

export default Home;