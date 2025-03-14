import React from 'react';

function DeviceCard({ deviceData }) {

    const {
        name,
        description,
        icon
    } = deviceData;

    return (
        <div className='device-card p-3 rounded-md border border-black-color-15 bg-black-color-6'>
            <div className=' flex items-center gap-3 mb-3'>
                <picture className='block bg-black-color-8 border border-black-color-12 rounded-md p-2'>
                    <img src={`${process.env.PUBLIC_URL}${icon}`} alt={name} />
                </picture>
                <h3 className='font-semibold'>{name}</h3>
            </div>
            <p className='text-grey-color-60'>{description}</p>
        </div>
    )
}

export default DeviceCard;