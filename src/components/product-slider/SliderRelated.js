import React, { useRef, useState } from "react";
import Rating from "../rating/Rating";
import './sliderRelated.scss';

import relatedItems from "../main-blocks/relatedBlock/relatedItems";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";



// import required modules
import { Grid, Navigation } from "swiper";

export default function SliderRelated() {

  const result = RelatedGrid('related', relatedItems);

  

  return (
    <>
      <Swiper

        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}

        // navigation={true}
        slidesPerView={4}
        grid={{
          rows: 1,
        }}
        spaceBetween={30}

        breakpoints={{
          200:{slidesPerView:2},
          300: {slidesPerView:3},
          900: {slidesPerView:4}
        }}

              
        modules={[Grid, Navigation]}
        className="mySwiper"
      >
        
        {result}

      </Swiper>
    </>
  );
}


function RelatedGrid (category, items) {

  
    const itemsSwiper = items.map((item, i) => {
      return (
        <SwiperSlide>
            <li className="cloth__item" key={i}>
           
               <img src={require(`../main-blocks/${category}Block/${category}Img/${i+1}.jpg`)} alt={item.productType} className={`${category}__item-img `}/>
                          
                    <div className="cloth__item-name">{item.productType}</div>
                    <div className="cloth__information">
                      <div className="cloth__item-price">{`$ ${item.price}.00`}</div>
                     <Rating color={'lightgray'}/>
                    </div>
            </li>
        </SwiperSlide>
      )
    });

    return itemsSwiper;
 
}



