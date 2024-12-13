import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { getImgTest } from '../../utils/getImgUrl';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch("testimoni.json") // Adjust the path to your testimonials.json file
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => setTestimonials(data))
            .catch((error) => console.error('Error fetching testimonials:', error));
    }, []);

    return (
        <div id="testimoni" className='py-16 h-screen flex flex-col justify-center'>
            <h2 className='text-3xl font-semibold mb-8 text-center'>Testimonials</h2> {/* Increased bottom margin */}
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation // Enable left and right navigation
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
                {testimonials.length > 0 ? (
                    testimonials.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className='flex flex-col justify-center items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105'>
                                <div className='flex-shrink-0 mb-4'>
                                    <img src={getImgTest(item.coverImage)} alt={item.name} className='w-24 h-24 rounded-full object-cover border-4 border-blue-500 shadow-md' />
                                </div>
                                <div className='text-center'>
                                    <h3 className='text-lg font-semibold mb-2 hover:text-blue-600'>{item.name}</h3>
                                    <div className='w-12 h-1 bg-blue-500 mb-3 mx-auto'></div>
                                    <p className='text-sm text-gray-700 italic'>"{item.text}"</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                ) : (
                    <SwiperSlide>
                        <div className="flex justify-center items-center h-full">
                            <p className="text-lg">Tidak ada testimoni tersedia saat ini.</p>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    );
};

export default Testimonial;
