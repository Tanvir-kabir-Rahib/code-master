import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4000/courses")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (

        <div>
            <h4>All Courses</h4>
            <ButtonGroup vertical>
            {
                courses.map(course => <Link to={`/courses/${course.id}`}><Button variant='outline-dark' className='mb-3' key={course.id}>{course.course_category}</Button></Link>)
            }
            </ButtonGroup>
            
        </div>
    );
};

export default LeftSideNav;