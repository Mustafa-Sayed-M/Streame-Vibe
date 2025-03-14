import React from 'react';

function SectionHeader({ title, description, children }) {
    return (
        <div className='section-header mb-10 flex items-center gap-5 max-md:flex-col max-md:items-start'>
            <div className='text-content flex-1'>
                <h2 className='font-semibold text-2xl'>{title}</h2>
                <p className='text-grey-color-60 mt-2'>{description}</p>
            </div>
            {children}
        </div>
    )
}

export default SectionHeader;