import {Link} from 'react-router-dom';

import Rating from "../rating/Rating";
import './sliderRelated.scss';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "swiper/css/bundle";

import { Grid, Navigation } from "swiper";
import { useSelector } from 'react-redux';

export default function SliderRelated({category}) {

  const result = RelatedGrid(category)
  
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


function RelatedGrid (category) {

    const {products} = useSelector(state => state);
  
    const itemsSwiper = products[category].map((item, i) => {

      const {name, images, price, rating, id, discount} = item;
      return (
        <SwiperSlide key={i}>
            <li className="cloth__item" key={id}>
            <Link to={`/${category}/${id}`} data-test-id={`clothes-card-${category}`}>
               <img src={`https://training.cleverland.by/shop${images[0].url}`} alt={'clothes'} className={`${'related'}__item-img `}/>
               {discount ? <div className='discout'>{discount}</div> : null}
            </Link>             
                    <div className="cloth__item-name">{name}</div>
                    <div className="cloth__information">
                      <div className="cloth__item-price">{`$ ${price}`}</div>
                     <Rating ratingNumber={rating}/>
                    </div>
            </li>
        </SwiperSlide>
      )
    });

    return(
      itemsSwiper
    ) ;
 
}