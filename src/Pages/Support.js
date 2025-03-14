import React from 'react';
import Contact from '../Components/Sections/Contact/Contact';
import Faqs from '../Components/Sections/Faqs/Faqs';

function Support() {
    return (
        <div className='support-page'>
            {/* Contact */}
            <Contact />
            {/* Faqs */}
            <Faqs />
        </div>
    )
}

export default Support;