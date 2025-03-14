import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import MediaCardSkeleton from './MediaCardSkeleton';

function MediaSliderSkeleton() {
    return (
        <Swiper
            spaceBetween={12}
            breakpoints={{
                0: {
                    slidesPerView: 1.5
                },
                575: {
                    slidesPerView: 2
                },
                768: {
                    slidesPerView: 3
                },
                991: {
                    slidesPerView: 3.5
                },
                1024: {
                    slidesPerView: 4
                },
                1200: {
                    slidesPerView: 5
                }
            }}
        >
            {
                Array.from({ length: 20 }).map((media, index) => <SwiperSlide key={index}>
                    <MediaCardSkeleton />
                </SwiperSlide>)
            }
        </Swiper>
    )
}

export default MediaSliderSkeleton;