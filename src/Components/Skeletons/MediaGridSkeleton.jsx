import React from 'react';
import MediaCardSkeleton from './MediaCardSkeleton';

function MediaGridSkeleton() {
    return (
        <div className='media-grid-skeleton grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3'>
            {
                Array.from({ length: 20 }).map((_, index) => <MediaCardSkeleton key={index} />)
            }
        </div>
    )
}

export default MediaGridSkeleton;