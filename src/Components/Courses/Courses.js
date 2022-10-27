import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData()
    return (
        <Row className='g-4'>
            {
                courses.map(course => <Course key={course.id} course={course}></Course>)
            }
        </Row>
    );
};

export default Courses;