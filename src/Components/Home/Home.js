import React from 'react';
import { Container } from 'react-bootstrap';

const Home = () => {
    return (
        <Container>
            <h2 className='mb-5'>Welcome to Code <span className='text-info'>Master</span></h2>
            <div>
                <h3>
                Start Your Coding Journey with us.
                </h3>
                <div className='d-flex my-5'>
                    <div className="mx-auto">
                        <h2>Learn to <span className='text-info'>Code</span></h2>
                        <h2>Gain <span className='text-info'>Skills</span> With Us.</h2>
                        <h4>Code master is your best parter in your coding journey. Join with us and get the best mentors here.</h4>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Home;