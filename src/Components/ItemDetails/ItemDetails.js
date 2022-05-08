
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {


    const { id } = useParams()
    const [item, setItem] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id])



    const handleDelivered = () => {


        item.quantity = parseInt(item.quantity) - 1;

        fetch(`http://localhost:5000/inventory/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(result => {
                fetch(`http://localhost:5000/inventory/${id}`)
                    .then(res => res.json())
                    .then(data => setItem(data))
            })

    }

    const handleUpdatedQuantity = (event) => {

        event.preventDefault();
        const itemQuantity = event.target.quantity.value;
        
        item.quantity = parseInt(item.quantity) + parseInt(itemQuantity);

        fetch(`http://localhost:5000/inventory/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(result => {
                fetch(`http://localhost:5000/inventory/${id}`)
                    .then(res => res.json())
                    .then(data => setItem(data))
            })
        event.target.reset();
    }










    return (
        <div className='container py-5'>

            <section className='row row-cols-1 row-cols-md-2'>
                <div className='col shadow rounded-3 p-3 border border-2'>
                    <img src={item.img} alt="" />
                </div>
                <div className='col shadow rounded-3 p-3 border border-2'>
                    <div>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                    </div>
                    <div className='d-flex justify-content-between align-content-center '>
                        <h3 className='text-muted'>Price</h3>
                        <h3>{item.price}</h3>
                    </div>

                    <div className='d-flex justify-content-between align-content-center '>
                        <h3 className='text-muted'>Quantity</h3>
                        <h3>{item.quantity}</h3>
                    </div>

                    <div className='d-flex justify-content-between align-content-center '>
                        <h3 className='text-muted'>Supplier</h3>
                        <h3>{item.supplier}</h3>
                    </div>
                    <div className='d-flex justify-content-between align-content-center '>
                        <h3 className='text-muted'>Sold</h3>
                        <h3>{item.sold}</h3>
                    </div>
                </div>
            </section>


            <section >

                <div className='my-5'>

                    <button onClick={handleDelivered} type="button" className="btn btn-dark rounded-pill px-5">Delivered</button>

                </div>

                <form onSubmit={handleUpdatedQuantity} class="input-group mb-3 w-75 mx-auto">

                    <input
                        type="number"
                        name='quantity'
                        className="form-control rounded-pill"
                        placeholder="Please add quantity"
                        aria-label=""
                        aria-describedby="button-addon2"
                    />

                    <button  className="btn btn-dark rounded-pill px-3" type="submit" id="button-addon2" data-mdb-ripple-color="dark">
                        Add Quantity
                    </button>

                </form>

            </section>

        </div>
    );
};

export default ItemDetails;