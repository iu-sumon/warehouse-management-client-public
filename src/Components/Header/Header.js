import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='color1'>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Nav.Link className='text-white fs-4' as={Link} to='/'>TecDen WareHouse</Nav.Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto">

                            <CustomLink className='text-decoration-none me-3' to='/'>Home</CustomLink>
                            <CustomLink className='text-decoration-none' to='/items'>Items</CustomLink>

                        </Nav>

                        <Nav>
                            <CustomLink className='text-decoration-none me-3' to='/add-item'>Add Item</CustomLink>
                            <CustomLink className='text-decoration-none me-3' to='/manage-item'>Manage Item</CustomLink>
                            <CustomLink className='text-decoration-none me-3' to='/my-item'>My Item</CustomLink>
                            <CustomLink className='text-decoration-none me-3' to='/blogs'>Blogs</CustomLink>
                            {user ?

                                <CustomLink onClick={() => signOut(auth)}  className='text-decoration-none' to='/Login'>SignOut</CustomLink> 
                                :
                                <CustomLink className='text-decoration-none' to='/Login'>Login</CustomLink>}


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;