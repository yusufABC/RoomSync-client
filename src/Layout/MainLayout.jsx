import React, { use } from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import { AuthContext } from '../context/AuthContext';

const MainLayout = () => {
    const {theme}=use(AuthContext)
    return (
            <div id={theme} className='min-h-screen'>
            <Header />
            <div className={`max-w-11/12 mx-auto ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                <Outlet />
            </div>
           <Footer className={`${theme === 'dark' ? 'bg-neutral-900 text-white' : 'text-black'}`} />

        </div>
    );
};

export default MainLayout;