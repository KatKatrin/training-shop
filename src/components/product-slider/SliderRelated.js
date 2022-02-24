
import Rating from "../rating/Rating";
import './sliderRelated.scss';

import relatedItems from "../main-blocks/relatedBlock/relatedItems";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "swiper/css/bundle";



// import required modules
import { Grid, Navigation } from "swiper";

export default function SliderRelated() {

  const result = RelatedGrid('related', relatedItems);

  

  return (
    <>
      <Swiper

        navigation={{
          nextEl: ".related-btn__arrow-right", 
          prevEl: ".related-btn__arrow-left",
        }}

        
        slidesPerView={4}
        grid={{
          rows: 1,
        }}
        spaceBetween={30}

        breakpoints={{
          280:{slidesPerView:1},
          470: {slidesPerView:2},
          850: {slidesPerView:3},
          1100: {slidesPerView:4}
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
            <li className="cloth__item" key={i + 1}>
           
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



