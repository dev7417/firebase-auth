import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { sendData } from '../Redux/Actions/Action';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState()
    const auth = getAuth()
    const dispatch = useDispatch()


    const onLogin = async (e) => {
        e.preventDefault();
        const result = await signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log(user)
                dispatch(sendData(user))
            }).catch((err) => {
                console.log(err)
            })
        setEmail('');
        setPassword('');

    }


    return (
        <div className="container d-flex justify-content-center align-items-center main">
            <div className="form">
                <div className="main-form">
                    <Form onSubmit={onLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{ fontWeight: 'bold' }}>Email address</Form.Label>
                            <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label style={{ fontWeight: 'bold' }}>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
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
