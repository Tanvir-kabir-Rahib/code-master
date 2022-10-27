import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Button, ButtonGroup, Form, FormGroup } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import './Login.css';

const Login = () => {
    const [err, setErr] = useState(null)
    const { login, setLoading, providerLogin } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(result => {
                setErr(null)
                form.reset()
                navigate(from, { replace: true })
                toast.success("Successfully Logged In.")

            })
            .catch(error => setErr(error.message))
            .finally(() => {
                setLoading(false)
            })
    }
    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                setErr(null)
                navigate(from, { replace: true })
                toast.success("Successfully Logged In.")
            })
            .catch(error => setErr(error.message))
    }
    const handleGithubLogin = () => {
        providerLogin(githubProvider)
            .then(result => {
                setErr(null)
                navigate(from, { replace: true })
                toast.success("Successfully Logged In.")
            })
            .catch(error => setErr(error.message))
    }
    return (
        <div className='heighter'>
            <div className='form-container'>
            <Form onSubmit={handleLogin} className='w-75 mx-auto mt-5'>
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
                <FormGroup className={err ? "mb-3 mt-0" : "d-none"}>
                    <Form.Text className="text-danger">
                        {err}.
                    </Form.Text>
                </FormGroup>
                <Button variant="info" type="submit" className='text-white fs-5 fw-semibold rounded-3 px-5'>
                    Login
                </Button>
                <p className='mt-2 '>New to Code Master? <Link to="/register" className='text-info fw-semibold'>Create New Account.</Link></p>
                <ButtonGroup vertical>
                    <Button className='mb-3 d-flex align-items-center' variant='outline-primary' onClick={handleGoogleLogin}><FaGoogle className='me-1'/><span>Login with Google</span></Button>
                    <Button className='mb-3 d-flex align-items-center' variant='outline-dark' onClick={handleGithubLogin}><FaGithub className='me-1'/><span>Login with Github</span></Button>
                </ButtonGroup>
            </Form>
        </div>
        </div>
    );
};

export default Login;