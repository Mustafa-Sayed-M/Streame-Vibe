import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchOnAir } from '../../Utils/api';
import MediaSliderSkeleton from '../Skeletons/MediaSliderSkeleton';
import MediaSlider from '../Media/MediaSlider';

function OnAirMedia({ title, mediaType }) {

    const sectionRef = useRef(null);
    const [isEnabledFetch, setIsEnabledFetch] = useState(false);

    const mediaQuery = useQuery({
        queryKey: [`on-air-${mediaType}`],
        queryFn: () => fetchOnAir(mediaType),
        refetchOnWindowFocus: false,
        enabled: Boolean(isEnabledFetch)
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && entry.intersectionRatio === 1) {
                    setIsEnabledFetch(true);
                }
            },
            { threshold: 1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            id='on-air'
            className='on-air py-7'
        >
            <div className='container'>
                <h2 className='font-semibold text-xl mb-4 capitalize'>On The Air {title}</h2>
                {
                    mediaQuery.isLoading
                        ? <MediaSliderSkeleton />
                        : mediaQuery.data
                            ? <MediaSlider mediaList={mediaQuery.data.results} />
                            : <MediaSliderSkeleton />
                }
            </div>
        </section>
    )
}

export default OnAirMedia;