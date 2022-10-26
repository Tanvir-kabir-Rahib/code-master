import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../../Components/Shared/LeftSideNav/LeftSideNav';

const CourseLayout = () => {
    return (
        <div>
            <LeftSideNav></LeftSideNav>
            <Outlet></Outlet>
        </div>
    );
};

export default CourseLayout;