import React from 'react';
import { Link } from 'react-router-dom';

function PlanCard({ planType, planData }) {

    const {
        name,
        description,
        price: {
            monthly,
            yearly
        }
    } = planData;

    return (
        <div className='plan-card p-3 rounded-md border border-black-color-15 bg-black-color-10'>
            <h3 className='font-semibold mb-2 text-2xl'>{name}</h3>
            <p className='text-grey-color-60 mb-4'>{description}</p>
            <div className='price mb-4'>
                <strong className='text-3xl'>${planType === 'MONTHLY' ? monthly : yearly}</strong>
                {" "}
                <span className='text-grey-color-60'>/{planType === 'MONTHLY' ? 'month' : 'year'}</span>
            </div>
            <div className='flex items-center gap-3 *:block *:flex-1 *:text-center *:py-2 *:px-4 *:rounded-md *:transition-colors'>
                <Link
                    to={'/subscriptions'}
                    className='bg-black-color-8 border border-black-color-15 sm:hover:bg-black-color-10'
                >
                    Start Free Trial
                </Link>
                <Link
                    to={'/'}
                    className='bg-red-color-45 sm:hover:bg-red-color-45/60'
                >
                    Choose Plan
                </Link>
            </div>
        </div>
    )
}

export default PlanCard;