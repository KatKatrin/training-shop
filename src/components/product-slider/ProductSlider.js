import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "swiper/css/bundle";

import './product-slider.scss';
import clothBig from '../card-item/img/bigCloth.png';
import clothSmall from '../card-item/img/cloth.png';



// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

function ProductSlider () {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  

  return (
    <>
      <Swiper

      
            direction={"vertical"}
            navigation={true}

            onSwiper={setThumbsSwiper}
          
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
          
          <SwiperSlide>
          <img src={clothSmall} alt="cloth-small" />
          </SwiperSlide>
          <SwiperSlide>
          <img src={clothSmall} alt="cloth-small" />  
          </SwiperSlide>
          <SwiperSlide>
          <img src={clothSmall} alt="cloth-small" />  
          </SwiperSlide>
          <SwiperSlide>
          <img src={clothSmall} alt="cloth-small" />  
          </SwiperSlide>

      </Swiper>

    <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}

        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
      <SwiperSlide>
        <img src={clothBig} alt="main-clothes" className='main-cloth-big' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={clothBig} alt="main-clothes" className='main-cloth-big' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={clothBig} alt="main-clothes" className='main-cloth-big' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={clothBig} alt="main-clothes" className='main-cloth-big' />
          </SwiperSlide>
    </Swiper>
     
    </>
  );
}

export default ProductSlider;




