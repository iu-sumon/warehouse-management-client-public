
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const MyItem = () => {

    const [user, loading] = useAuthState(auth);
    const [items, setItems] = useState([])



    if (loading) {
        <Loading></Loading>
    }
    let email;
    email = user?.email;


    useEffect(() => {
        const url = `https://safe-everglades-94363.herokuapp.com/myItems?email=${email}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItems(data)

            })
    }, [email])


    return (
        <div>
            <div class='py-5'>

                <table class="table align-middle mb-0 bg-white table-responsive " >
                    <thead class="fw-bold gradient-custom text-white shadow">
                        <tr>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                            <th>SUPPLIER</th>

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
                            </tr>
                            )
                        }

                    </tbody>
                </table>


            </div>
        </div>
    );
};

export default MyItem;
