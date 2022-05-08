import React from 'react';
import ReactCarousel from '../ReactCarousel/ReactCarousel';
import bPhoto from '../../images/banner/banner.webp'
import './Home.css'
 
import Services from '../Services/Services';
import AllBrand from '../AllBrand/AllBrand';
import TipsSection from '../TipsSection/TipsSection';
import WareHouseBlogs from '../WareHouseBlogs/WareHouseBlogs';
import HomeCart from '../HomeCart/HomeCart';
 


const Home = () => {
    return (
        <div>
            <div className='py-5  color2'>

                <div className='row row-cols-1 row-cols-md-2'>

                    <div>
                        <img  className='rounded-3 shadow img-fluid mt-3' src={bPhoto} alt="" />
                    </div>

                    <div>
                        <ReactCarousel></ReactCarousel>
                    </div>
                </div>

            </div>
            <HomeCart></HomeCart>
            <TipsSection></TipsSection>
            <WareHouseBlogs></WareHouseBlogs>
            <hr />
            <Services></Services>
            <hr />
            <AllBrand></AllBrand>
        </div>
    );
};

export default Home;