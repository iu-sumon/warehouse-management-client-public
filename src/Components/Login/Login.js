import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
        <section class="gradient-custom">
            <h1 className='pt-5 text-white'>Hello ! Welcome back.</h1>
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                            <div class="card-body p-5 text-center">

                                <div class="mb-md-2 mt-md-4 pb-5">

                                    <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                                    <p class="text-white-50 mb-5">Please enter your login and password!</p>

                                    <div class="form-outline form-white mb-4">
                                        <input type="email" id="typeEmailX" class="form-control form-control-lg" />
                                        <label class="form-label" for="typeEmailX">Email</label>
                                    </div>

                                    <div class="form-outline form-white mb-3">
                                        <input type="password" id="typePasswordX" class="form-control form-control-lg" />
                                        <label class="form-label" for="typePasswordX">Password</label>
                                    </div>

                                    <p class="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

                                    <button class="btn btn-outline-light btn-lg px-5 mb-3" type="submit">Login</button>
                                    <div>
                                        <p class="mb-0">Don't have an account? <Link to="/signup" class="text-white-50 fw-bold">Sign Up</Link>
                                        </p>
                                    </div>


                                </div>
                                <hr />
                                <div class="d-flex justify-content-center text-center mt-4 pt-1">
                                    <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                                    <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                    <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;