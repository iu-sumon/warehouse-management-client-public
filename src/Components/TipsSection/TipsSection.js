import React from 'react';
import { Link } from 'react-router-dom';
import tipPhoto from '../../images/others/photo.PNG'
import './TipsSection.css'
const TipsSection = () => {
    return (
        <div>
            <div className='text-white py-5' style={{ backgroundColor: "#612989" }}>

                <h1>It's time to gift yourself</h1>
                <p>We get it-New Year's resolutions are hard.There's no harm in getting yourself a little something as a reward for all that discipline, so take <b> 50% your <br />next two orders.*</b></p>
                <br />
                <Link class="btn btn-primary px-5 py-2 rounded-pill shadow" to='/home'> Get 50% off </Link>

            </div>

            <div className='text-white py-5' style={{ backgroundColor: "#01838c" }}>
                <div className='d-flex  justify-content-around align-content-center'>

                    <div>
                        <img src={tipPhoto} alt="" />
                    </div>



                    <div className='mt-5'>

                        <h1 className='mb-5'>What to do when you arrive</h1>

                        <div className='d-flex justify-content-center align-content-center gap-2 pb-3'>
                            <p><i className="fa-solid fa-square-check"></i></p>
                            <p>Skip the line! Go straight to the Tech <br /> Den Warehouse pick-up counter. </p>
                        </div>


                        <div className='d-flex justify-content-center align-content-center gap-2 pb-3'>
                            <p><i className="fa-solid fa-square-check"></i></p>
                            <p>Show the staff your DoorDash app <br /> or receipt to claim your order.</p>
                        </div>

                        <div className='d-flex justify-content-center align-content-center gap-2'>
                            <p><i className="fa-solid fa-square-check"></i></p>
                            <p>Before heading out,double check to <br /> confirm you've received all
                                items.</p>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default TipsSection;