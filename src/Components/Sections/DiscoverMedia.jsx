import React from 'react';
import MediaGridSkeleton from '../Skeletons/MediaGridSkeleton';
import MediaGrid from '../Media/MediaGrid';
import { useQuery } from '@tanstack/react-query';
import { discoverMedia } from '../../Utils/api';

function DiscoverMedia({ mediaType, title }) {

  const mediaQuery = useQuery({
    queryKey: [mediaType],
    queryFn: () => discoverMedia(mediaType),
    refetchOnWindowFocus: false
  });

  return (
    <section id='discover' className='discover py-7'>
      <div className='container'>
        <h2 className='font-semibold text-xl mb-4 capitalize'>Discover {title}</h2>
        {
          mediaQuery.isLoading
            ? <MediaGridSkeleton />
            : mediaQuery.data
              ? <MediaGrid mediaList={mediaQuery.data.results} />
              : <MediaGridSkeleton />
        }
      </div>
    </section>
  )
}

export default DiscoverMedia