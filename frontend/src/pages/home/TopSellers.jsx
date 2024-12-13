import React, { useEffect, useState } from 'react';
import CarsCard from '../cars/CarsCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useFetchAllCarsQuery } from '../../redux/cars/carsApi';

const categories = ["Pilih Jenis Mobil", "sedan", "suv", "hatchback", "pickup", "mpv"]

const TopSellers = () => {
    
    const [selectedCategory, setSelectedCategory] = useState("Pilih Jenis Mobil");

    const {data: cars = []} = useFetchAllCarsQuery();

    const filteredCars = selectedCategory === "Pilih Jenis Mobil" ? cars : cars.filter(car =>
        car.category === selectedCategory.toLowerCase()
    );

    return (
        <div className='py-10'>
            <h2 className='text-3xl font-semibold mb-6'>Penjualan Terbanyak</h2>
            {/* filter kategori */}
            <div className='mb-8 flex items-center'>
                <select 
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    name="category" id="category" className='border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none'>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
            </div>
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
                {filteredCars.length > 0 ? (
                    filteredCars.map((car, index) => (
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
    );
};

export default TopSellers; // Ensure you have this line for default export
