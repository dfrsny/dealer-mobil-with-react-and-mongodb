import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { getImgNews } from '../../utils/getImgUrl' // Ensure to import your image utility

const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch("news.json") // Adjust the path to your news.json file
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => setNews(data))
            .catch((error) => console.error('Error fetching news:', error));
    }, []);

    return (
        <div id="news" className='py-16'>
            <h2 className='text-3xl font-semibold mb-6'>News</h2>
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
                {news.length > 0 ? (
                    news.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className='flex flex-col sm:flex-row sm:justify-between items-center gap-12'>
                                {/* Content */}
                                <div className='py-4'>
                                    <h3 className='text-lg font-medium hover:text-blue-500 mb-4'>{item.title}</h3>
                                    <div className='w-12 h-[4px] bg-primary mb-5'></div>
                                    <p className='text-sm text-gray-600'>{item.description}</p>
                                </div>

                                <div className='flex-shrink-0'>
                                    <img src={getImgNews(item.coverImage)} alt={item.title} className='w-full object-cover' />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                ) : (
                    <SwiperSlide>
                        <div className="flex justify-center items-center h-full">
                            <p className="text-lg">Tidak ada berita tersedia saat ini.</p>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    );
};

export default News;
