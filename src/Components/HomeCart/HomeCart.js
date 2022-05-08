import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import HomeCartItem from '../HomeCartItem/HomeCartItem';
const HomeCart = () => {
    const [items] = useItems()
    let getItems = items.slice(0, 6)
    return (
        <div className='py-5' style={{ backgroundColor: "#F5F5F5" }}>
            <h3 className='mb-5'>Our Items</h3>
            <div className=' row row-cols-1 row-cols-lg-3 g-2 g-lg-3 w-75 mx-auto'>
                {
                    getItems.map(item => <HomeCartItem
                        key={item._id}
                        item={item}
                    ></HomeCartItem>)
                }
            </div>
            <div className='mt-5'>
                <Link className='btn btn-dark px-5 rounded-pill mb-3' to="/manage-item">MANAGE INVENTORIES</Link>
            </div>
        </div>
    );
};

export default HomeCart;