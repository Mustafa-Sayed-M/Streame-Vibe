import React from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/movies', label: 'Movies' },
    { to: '/shows', label: 'Shows' },
    { to: '/support', label: 'Support' },
    { to: '/subscriptions', label: 'Subscriptions' },
]

function NavLinks() {
    return (
        <ul className='max-lg:hidden flex items-center gap-1 bg-black-color-6 p-2 rounded-md border-2 border-black-color-12'>
            {
                navLinks.map((link, index) => <li key={index}>
                    <NavLink
                        title={`Go to ${link.label}`}
                        to={link.to}
                        className={({ isActive }) => `transition block py-2 px-4 rounded-md ${isActive ? 'bg-black-color-10' : 'sm:hover:bg-black-color-10'}`}
                    >
                        {link.label}
                    </NavLink>
                </li>)
            }
        </ul>
    )
}

export default NavLinks;