import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/navigation";

import "swiper/css/bundle";

import { Navigation } from "swiper";
import banner from '../main-blocks/img/banner.jpg';





function SliderMainPage () {

  return(
    <>
      <Swiper  navigation={true} modules={[Navigation]} className="mySwiper">

        <SwiperSlide> <img src={banner} alt="banner" className='big-title-banner'/></SwiperSlide>
        <SwiperSlide> <img src={banner} alt="banner" className='big-title-banner'/></SwiperSlide>
        <SwiperSlide> <img src={banner} alt="banner" className='big-title-banner'/></SwiperSlide>
        
      </Swiper>
    </>
  )
}


export default SliderMainPage;