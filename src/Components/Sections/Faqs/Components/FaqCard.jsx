import React from 'react';

function FaqCard({ faqData }) {

    const [isOpen, setIsOpen] = React.useState(false);

    const {
        id,
        question,
        answer
    } = faqData;

    return (
        <div className={`faq-card flex gap-3 p-3 border-b border-b-red-color-45/50 ${isOpen ? 'items-start' : 'items-center'}`}>
            <div className='faq-num w-10 h-10 leading-10 text-center rounded-md bg-black-color-12 border border-black-color-15'>
                {id.toString().padStart(2, '0')}
            </div>
            <div className='faq-text flex-1'>
                <h3 className='font-semibold'>{question}</h3>
                <p
                    style={{
                        transition: 'ease 150ms'
                    }}
                    className={`text-grey-color-60 overflow-hidden ${isOpen ? 'h-[100px] mt-2 opacity-100' : 'h-0 opacity-0'}`}
                >
                    {answer}
                </p>
            </div>
            <button
                title={isOpen ? 'Close' : 'Open'}
                aria-label='Faq Toggler'
                onClick={() => setIsOpen(!isOpen)}
                className='ms-auto text-2xl transition-colors sm:hover:text-red-color-45 relative'
            >
                <span className={`block transition-transform absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${isOpen ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}`}>
                    <i className={`fa-solid fa-minus`}></i>
                </span>
                <span className={`block transition-transform absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${isOpen ? 'scale-0 rotate-180' : 'scale-100 rotate-0'}`}>
                    <i className={`fa-solid fa-plus`}></i>
                </span>
            </button>
        </div>
    )
}

export default FaqCard;