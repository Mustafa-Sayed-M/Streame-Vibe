import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { fetchTrending } from '../../Utils/api';
import DiscoverMedia from '../../Components/Sections/DiscoverMedia';
import PopularMedia from '../../Components/Sections/PopularMedia';
import TopRatedMedia from '../../Components/Sections/TopRatedMedia';
import OnAirMedia from '../../Components/Sections/OnAirMedia';

function Shows() {

    const trendingShowsQuery = useQuery({
        queryKey: ['trending-tv'],
        queryFn: () => fetchTrending('tv'),
        refetchOnWindowFocus: false,
        enabled: false
    });

    return (
        <div className='shows-page'>
            {/* Discover Shows */}
            <DiscoverMedia
                mediaType={'tv'}
                title='Shows'
            />
            {/* Popular Shows */}
            <PopularMedia
                mediaType={'tv'}
                title='Shows'
            />
            {/* Top Rated Shows */}
            <TopRatedMedia
                mediaType={'tv'}
                title='Shows'
            />
            {/* Upcoming Shows */}
            <OnAirMedia
                mediaType={'tv'}
                title='Shows'
            />
        </div>
    )
}

export default Shows;