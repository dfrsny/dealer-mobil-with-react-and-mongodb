import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import CarsCard from '../cars/CarsCard'; // Pastikan path ke CarsCard benar
import { useFetchAllCarsQuery } from '../../redux/cars/carsApi'; // Assuming you are using Redux Toolkit to fetch cars

const Products = () => {
  const { data: cars = [], isLoading, isError } = useFetchAllCarsQuery(); // Fetch cars using Redux Toolkit query

  if (isLoading) {
    return (
      <div className="bg-gray-100 py-12">
        <div className="max-w-screen-lg mx-auto px-6">
          <p className="text-center text-gray-600">Loading cars...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-gray-100 py-12">
        <div className="max-w-screen-lg mx-auto px-6">
          <p className="text-center text-red-600">Error: Failed to load cars.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-screen-lg mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-12">
          Our Products
        </h1>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation // Menampilkan navigasi kiri dan kanan
          pagination={{ clickable: true }} // Optional: Show pagination dots
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            1180: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {cars.length > 0 ? (
            cars.map((car) => (
              <SwiperSlide key={car._id}>
                <CarsCard car={car} />
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <div className="flex justify-center items-center h-full">
                <p className="text-lg">No cars available</p>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default Products;
