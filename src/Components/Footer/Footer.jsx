import React from 'react';
import LinksComponent from './Components/LinksComponent';
import { Link, useNavigate } from 'react-router-dom';
// Lists of Links:
const homeLinks = [
    {
        attributes: {
            href: '/#devices'
        },
        label: 'Devices',
        sectionId: 'devices',
        pagePath: '/'
    },
    {
        attributes: {
            href: '/#faqs'
        },
        label: 'Faqs',
        sectionId: 'faqs',
        pagePath: '/'
    },
    {
        attributes: {
            href: '/#plans'
        },
        label: 'Plans',
        sectionId: 'plans',
        pagePath: '/'
    },
];
const moviesLinks = [
    {
        attributes: {
            href: '/#genres'
        },
        label: 'Genres',
        sectionId: 'genres',
        pagePath: '/movies'
    },
    {
        attributes: {
            href: '/#popular'
        },
        label: 'Popular',
        sectionId: 'popular',
        pagePath: '/movies'
    },
    {
        attributes: {
            href: '/#top-rated'
        },
        label: 'Top Rated',
        sectionId: 'top-rated',
        pagePath: '/movies'
    },
    {
        attributes: {
            href: '/#upcoming'
        },
        label: 'Upcoming',
        sectionId: 'upcoming',
        pagePath: '/movies'
    }
];
const showsLinks = [
    {
        attributes: {
            href: '/#genres'
        },
        label: 'Genres',
        sectionId: 'genres',
        pagePath: '/shows'
    },
    {
        attributes: {
            href: '/#popular'
        },
        label: 'Popular',
        sectionId: 'popular',
        pagePath: '/shows'
    },
    {
        attributes: {
            href: '/#top-rated'
        },
        label: 'Top Rated',
        sectionId: 'top-rated',
        pagePath: '/shows'
    },
    {
        attributes: {
            href: '/#on-air'
        },
        label: 'On The Air ',
        sectionId: 'on-air',
        pagePath: '/shows'
    }
];
const supportLinks = [
    {
        attributes: {
            href: '/#contact'
        },
        label: 'Contact Us',
        sectionId: 'contact',
        pagePath: '/contact'
    }
];
const subscriptionsLinks = [
    {
        attributes: {
            href: '/#plans'
        },
        label: 'Plans',
        sectionId: 'plans',
        pagePath: '/subscriptions'
    },
    {
        attributes: {
            href: '/#features'
        },
        label: 'Features',
        sectionId: 'features',
        page: '/subscriptions'
    }
];
const connectLinks = [
    {
        attributes: {
            href: 'https://www.facebook.com/sh3dowone1/',
            target: '_blank'
        },
        label: <i className="fa-brands fa-facebook fa-fw"></i>
    },
    {
        attributes: {
            href: 'https://x.com/sh3dowone1',
            target: '_blank'
        },
        label: <i className="fa-brands fa-x-twitter fa-fw"></i>
    },
    {
        attributes: {
            href: 'https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BWleFcRwDS%2F6A4uU7sO%2F0GA%3D%3D',
            target: '_blank'
        },
        label: <i className="fa-brands fa-linkedin fa-fw"></i>
    },
    {
        attributes: {
            href: 'https://www.instagram.com/sh3dowone1/',
            target: '_blank'
        },
        label: <i className="fa-brands fa-instagram fa-fw"></i>
    }
];

function Footer() {

    const navigate = useNavigate();

    const handleClick = (e, pagePath, sectionId) => {
        e.preventDefault();
        navigate(pagePath);
        setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 0);
    };

    return (
        <footer className='bg-black-color-6 py-7'>
            <div className='container'>
                {/* Content Gird */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 mb-3'>
                    {/* Home Links */}
                    <LinksComponent
                        title={`Home`}
                        linksData={homeLinks.map(link => {
                            return { ...link, attributes: { ...link.attributes, onClick: e => handleClick(e, link.pagePath, link.sectionId) } }
                        })}
                    />
                    {/* Movies Links */}
                    <LinksComponent
                        title={`Movies`}
                        linksData={moviesLinks.map(link => {
                            return { ...link, attributes: { ...link.attributes, onClick: e => handleClick(e, link.pagePath, link.sectionId) } }
                        })}
                    />
                    {/* Shows Links */}
                    <LinksComponent
                        title={`Shows`}
                        linksData={showsLinks.map(link => {
                            return { ...link, attributes: { ...link.attributes, onClick: e => handleClick(e, link.pagePath, link.sectionId) } }
                        })}
                    />
                    {/* Support Links */}
                    <LinksComponent
                        title={`Support`}
                        linksData={supportLinks.map(link => {
                            return { ...link, attributes: { ...link.attributes, onClick: e => handleClick(e, link.pagePath, link.sectionId) } }
                        })}
                    />
                    {/* Subscription Links */}
                    <LinksComponent
                        title={`Subscription`}
                        linksData={subscriptionsLinks.map(link => {
                            return { ...link, attributes: { ...link.attributes, onClick: e => handleClick(e, link.pagePath, link.sectionId) } }
                        })}
                    />
                    {/* Connect Links */}
                    <LinksComponent
                        title={`Connect With Us`}
                        listClassName={'flex items-center gap-3'}
                        linksData={connectLinks.map(link => {
                            return { ...link, attributes: { ...link.attributes, className: 'text-2xl' } }
                        })}
                    />
                </div>
                {/* Copy Right */}
                <div className='copyright py-3 border-t border-t-black-color-15 text-grey-color-60 flex items-center justify-between gap-y-3 max-md:flex-col'>
                    <p>@2025 streamvib, All Rights Reserved</p>
                    <ul className='flex items-center gap-3 max-md:flex-col'>
                        <li>
                            <Link
                                to={''}
                                className='sm:hover:text-white transition-colors'
                            >
                                Terms of Use
                            </Link>
                        </li>
                        <li className='max-md:hidden'>
                            |
                        </li>
                        <li>
                            <Link
                                to={''}
                                className='sm:hover:text-white transition-colors'
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li className='max-md:hidden'>
                            |
                        </li>
                        <li>
                            <Link
                                to={''}
                                className='sm:hover:text-white transition-colors'
                            >
                                Cookie Policy
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;