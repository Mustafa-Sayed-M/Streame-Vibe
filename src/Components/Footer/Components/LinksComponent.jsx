import React from 'react';

function LinksComponent({ title, linksData, listClassName }) {
    return (
        <div className='links-component'>
            <h3 className='font-semibold text-xl mb-3'>{title}</h3>
            <ul className={listClassName}>
                {
                    linksData.map((link, index) => <li key={index}>
                        <a
                            {...link.attributes}
                            className={`text-grey-color-60 transition-colors sm:hover:text-white block w-fit py-0.5 ${link.attributes.className}`}
                        >
                            <span className='sr-only'>{link.attributes.href}</span>
                            {link.label}
                        </a>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default LinksComponent;