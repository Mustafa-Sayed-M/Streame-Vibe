import React from 'react';

function TypeSelectors({ planType, setPlanType }) {
    return (
        <div className='type-selectors rounded-md flex items-center gap-2 p-2 max-md:w-full bg-black-color-6 *:transition-colors *:rounded-md *:py-2 *:px-4 *:max-md:w-full'>
            <button
                type='button'
                title='Monthly'
                aria-label='Type Selector'
                onClick={() => setPlanType('MONTHLY')}
                className={`${planType === 'MONTHLY' ? 'bg-black-color-12' : 'sm:hover:bg-black-color-12'}`}
            >
                Monthly
            </button>
            <button
                type='button'
                title='Yearly'
                aria-label='Type Selector'
                onClick={() => setPlanType('YEARLY')}
                className={`${planType === 'YEARLY' ? 'bg-black-color-12' : 'sm:hover:bg-black-color-12'}`}
            >
                yearly
            </button>
        </div>
    )
}

export default TypeSelectors;