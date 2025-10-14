import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    return (
        <div className='bg-[#f7f7f7]'>
         <Navbar></Navbar>
         <Outlet></Outlet>
         <Footer></Footer>
        </div>
    );
};

export default Root;