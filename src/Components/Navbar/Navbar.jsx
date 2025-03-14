import React from 'react';
import Logo from './Components/Logo';
import NavLinks from './Components/NavLinks';
import { NavLink, useLocation } from 'react-router-dom';

function Navbar() {

    const { pathname } = useLocation();

    return (
        <nav className={`navbar z-50 ${pathname === '/' ? 'absolute w-full' : 'sticky top-0 bg-black-color-8'}`}>
            <div className='container py-3 min-h-[60px] flex items-center justify-between'>
                {/* Logo */}
                <Logo />
                {/* Nav Links */}
                <NavLinks />
                {/*  */}
                <div className='flex items-center gap-3 text-xl'>
                    {/* Search */}
                    <NavLink
                        to={'/search'}
                        title='Go to Search'
                        className={({ isActive }) => `transition ${isActive ? 'text-red-color-45' : 'sm:hover:text-red-color-45'}`}
                    >
                        <i className="fa-solid fa-magnifying-glass fa-fw"></i>
                    </NavLink>
                    {/* Notifications */}
                    <button
                        type='button'
                        title='Notifications'
                        aria-label='Notifications'
                        className='sm:hover:text-red-color-45'
                    >
                        <i className="fa-solid fa-bell fa-fw"></i>
                    </button>
                    {/* Menu Toggler */}
                    <button
                        type='button'
                        aria-label='Menu Toggler'
                        className='sm:hover:text-red-color-45 text-2xl lg:hidden'
                    >
                        <i className="fa-solid fa-bars fa-fw"></i>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;