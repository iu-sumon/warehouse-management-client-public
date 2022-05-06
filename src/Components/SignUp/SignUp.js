import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useState } from 'react';
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLink from '../SocialLink/SocialLink';


const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const [createUserWithEmailAndPassword, loading, createError] = useCreateUserWithEmailAndPassword(auth, { emailVerificationOptions: true });
    const [updateProfile, updating, updatingError] = useUpdateProfile(auth);

    const navigate = useNavigate()


    if (error) {
        toast(error)
    }


    if (loading || updating) {
        return <Loading></Loading>
    }



    let getCreateError;
    let getUpdatingError;

    if (createError) {
        getCreateError = <p>Error:{createError?.message}</p>
    }
    if (updatingError) {
        getUpdatingError = <p>Error:{updatingError?.message}</p>
    }

    if (getUpdatingError) {
        toast(getUpdatingError)
    }
    if (getCreateError) {
        toast(getCreateError)
    }


    const handleSignUp = async (event) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            setError('Password did not match!')
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 character or longer.')
            return;
        }
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name })
        navigate('/')

    }



    return (
        <section className="gradient-custom">
            <h1 className='pt-5 text-white fs-3'>Please Create Your Account and Stay With us</h1>
            <div className="container py-5">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                            <div className="card-body p-5 text-center">

                                <div className="mb-md-2 pb-3">

                                    <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                                    <p className="text-white-50 mb-3">Please enter your information!</p>

                                    <form onSubmit={handleSignUp}>

                                        <div className="form-outline form-white mb-2">
                                            <input onBlur={(e) => setName(e.target.value)} type="name" id="typeNameX" className="form-control form-control-lg" required />
                                            <label className="form-label" for="typeNameX">Name</label>
                                        </div>
                                        <div className="form-outline form-white mb-2">
                                            <input onBlur={(e) => setEmail(e.target.value)} type="email" id="typeEmailX" className="form-control form-control-lg " required />
                                            <label className="form-label" for="typeEmailX">Email</label>
                                        </div>

                                        <div className="form-outline form-white mb-2">
                                            <input onBlur={(e) => setPassword(e.target.value)} type="password" id="typePasswordX" className="form-control form-control-lg" required />
                                            <label className="form-label" for="typePasswordX">Password</label>
                                        </div>
                                        <div className="form-outline form-white mb-2">
                                            <input onBlur={(e) => setConfirmPassword(e.target.value)} type="password" id="typePasswordX" className="form-control form-control-lg" required />
                                            <label className="form-label" for="typePasswordX">Confirm Password</label>
                                        </div>

                                        <div className="form-check d-flex justify-content-center mb-3">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" required />
                                            <label className="form-check-label" for="form2Example3g">
                                                I agree all statements in  Terms of service
                                            </label>
                                        </div>
                                        <button className="btn btn-outline-light btn-lg px-5 mb-3" type="submit">Sign Up</button>
                                        <div>
                                            <p className="mb-0">Already have an account? <Link to="/login" className="text-white-50 fw-bold">Login</Link>
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

export default SignUp;