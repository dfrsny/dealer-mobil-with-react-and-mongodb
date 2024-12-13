import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import CarsCard from '../cars/CarsCard';
import { useFetchAllCarsQuery } from '../../redux/cars/carsApi';

const Recommened = () => {

    const {data: cars = []} = useFetchAllCarsQuery();

    return (
        <div className='py-16'>
            <h2 className='text-3xl font-semibold mb-6'>Rekomendasi Mobil</h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation // Menampilkan navigasi kiri dan kanan
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    1180: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    }
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {cars.length > 0 ? (
                    cars.map((car, index) => (
                        <SwiperSlide key={index}>
                            <CarsCard car={car} />
                        </SwiperSlide>
                    ))
                ) : (
                    <SwiperSlide>
                        <div className="flex justify-center items-center h-full">
                            <p className="text-lg">Tidak ada mobil tersedia untuk kategori ini.</p>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}

export default Recommened