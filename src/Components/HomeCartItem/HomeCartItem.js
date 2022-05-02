import React from 'react';
import { Link } from 'react-router-dom';

const HomeCartItem = ({ item }) => {
    const { name, img, price, quantity, description, supplier } = item;
    return (
        <div class="col">
            <div class="card h-100">
                <img src={img} class="card-img-top w-75 mx-auto " alt="..." />
                <div class="card-body">
                    <h5 class="card-title mt-0">{name}</h5>
                    <p class="card-text mb-0 mt-0">{description.length > 80 ? description.slice(0, 80) : description}...</p>
                    <div className='d-flex justify-content-between align-content-center text-muted'>
                        <h6>Price</h6>
                        <h6>{price}</h6>
                    </div>

                    <div className='d-flex justify-content-between align-content-center text-muted'>
                        <h6>Quantity</h6>
                        <h6>{quantity}</h6>
                    </div>

                    <div className='d-flex justify-content-between align-content-center text-muted'>
                        <h6>Supplier</h6>
                        <h6>{supplier}</h6>
                    </div>


                    <Link to='/' className='btn btn-dark w-100'>Update</Link>

                </div>
            </div>
        </div>
    );
};

export default HomeCartItem;