import React from 'react';

function Header() {
    return (
        <header className='after:shadow-2xl after:shadow-red-500' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/header-bg.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='header-content flex items-end min-h-screen py-24 bg-black/60' style={{ boxShadow: '0px -20px 200px 50px #141414 inset' }}>
                <div className='container'>
                    <picture>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/header-hero.png`} alt='Header Hero' width={200} height={200} className='mx-auto mb-7' />
                    </picture>
                    <div className='text-content text-center'>
                        <h1 className='text-4xl font-bold mb-2'>The Best Streaming Experience</h1>
                        <p className='text-grey-color-60 md:mx-auto md:w-[700px] font-medium'>StreamVibe is the best streaming experience for watching your favorite movies and shows on
                            demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including
                            the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists,
                            so you can easily find the content you want to watch.</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;