import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../../Components/Shared/LeftSideNav/LeftSideNav';

const CourseLayout = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={2} sm={12}>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg={10} sm={12}>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CourseLayout;