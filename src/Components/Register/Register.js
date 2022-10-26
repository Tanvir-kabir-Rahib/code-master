import React, { useState } from 'react';
import { Button, ButtonGroup, Form } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
    const [err, setErr] = useState(null);
    return (
        <div className='form-container'>
            <Form className='w-75 mx-auto mt-5'>
                <Form.Text className='fs-3 fw-semibold text-info'>
                    Please Register
                </Form.Text>
                <Form.Group className="my-3" controlId="formBasicname">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control className='py-2' type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="my-3" controlId="formBasicurl">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control className='py-2' type="text" placeholder="Enter photo url" />
                </Form.Group>
                <Form.Group className="my-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='py-2' type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='py-2' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Text className="text-danger">
                    {err}.
                </Form.Text>
                <Button variant="info" type="submit" className='text-white fs-5 fw-semibold rounded-3 px-5'>
                    Register
                </Button>
                <p className='mt-2 '>Already have an account? <Link to="/login" className='text-info fw-semibold'>Login.</Link></p>
                <ButtonGroup>
                <Button className='me-3' variant='outline-primary'><FaGoogle /> Register with Google</Button>
                <Button className='me-3' variant='outline-dark'><FaGithub /> Register with Github</Button>
            </ButtonGroup>
            </Form>
        </div>
    ) 
};

export default Register;