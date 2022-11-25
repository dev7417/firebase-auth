import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link, Outlet } from 'react-router-dom';

export default function Header() {
    return (
        <>
        <Navbar bg="dark" expand="lg" variant='dark'>
            <Container fluid>
                <Navbar.Brand href="#">Firebase Auth</Navbar.Brand>
                <NavLink to='account' style={{textDecoration:'none', color:'#fff',  fontSize:'20px'}}>Accounts</NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">

                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>  
                    </Nav>
                        <NavLink to='/'> <button className='btn btn-danger'>Login</button> </NavLink>
                        <NavLink to='/signup' className='px-2'> <button className='btn btn-danger'>signUp</button> </NavLink>
                        <NavLink to=''> <button className='btn btn-danger'>Log out</button> </NavLink>
                </Navbar.Collapse>
            </Container>
        </Navbar>
            <Outlet/>
            </>

    )
}
