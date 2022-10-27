import React from 'react';
import { Button } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { FaCrown, FaCheck } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Premium = () => {
    const navigate = useNavigate()
    const handleAccess = () => {
        navigate("/courses")
        toast.success("Accessed as a Premium Member")
    }
    return (
        <div className='text-center border border-3 w-50 mx-auto py-5 rounded-5 mb-5'>
            <div className='d-flex align-items-center justify-content-center'>
                <FaCrown className='fs-1 me-2 text-warning'></FaCrown>
                <span className='fs-2 fw-semibold text-success'>Get Premium Access</span>
            </div>
            <div className='bg-info text-white py-5 w-50 mx-auto rounded-5 my-4'>
                <span className='fs-1'>$9.99/</span><spam>month</spam>
            </div>
            <div>
                <p className=''><FaCheck className='text-primary me-2'></FaCheck>Life Time Membership.</p>
                <p className=''><FaCheck className='text-primary me-2'></FaCheck>Access to All Courses</p>
                <p className=''><FaCheck className='text-primary me-2'></FaCheck>Course Video Download Access</p>
                <p className=''><FaCheck className='text-primary me-2'></FaCheck>Exam Access</p>
                <p className=''><FaCheck className='text-primary me-2'></FaCheck>Cirtificate</p>
            </div>
            <Button  onClick={handleAccess} variant='info' className='px-4 d-flex align-items-center mx-auto'><FaCrown className='text-warning me-2 fs-5'></FaCrown><span className='fw-semibold text-white'>Access Premium</span></Button>
        </div>
    );
};

export default Premium;