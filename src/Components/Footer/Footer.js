import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <footer className="color1 text-white text-center text-lg-start ">

            <div className="container p-4">
                <div className='d-flex justify-content-between align-items-center flex-md-row flex-sm-column flex-column'>

                    <div  >
                        <h1>Newsletter</h1>
                        <p>Excepteur sint occaecat cupidatat non proident,sunt</p>
                    </div>

                    <div  >
                        <div className="input-group">
                            <div className="form-outline">
                                <input id="search-focus" type="search" className="form-control" placeholder='Email' />

                            </div>
                            <button type="button" className="btn btn-primary">
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>

<hr />
                <div className="row mt-5">


                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase fs-6">Contact</h5>

                        <ul className="list-unstyled mb-0">
                            <li>
                                <i className="fa-solid fa-location-dot"></i>
                                <Link to="/" className=" ps-1 text-white text-decoration-none">1234k Avenue, 4th block,
                                    New York City.</Link>
                            </li>
                            <li><i className="fa-regular fa-message"></i>
                                <Link to="/" className=" ps-1 text-white text-decoration-none">info@example.com</Link>
                            </li>
                            <li><i className="fa-solid fa-phone"></i>
                                <Link to="/" className="ps-1 text-white text-decoration-none">+1234 567 567</Link>
                            </li>

                        </ul>
                    </div>



                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-0 fs-6">Information</h5>

                        <ul className="list-unstyled ">
                            <li><i className="fa-solid fa-arrow-right"></i>
                                <Link to="/" className="ps-1 text-white text-decoration-none">About Us</Link>
                            </li>
                            <li><i className="fa-solid fa-arrow-right"></i>
                                <Link to="/" className="ps-1  text-white text-decoration-none">Contact Us</Link>
                            </li>
                            <li><i className="fa-solid fa-arrow-right"></i>
                                <Link to="/" className="ps-1  text-white text-decoration-none">FAQ's</Link>
                            </li>
                            <li><i className="fa-solid fa-arrow-right"></i>
                                <Link to="/" className="text-white text-decoration-none ps-1 ">Special Items</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-0 fs-6">Category</h5>

                        <ul className="list-unstyled ">
                            <li><i className="fa-solid fa-arrow-right"></i>
                                <Link to="/" className="text-white text-decoration-none ps-1 ">Mobiles</Link>
                            </li>
                            <li><i className="fa-solid fa-arrow-right"></i>
                                <Link to="/" className="text-white text-decoration-none ps-1 ">Laptops</Link>
                            </li>
                            <li><i className="fa-solid fa-arrow-right"></i>
                                <Link to="/" className="text-white text-decoration-none ps-1 ">Purifiers</Link>
                            </li>
                            <li><i className="fa-solid fa-arrow-right"></i>
                                <Link to="/" className="text-white text-decoration-none ps-1 ">Wearables</Link>
                            </li>
                            <li><i className="fa-solid fa-arrow-right"></i>
                                <Link to="/" className="text-white text-decoration-none ps-1 ">Kitchen</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-0 fs-6">Follow Us</h5>



                        <section className="mb-4">

                            <Link
                                className="btn btn-primary btn-floating m-1"
                                style={{ backgroundColor: "#3b5998" }}
                                to="#!"
                                role="button"
                            ><i className="fab fa-facebook-f"></i
                            ></Link>

                            <Link
                                className="btn btn-primary btn-floating m-1"
                                style={{ backgroundColor: "#55acee" }}
                                to="#!"
                                role="button"
                            ><i className="fab fa-twitter"></i
                            ></Link>


                            <Link
                                className="btn btn-primary btn-floating m-1"

                                style={{ backgroundColor: "#dd4b39" }}
                                to="#!"
                                role="button"
                            ><i className="fab fa-google"></i
                            ></Link>


                            <Link
                                className="btn btn-primary btn-floating m-1"

                                style={{ backgroundColor: "#ac2bac" }}
                                to="#!"
                                role="button"
                            ><i className="fab fa-instagram"></i
                            ></Link>


                            <Link
                                className="btn btn-primary btn-floating m-1"

                                style={{ backgroundColor: "#0082ca" }}
                                to="#!"
                                role="button"
                            ><i className="fab fa-linkedin-in"></i
                            ></Link>

                            <Link
                                className="btn btn-primary btn-floating m-1"

                                style={{ backgroundColor: "#333333" }}
                                to="#!"
                                role="button"
                            ><i className="fab fa-github"></i
                            ></Link>
                        </section>



                    </div>

                </div>

            </div>



            <div className="text-center p-3 color2">
                © 2022 Copyright
                <Link className="ps-1 text-white text-decoration-none" to="/">TecDen WareHouse</Link>
            </div>

        </footer>
    );
};

export default Footer;