import React from 'react';
import Banner from './Banner'; 
import TopSellers from './TopSellers'; 
import Recommened from './Recommened';
import News from './News';
import ServiceUs from "./ServiceUs"
import Testimoni from './TestimoniPage';

const Home = () => {
  return (
    <>
      <Banner id="banner" />
      <ServiceUs id="service" />
      <TopSellers />
      <Recommened id="recommended" />
      <Testimoni id="testimoni"/>
      <News id="news" />
    </>
  );
}

export default Home;
