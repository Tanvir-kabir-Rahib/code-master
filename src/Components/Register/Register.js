import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Button, ButtonGroup, Form, FormGroup } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link,useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Register = () => {
    const [err, setErr] = useState(null)
    const { createUser, updateUser, providerLogin } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const nevigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        setErr(null)
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                form.reset()
                handleUpdateUser(name, photoURL)
                nevigate("/")
                toast.success("Successfully Registered.")
            })
            .catch(error => setErr(error.message))
    }
    const handleUpdateUser = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUser(profile)
            .then(() => { })
            .catch((error) => setErr(error.message))
    }
    const handleGoogleRegister = () => {
        providerLogin(googleProvider)
        .then(result => {
            setErr(null)
            nevigate("/")
            toast.success("Successfully Registered.")
        })
        .catch(error => setErr(error.message))
    }
    const handleGithubRegister = () =>{
        providerLogin(githubProvider)
        .then(result => {
            setErr(null)
            nevigate("/")
            toast.success("Successfully Registered.")
        })
        .catch(error => setErr(error.message))
    }
    return (
        <div className='form-container'>
            <Form onSubmit={handleSubmit} className='w-75 mx-auto mt-5'>
                <Form.Text className='fs-3 fw-semibold text-info'>
                    Please Register
                </Form.Text>
                <Form.Group className="my-3" controlId="formBasicname">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control name='name' className='py-2' type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="my-3" controlId="formBasicurl">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='photoURL' className='py-2' type="text" placeholder="Enter photo url" />
                </Form.Group>
                <Form.Group className="my-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' className='py-2' type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' className='py-2' type="password" placeholder="Password" />
                </Form.Group>
                <FormGroup className={err?"mb-3 mt-0":"d-none"}>
                    <Form.Text className="text-danger">
                        {err}.
                    </Form.Text>
                </FormGroup>
                <Button variant="info" type="submit" className='text-white fs-5 fw-semibold rounded-3 px-5'>
                    Register
                </Button>
                <p className='mt-2 '>Already have an account? <Link to="/login" className='text-info fw-semibold'>Login.</Link></p>
                <ButtonGroup vertical>
                <Button className='mb-3 d-flex align-items-center' variant='outline-primary' onClick={handleGoogleRegister}><FaGoogle className='me-1'/><span>Register with Google</span></Button>
                    <Button className='mb-3 d-flex align-items-center' variant='outline-dark' onClick={handleGithubRegister}><FaGithub className='me-1'/><span>Register with Github</span></Button>
                </ButtonGroup>
            </Form>
        </div>
    )
};

export default Register;