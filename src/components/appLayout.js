import React from 'react'
import { Outlet } from 'react-router-dom';
import './style.css';
import Sidebar from './sidebar';

const AppLayout = () => {
    return (
        <div className='layoutContainer vh-100 vw-100'>
          <div className='p-3 innerContainer'>
          <div className='insideDrawerContainer'>
            <Sidebar />
          </div>
          <div className='outsideDrawerContainer'>
            <Outlet />
          </div>
          </div>
         
        </div>
      );
}

export default AppLayout