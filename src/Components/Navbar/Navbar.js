import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    let link = 'font-bold text-blue-400'

    return (
        <div className='flex justify-center gap-4  bg-gray-100 p-4 text-xl font-semibold'>
            <NavLink to='/' className={({ isActive }) =>
                isActive ? link : undefined
            }>Home</NavLink>
            <NavLink to='/reviews' className={({ isActive }) =>
                isActive ? link : undefined
            }>Reviews</NavLink>
            <NavLink to='/dashboard' className={({ isActive }) =>
                isActive ? link : undefined
            }>Dashboard</NavLink>
            <NavLink to='/blogs' className={({ isActive }) =>
                isActive ? link : undefined
            }>Blogs</NavLink>
        </div>
    );
};

export default Navbar;