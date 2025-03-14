import React from 'react';
import { Link } from 'react-router-dom';

function Subscribe() {
    return (
        <div className='subscribe py-10'>
            <div className='container'>
                <div
                    style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/subscribe-bg.png)`,
                    }}
                    className='subscribe-content rounded-md overflow-hidden'
                >
                    <div className='content-overlay min-h-[200px] bg-gradient-to-r from-[#0F0F0F] to-[#E50000]/50 h-full flex items-center justify-between gap-3 p-5 max-md:flex-col'>
                        <div className='text-content'>
                            <h2 className='font-bold text-3xl mb-2'>Start your free trial today!</h2>
                            <p className='text-grey-color-60'>This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
                        </div>
                        <Link
                            to={'/subscriptions'}
                            className='block py-2 px-4 rounded-md bg-red-color-45 shadow-md text-nowrap max-md:w-full max-md:text-center'
                        >
                            Start a Free Trail
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe;