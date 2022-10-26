import React, { useEffect, useState } from 'react';
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
            <h4>All Category</h4>
            {
                courses.map(course => <p key={course.id}><Link to={`/courses/${course.id}`}>{course.course_category}</Link></p>)
            }
        </div>
    );
};

export default LeftSideNav;