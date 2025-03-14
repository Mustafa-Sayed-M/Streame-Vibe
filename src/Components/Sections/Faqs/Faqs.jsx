import React from 'react';
import SectionHeader from '../Components/SectionHeader';
import FaqCard from './Components/FaqCard';
import faqsData from '../../../Data/faqs.json';

function Faqs() {
    return (
        <section className='faqs py-10' id='faqs'>
            <div className='container'>
                {/* Section Header */}
                <SectionHeader
                    title={`Frequently Asked Questions`}
                    description={`Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.`}
                >

                </SectionHeader>
                {/* Faqs Grid */}
                <div className='faqs-grid grid md:grid-cols-2 gap-3'>
                    {
                        faqsData.map((faq, index) => <FaqCard key={index} faqData={faq} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Faqs;