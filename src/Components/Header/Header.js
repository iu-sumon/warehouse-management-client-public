import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='color1'>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Nav.Link className='text-white fs-4' as={Link} to='/'>Electronics Store</Nav.Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto ">
                            <Nav.Link className='text-white' as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link className='text-white' as={Link} to='/items'>Items</Nav.Link>

                        </Nav>

                        <Nav>
                            <Nav.Link className='text-white' as={Link} to='/add-item'>Add Item</Nav.Link>
                            <Nav.Link className='text-white' as={Link} to='/manage-item'>Manage Item</Nav.Link>
                            <Nav.Link className='text-white' as={Link} to='/my-item'>My Item</Nav.Link>
                            <Nav.Link className='text-white' as={Link} to='/Login'>Login</Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;