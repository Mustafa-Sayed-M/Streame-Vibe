import React from 'react';
import MediaCard from './MediaCard';

function MediaGrid({ mediaList }) {
    return (
        <div className='media-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3'>
            {
                mediaList.map((media, index) => <MediaCard key={index} mediaData={media} />)
            }
        </div>
    )
}

export default MediaGrid;