import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    const course = useLoaderData()
    return (
        <div>
            <h1>This is course deatails {course.id}</h1>
        </div>
    );
};

export default Course;