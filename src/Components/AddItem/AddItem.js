import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const AddItem = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [sold, setSold] = useState("");
  const [supplier, setSupplier] = useState("");

  const [user, loading] = useAuthState(auth);
  let email;
  if (loading) {
    return <Loading></Loading>;
  }
  email = user.email;
  console.log(email);
  const handleAddItem = async (event) => {
    event.preventDefault();
    const addItem = {
      name,
      email,
      img,
      price,
      quantity,
      sold,
      description,
      supplier,
    };

    fetch(
      `https://warehouse-management-server-public-iu-sumon.vercel.app/items`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addItem),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        toast("Item Added Successfully");
        console.log(result);
      });
    event.target.reset();
  };

  return (
    <div>
      <section className="" style={{ backgroundColor: "#9A616D" }}>
        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={handleAddItem}>
                        <div className="form-outline">
                          <label
                            className="form-label fw-bold"
                            for="form2Example17"
                          >
                            Item Name
                          </label>
                          <input
                            onBlur={(e) => setName(e.target.value)}
                            type="name"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            required
                          />
                        </div>
                        <div className="form-outline">
                          <label
                            className="form-label fw-bold"
                            for="form2Example17"
                          >
                            Item Description
                          </label>
                          <input
                            onBlur={(e) => setDescription(e.target.value)}
                            type="description"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            required
                          />
                        </div>
                        <div className="form-outline">
                          <label
                            className="form-label fw-bold"
                            for="form2Example17"
                          >
                            Item Image URL
                          </label>
                          <input
                            onBlur={(e) => setImg(e.target.value)}
                            type="img"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            required
                          />
                        </div>
                        <div className="form-outline">
                          <label
                            className="form-label fw-bold"
                            for="form2Example17"
                          >
                            Item Price
                          </label>
                          <input
                            onBlur={(e) => setPrice(e.target.value)}
                            type="price"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            required
                          />
                        </div>
                        <div className="form-outline">
                          <label
                            className="form-label fw-bold"
                            for="form2Example17"
                          >
                            Item Quantity
                          </label>
                          <input
                            onBlur={(e) => setQuantity(e.target.value)}
                            type="quantity"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            required
                          />
                        </div>

                        <div className="form-outline">
                          <label
                            className="form-label fw-bold"
                            for="form2Example27"
                          >
                            Item Sold
                          </label>
                          <input
                            onBlur={(e) => setSold(e.target.value)}
                            type="sold"
                            id="form2Example27"
                            className="form-control form-control-lg"
                            required
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label fw-bold"
                            for="form2Example27"
                          >
                            Item Supplier
                          </label>
                          <input
                            onBlur={(e) => setSupplier(e.target.value)}
                            type="supplier"
                            id="form2Example27"
                            className="form-control form-control-lg"
                            required
                          />
                        </div>

                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark px-5 rounded-pill"
                            type="submit"
                          >
                            ADD
                          </button>
                        </div>
                      </form>
                      <ToastContainer></ToastContainer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddItem;
