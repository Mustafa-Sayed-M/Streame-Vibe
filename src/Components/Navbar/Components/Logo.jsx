import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
    return (
        <Link to='/' className='block'>
            <picture>
                <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt='App Logo' width={160} />
            </picture>
        </Link>
    )
}

export default Logo;