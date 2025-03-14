import React from 'react';

function MediaCardSkeleton() {
    return (
        <div className='media-card-skeleton bg-black-color-10 p-3 rounded-md border border-black-color-15'>
            <div className='aspect-[1/1.5] bg-black-color-15 animate-pulse rounded-sm mb-3'></div>
            <div className='w-3/4 h-4 bg-black-color-15 animate-pulse rounded-sm mb-3'></div>
            <div className='w-1/2 h-4 bg-black-color-15 animate-pulse rounded-sm'></div>
        </div>
    )
}

export default MediaCardSkeleton;