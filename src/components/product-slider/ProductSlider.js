import './product-slider.scss';
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/bundle";
import { FreeMode, Navigation, Thumbs } from "swiper";



function ProductSlider ({images}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
  const getPictures = (images, nameForClass) => {
    return (
      images.map((image,i) => {
        return(
        <SwiperSlide key={i}>
          <img src={`https://training.cleverland.by/shop${image.url}`} alt="main-clothes" className={nameForClass} />
        </SwiperSlide>
        )
      })
    )
  }

  const bigPicture = getPictures(images, 'main-cloth-big');
  const smallPicture = getPictures(images, 'additional-cloth-small' )

  return (
    <>
      <Swiper

      
            direction={"vertical"}

            navigation={{
              nextEl: ".slider-vertical__down", 
              prevEl: ".slider-vertical__up",
            }}

            onSwiper={setThumbsSwiper}
          
            spaceBetween={10}
            slidesPerView={images.length <  4 ? images.length : 4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
          
    {smallPicture}
    
    
    
    

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
      {bigPicture}
    </Swiper>
     
    </>
  );
}

export default ProductSlider;




