import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLink from '../SocialLink/SocialLink';


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [signInWithEmailAndPassword, user, loading, signInError] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();


    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate('/')
    }

    let getSignInError;
    let getResetError;

    if (signInError) {
        getSignInError = <p>Error:{signInError?.message}</p>
    }
    if (resetError) {
        getResetError = <p>Error:{resetError?.message}</p>
    }

    if (getSignInError) {
        toast(getSignInError)
    }
    if (getResetError) {
        toast(getResetError)
    }


    const handleLogin = async (event) => {
        event.preventDefault()
        await signInWithEmailAndPassword(email, password)
    }


    const handleResetPassword = async () => {

        if (email) {
            await sendPasswordResetEmail(email);
            toast('Thanks for your request.Please check your email address');
        }
        else {
            toast('Please send your email address')
        }

    }

    return (
        <section className="gradient-custom">
            <h1 className='pt-5 text-white fs-3'>Hello ! Welcome back.</h1>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                            <div className="card-body text-center">

                                <div className="mb-md-2 mt-md-4 pb-3">

                                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                    <p className="text-white-50 ">Please enter your login and password!</p>

                                    <form onSubmit={handleLogin}>
                                        <div className="form-outline form-white mb-4">
                                            <input onBlur={(e) => setEmail(e.target.value)} type="email" id="typeEmailX" className="form-control form-control-lg" required />
                                            <label className="form-label" for="typeEmailX">Email</label>
                                        </div>

                                        <div className="form-outline form-white mb-3">
                                            <input onBlur={(e) => setPassword(e.target.value)} type="password" id="typePasswordX" className="form-control form-control-lg" required />
                                            <label className="form-label" for="typePasswordX">Password</label>
                                        </div>

                                        <p onClick={handleResetPassword} className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                                        <button className="btn btn-outline-light btn-lg px-5 mb-3" type="submit">Login</button>
                                        <div>
                                            <p className="mb-0">Don't have an account? <Link to="/signup" className="text-white-50 fw-bold">Sign Up</Link>
                                            </p>
                                        </div>

                                    </form>

                                </div>
                                <SocialLink></SocialLink>
                                <ToastContainer></ToastContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;