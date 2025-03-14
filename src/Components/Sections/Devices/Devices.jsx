import React from 'react';
import SectionHeader from '../Components/SectionHeader';
import DeviceCard from './Components/DeviceCard';
import devicesData from '../../../Data/devices.json';

function Devices() {
    return (
        <section className='devices py-10' id='devices'>
            <div className='container'>
                {/* Section Header */}
                <SectionHeader
                    title={`We Provide you streaming experience across various devices.`}
                    description={`With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.`}
                />
                {/* Devices Grid */}
                <div className='cards-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-3'>
                    {
                        devicesData.map((device, index) => <DeviceCard key={index} deviceData={device} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Devices;