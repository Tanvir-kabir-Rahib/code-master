import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch("https://code-master-server-alt.vercel.app/courses")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className='mb-5'>
            <h4>All Courses</h4>
            <ButtonGroup vertical>
            {
                courses.map(course => <Link to={`/courses/${course.id}`} key={course.id}><Button variant='outline-dark' className='mb-3'>{course.course_category}</Button></Link>)
            }
            </ButtonGroup>
            
        </div>
    );
};

export default LeftSideNav;