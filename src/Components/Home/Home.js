import React from 'react';
import ReactCarousel from '../ReactCarousel/ReactCarousel';
import bPhoto from '../../images/banner/banner1_1_400x320.webp'
import './Home.css'
import Items from '../Items/Items';
import Services from '../Services/Services';
import AllBrand from '../AllBrand/AllBrand';
import TipsSection from '../TipsSection/TipsSection';


const Home = () => {
    return (
        <div>
            <div className='py-5 h-100 color2'>

                <div className='d-flex justify-content-evenly align-items-center '>

                    <div>
                        <img className='rounded-3 shadow  p-1' src={bPhoto} alt="" />
                    </div>

                    <div className='w-50'>
                        <ReactCarousel></ReactCarousel>
                    </div>
                </div>

            </div>
            <Items></Items>
            <hr />
            <Services></Services>
            <hr />
            <AllBrand></AllBrand>
            <TipsSection></TipsSection>
        </div>
    );
};

export default Home;