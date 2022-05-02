import React from 'react';
import { Link } from 'react-router-dom';
import nPhoto from '../../images/others/notfound.PNG'
const NotFound = () => {
    return (
        <div>
            <div  className='vh-100' style={{ backgroundColor: 'black' ,paddingTop:"200px" }}>

                <div>
                    <img className='w-50' src={nPhoto} alt="" />
                </div>

                <div>
                    <Link class="btn btn-outline-light" to='/'>Home Page</Link>
                </div>
                 
            </div>
           
        </div>
    );
};

export default NotFound;