import React from 'react';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SocialLink = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    const navigate = useNavigate()

    if (googleLoading || facebookLoading) {
        return <Loading></Loading>
    }
    if (googleUser || facebookUser) {
        navigate('/')
    }
    let getError;
    if (googleError || facebookError) {

        getError = <p>Error:{googleError?.message} {facebookError?.message}</p>
    }
    if (getError) {
        toast(getError)
    }
    return (
        <div>
            <hr />
            <div className="d-flex justify-content-center text-center mt-2 pt-1">
                <div className="mb-3">

                    <button onClick={() => signInWithFacebook()} type="button" className="btn btn-primary btn-floating mx-1">
                        <i className="fab fa-facebook-f"></i>
                    </button>

                    <button onClick={() => signInWithGoogle()} type="button" className="btn btn-primary btn-floating mx-1">
                        <i className="fab fa-google"></i>
                    </button>

                    <button type="button" className="btn btn-primary btn-floating mx-1">
                        <i className="fab fa-twitter"></i>
                    </button>

                    <button type="button" className="btn btn-primary btn-floating mx-1">
                        <i className="fab fa-github"></i>
                    </button>
                </div>

            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SocialLink;