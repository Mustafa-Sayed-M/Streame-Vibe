import React from 'react';
import { imagesUrl, posterUrl } from '../../Utils/api';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function MediaCard({ mediaData }) {

    const {
        id,
        poster_path,
        release_date,
        first_air_date,
        title,
        name,
        vote_average,
    } = mediaData;

    return (
        <div className='media-card bg-black-color-10 p-3 rounded-md border border-black-color-15'>
            {/* Poster */}
            <Link
                to={`/${title ? 'movies' : 'shows'}/${id}`}
                className='block aspect-[1/1.5] mb-3 ease-in-out duration-300 transition group hover:grayscale'
            >
                <picture>
                    <LazyLoadImage
                        alt={title || name || ''}
                        effect="blur"
                        className='rounded-md group-hover:shadow-xl'
                        src={`${imagesUrl}${posterUrl}${poster_path}`} />
                </picture>
            </Link>
            {/* Title or Name */}
            <h3 className='font-semibold mb-2 line-clamp-1'>{title || name || ''}</h3>
            {/* Info */}
            <div className='info flex items-center justify-between text-sm'>
                {/* Year */}
                <p className='text-grey-color-60'>{(release_date || first_air_date || '').slice(0, 4)}</p>
                {/* Rating */}
                <p>
                    <span className='text-red-color-45 me-1'>
                        <i className="fa-solid fa-star"></i>
                    </span>
                    <span>{vote_average}</span>
                </p>
            </div>
        </div>
    )
}

export default MediaCard;