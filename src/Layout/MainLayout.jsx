import React, { use } from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import { AuthContext } from '../context/AuthContext';

const MainLayout = () => {
    const {theme}=use(AuthContext)
    return (
        <div id={theme}>
            <div className='max-w-11/12 mx-auto ' >

            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;