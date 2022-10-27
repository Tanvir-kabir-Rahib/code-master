import React from 'react';
import { Link } from 'react-router-dom';
import notfound404 from "../../media/picture/404-not-found.webp"
import "./NotFound.css"

const NotFound = () => {
    return (
        <div className='d-flex flex-column align-items-center'>            
            <p className='fs-1 fw-bold'>Page Not Found</p>
            <img className='notfound-img' src={notfound404} alt=""/>
            <p className='fs-3 fw-semibold'>Return to <Link to="/" className='text-info'>Code Master</Link></p>
        </div>
    );
};

export default NotFound;