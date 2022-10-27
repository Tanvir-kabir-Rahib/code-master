import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Course.css"

const Course = ({ course }) => {
    return (
        <Col lg={6} sm={12}>
            <Card>
                <Card.Img variant="top" className='img-fluid course-img' src={course.img_url} />
                <Card.Body>
                    <Card.Header className='border-0 px-2 mb-2'>{course.course_category}</Card.Header>
                    <Card.Title>{course.course_name}</Card.Title>
                    <Card.Text>
                        {course.details.slice(0, 250) + "..."}
                    </Card.Text>
                    <Link to={`/courses/${course.id}`}><Button variant="info" className='text-white fw-semibold'>Show Details</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Course;