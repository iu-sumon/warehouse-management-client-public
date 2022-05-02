import React from 'react';
import { Link } from 'react-router-dom';
import nPhoto from '../../images/others/notfound.PNG'
const NotFound = () => {
    return (
        <div>
            <div style={{ backgroundColor: 'black' }}>

                <div>
                    <img className='w-50' src={nPhoto} alt="" />
                </div>

                <div>
                    <Link class="btn btn-outline-light" to='/'>Home Page</Link>
                </div>
                 <div>
                     <hr/>
                 </div>
            </div>
           
        </div>
    );
};

export default NotFound;