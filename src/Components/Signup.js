import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css'
import { auth } from '../Firebase';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
export default function Signup() {
    const [name, setName] = useState();
    console.log(name)
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const auth = getAuth()

    // Creating authentication in Firebase
    const onSignup = async (e) => {
        e.preventDefault()
        await createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log(user)
            }).catch((err) => {
                console.log(err)
            })
        setEmail('');
        setPassword('');
        setName('');
    }
    return (

        <div className="container d-flex justify-content-center align-items-center main">
            <div className="form">
                <div className="main-form">
                    <Form onSubmit={onSignup}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                        </Form.Group>
                        <Button variant="danger" className='mx-auto d-flex btn' type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}
