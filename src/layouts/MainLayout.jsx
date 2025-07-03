import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
           <NavBar></NavBar>
           <div className="flex-grow mb-10">
            <Outlet></Outlet>
           </div>
           
        </div>
    );
};

export default MainLayout;