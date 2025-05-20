import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
           <NavLink to={'/signup'}>Sign UP</NavLink>
        </div>
    );
};

export default Header;