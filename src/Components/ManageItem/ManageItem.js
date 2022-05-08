import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ManageItem = () => {
    const [items, setItems] = useItems()

    const handleDeleteItem = id => {

        const proceed = window.confirm('Are you sure?')

        if (proceed) {

            const url = `https://safe-everglades-94363.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = items.filter(item => item._id !== id)

                    setItems(remaining)
                    toast('Deleted Successfully!')

                })


        }

    }
    return (
        <div>
            <div class='py-5'>
                <Link class='btn btn-dark px-5 rounded-pill mb-3' to="/add-item">ADD NEW ITEM</Link>
                <table class="table align-middle mb-0 bg-white table-responsive " >
                    <thead class="fw-bold gradient-custom text-white shadow">
                        <tr>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                            <th>SUPPLIER</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            items.map(item => <tr style={{ backgroundColor: "#013C", color: "white" }} key={item._id}>
                                <td>
                                    <div class="d-flex   align-items-center">
                                        <img
                                            class='rounded-pill'
                                            src={item.img}
                                            alt=""
                                            style={{ width: "45px", height: "45px" }}

                                        />
                                        <div class="ms-3">
                                            <p class="fw-bold mb-1">{item.name}</p>

                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <p class="fw-bold  mb-1">{item.price}</p>

                                </td>
                                <td>
                                    <p class="fw-bold mb-1">{item.quantity}</p>

                                </td>
                                <td>
                                    <p class="fw-bold mb-1">{item.supplier}</p>

                                </td>

                                <td>
                                    <button onClick={() => handleDeleteItem(item._id)} type="button" class="btn btn-dark btn-sm rounded-pill">
                                        <i class="fa-solid fa-trash"></i>
                                    </button>
                                </td>

                            </tr>
                            )
                        }

                    </tbody>
                </table>

                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default ManageItem;