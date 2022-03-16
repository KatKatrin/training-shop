import './cardPage.scss';

import serverData from '../components/main-blocks/serverData/serverData'
import Banner from "../components/banner/Banner";
import Rating from "../components/rating/Rating";

//import addCard from '../components/card-item/img/addCard.png';
import heart from '../components/card-item/img/heart.png';
import compare from '../components/card-item/img/compare.png';
import paySystem from '../components/card-item/img/paySystem.png';

import sizeGuide from '../components/card-item/img/sizeGuide.png';

import car from '../components/card-item/img/truck.png';
import returnImg from '../components/card-item/img/refresh.png';
import envelope from '../components/card-item/img/mail.png';
import message from '../components/card-item/img/message.png';

import arrowLeft from '../constant/arrows/arrow.png';
import arrowRight from '../constant/arrows/arrowRight.png';
import arrowUp from '../constant/arrows/arrowUp.png';
import arrowDown from '../constant/arrows/arrowDown.png';
import ProductSlider from '../components/product-slider/ProductSlider';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SliderRelated from '../components/product-slider/SliderRelated';
//import Cart from '../components/cart/Cart';

import { useDispatch } from 'react-redux';
import {addOrder, deleteOrder} from '../actions';
import { useSelector } from 'react-redux';



function CardPage () {

  const {category, id} =  useParams();
  const {name, price, material, sizes, reviews, rating, images} = serverData[category].filter(item => item.id === id)[0];
  

  const dispatch = useDispatch();
  const {order} = useSelector(state => state);

  const [size, setSize] = useState(sizes[0]);
  const [color, setColor] = useState(images[0].color);
  const [image, setImage] = useState(`https://training.cleverland.by/shop${images[0].url}`);
  const [ buttonRemove, setButtonRemove] = useState(false)

  

  useEffect(() => {
    setSize(sizes[0]);
    setColor(images[0].color);
    setImage(`https://training.cleverland.by/shop${images[0].url}`)

  }, [sizes, images])

  useEffect(() => {
    setButtonRemove(false)
  }, [size, color])


  const onAddOrder = () => {
    
    setButtonRemove(!buttonRemove);

    dispatch(addOrder(id, name, size, color, price, image))

    if(buttonRemove) {
      setButtonRemove(!buttonRemove);
      dispatch(deleteOrder(id, size, color))
    }
  }

   
  const availableSize = sizes.map((item,i) => {
    const changeActivSize = () => (setSize(item));
    const clazz = item === size? 'active' : null;

    return(
      <span className={clazz} key={i} onClick={changeActivSize}>{item}</span>
    )
  })

  
  const allReviews = reviews.map((item,i) => {
    const {name, text, rating, id} = item;

    return(
      <div className='person-review' key={i}>
              <div className='person-review__header' key={id}>
                <h4>{name}</h4>
                <div>
                  <span className='person-review__time'> 3 months ago</span>
                  <Rating ratingNumber={rating}/>
                </div>
              </div>
              
              <div className='person-review__text'>
                {text}
              </div>
      </div>
    )
  });


  const getSmallImg = (images) => {
    let colorArr = []

   return( images.map((image,i) => {

      if (!colorArr.includes(image.color)){
        colorArr = [...colorArr, image.color];
        const changeColor = () => {
              setColor( image.color);
              setImage(`https://training.cleverland.by/shop${images[i].url}`)
        };

        const clazz = image.color === color ? 'active' : null;
        
        return (
          <span key={i}>
            <img src={`https://training.cleverland.by/shop${image.url}`}
                 alt="clothes" 
                 className={`mini-img ${clazz}`}
                 onClick={changeColor}/>
          </span>
        )
      }
      return null
    })
   )
  }

  const quantityRewiews = reviews.length;

  return(
    <div className="main-content" data-test-id={`product-page-${category}`}>
      <Banner bannerName={category} product={name}></Banner>

      <div className='under-banner-info'>
        <div className='info-block stars-rating'>
          <Rating ratingNumber={rating}/>
          <span className='quantity__review'> {`${quantityRewiews} Reviews`}</span>
        </div>
        <div className='info-block availability'>
          <div> SKU: <span>777</span></div>
          <div className='stock-availability'>Availability: <span>In Stock</span></div>
        </div>
      </div>


      <div className="card-content">

        <div className="card-content__container-clothes">

          <ProductSlider images={images} data-test-id='product-slider'></ProductSlider>

          <div className='slider-vertical__block'>
            <button>
              <img src={arrowUp} alt="arrow-up" className='slider-vertical__up'/>
            </button>
              
           <button>
            <img src={arrowDown} alt="arrow-down" className='slider-vertical__down' />
           </button>
          </div>
               
        </div>

     

        <div className="card-content__container information">

          <div className='information__cloth'>

            <div className='info color'>
              COLOR: <span style={{'fontWeight':'600'}}>{color}</span>
            </div>

            <div className='info pictures'>
             {getSmallImg(images)}
              
            </div>

            <div className='info size'>
              SIZE: <span style={{'fontWeight':'600'}}>{size}</span>
            </div>

            <div className='info size__available'>
              {availableSize}
            </div>

            <div className='info size__guide'>
              <img src={sizeGuide} alt="size guide" />
            </div>

          </div>

          <div className='information__price'>
            <div className='price'> { price.toString().includes('.') ? (`$ ${price}`) : (`$ ${price}.00`)}</div>

            <div className='cart-button-wraper'>
               <button className='cart-button' onClick={onAddOrder} data-test-id='add-cart-button'>
                 {(!buttonRemove || !order.length) ? 'ADD TO CART' : 'REMOVE TO CARD'}
                </button>
            </div>

            <div>
              <span>
                <img src={heart} alt="heart" />
              </span>
              <span>
                <img src={compare} alt="compare" />
              </span>
            </div>
          </div>

          <div className='information__servise'>
            
              <div className="info info-shipping">
                <img src={car} alt="car" className='picture' />
                <div className="text">
                  Shipping & Delivery
                </div>
              </div>

              <div className="info info-returning">
                <img src={returnImg} alt="return" className='picture' />
                <div className="text">
                  Returns & Exchanges
                </div>
              </div>

              <div className="info info-questions">
                <img src={envelope} alt="questions" className='picture'/>
                <div className="text">
                  Ask a question
                </div>
              </div>

          </div>

          <div className='information__guarantee'>
            guaranteed safe checkout
          </div>

          <div className='information__paysystem'>
            <img src={paySystem} alt="paySystem" />
          </div> 

          <div className='information__description-cloth'>

            <div className='descrirtion-header'>DESCRIPTION</div>

            <div className='additional-information'>
              <h4>ADDITIONAL INFORMATION</h4>

              <div className='additional-information__cloth'>
                <p>Color: <span>Blue, White, Black, Grey</span></p>
                <p>Size: {availableSize} </p>
                <p>Material: <span>{material}</span></p>
              </div>
            </div>
          
          </div>

          <div className='information__review'>
            <h4>REVIEWS</h4>

            <div className='rating__review'>

              <div className='stars-rating'>
                <Rating ratingNumber={rating}/>
                <span className='quantity__review'> {`${quantityRewiews} Reviews`}</span>
              </div>

              <div className='write__review'>
                <img src={message} alt="message" />
                <span> Write a review</span>
              </div>

            </div>

            {allReviews}

          </div>
        </div>
      </div>

      <div className='content__block related-products'>
        <div className='related-products__header'>
          <h3>RELATED PRODUCTS</h3>

        <div className='related-btn'>
           
          <button className="related-btn__arrow-left">
               <img src={arrowLeft} alt="arrow-left" className='arrow-left'/> 
          </button>
          <button className="related-btn__arrow-right">
              <img src={arrowRight} alt="arrow-right" className='arrow-right' />
            </button>
          </div>

        </div>

        
        
        <ul className="clothes__related__list grid">
            
             <SliderRelated category={category} data-test-id='related-slider'></SliderRelated> 

        </ul>
      

      </div>

    </div>

  )
}

export default CardPage;