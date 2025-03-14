import React from 'react';
import DiscoverMedia from '../../Components/Sections/DiscoverMedia';
import PopularMedia from '../../Components/Sections/PopularMedia';
import UpcomingMedia from '../../Components/Sections/UpcomingMedia';
import TopRatedMedia from '../../Components/Sections/TopRatedMedia';
import { useQuery } from '@tanstack/react-query';
import { fetchTrending } from '../../Utils/api';

function Movies() {

    const trendingShowsQuery = useQuery({
        queryKey: ['trending-movie'],
        queryFn: () => fetchTrending('movie'),
        refetchOnWindowFocus: false,
        enabled: false
    });

    return (
        <div className='movies-page'>
            {/* Discover Movies */}
            <DiscoverMedia
                mediaType={'movie'}
                title='Movies'
            />
            {/* Popular Movies */}
            <PopularMedia
                mediaType={'movie'}
                title='Movies'
            />
            {/* Top Rated Movies */}
            <TopRatedMedia
                mediaType={'movie'}
                title='Movies'
            />
            {/* Upcoming Movies */}
            <UpcomingMedia
                mediaType={'movie'}
                title='Movies'
            />
        </div>
    )
}

export default Movies;