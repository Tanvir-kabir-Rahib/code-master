import React, { useState } from 'react';
import { Button, ButtonGroup, Form } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [err, setErr] = useState(null);
    return (
        <div className='form-container'>
            <Form className='w-75 mx-auto mt-5'>
                <Form.Text className='fs-3 fw-semibold text-info'>
                    Please Login
                </Form.Text>
                <Form.Group className="my-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' className='py-2' type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' className='py-2' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Text className="text-danger">
                    {err}.
                </Form.Text>
                <Button variant="info" type="submit" className='text-white fs-5 fw-semibold rounded-3 px-5'>
                    Login
                </Button>
                <p className='mt-2 '>New to Code Master? <Link to="/register" className='text-info fw-semibold'>Create New Account.</Link></p>
                <ButtonGroup>
                <Button className='me-3' variant='outline-primary'><FaGoogle /> Login with Google</Button>
                <Button className='me-3' variant='outline-dark'><FaGithub /> Login with Github</Button>
            </ButtonGroup>
            </Form>
        </div>
    );
};

export default Login;