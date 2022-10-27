import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaCrown } from "react-icons/fa";
import "./CourseDetails.css"

const CourseDetails = () => {
    const course = useLoaderData()
    const handlePdf = () => {
        console.log("pdf")
    }
    return (
        <div>
            <div className='d-flex justify-content-between align-items-center'>
            <h2 className='mb-4'>{course.course_category} Course</h2>
            <Button variant='primary' className='fw-semibold px-3' onClick={handlePdf}>Generate PDF</Button>
            </div>
            <Card>
                <Card.Img variant="top" className='course-banner' src={course.img_url} />
                <Card.Body>
                    <Card.Title className='fs-3'>
                        {course.course_name}
                    </Card.Title>
                    <Card.Text>
                        {course.details}
                    </Card.Text>
                    <Link className='text-decoration-none' to={`/premium`}><Button variant="info" className='text-white fw-semibold btn-lg px-5 d-flex align-items-center'><FaCrown className='fs-4 me-2 text-warning'></FaCrown><span className='fw-semibold'>Get Premium</span></Button></Link>
                </Card.Body>
            </Card>

        </div>
    );
};

export default CourseDetails;