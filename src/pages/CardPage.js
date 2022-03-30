import './cardPage.scss';

import Banner from "../components/banner/Banner";
import Rating from "../components/rating/Rating";

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

import { useDispatch } from 'react-redux';
import {addOrder, deleteOrder, getReviewData, loadingReviewData, ontoggleReviewForm} from '../actions';
import { useSelector } from 'react-redux';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import RatingReview from '../components/reviews/RatingReview';
import Loader from '../components/main-blocks/subscribeBlock/Loader';



function CardPage () {

  const {category, id} =  useParams();
  const {products, openFormReview} = useSelector(state => state);
  
  const {name, price, material, sizes, reviews, rating, images} = products[category].filter(item => item.id === id)[0];
  
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

  const onToggleReviewForm = (e) => {
    
    if(e.target.className ==='review-form__wrapper'){
      dispatch(ontoggleReviewForm());
      document.body.style.overflow = "visible";
    }
  
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

      {openFormReview ?
         <div className='review-form__wrapper' onClick={(e) => onToggleReviewForm(e) }>
         <WriteReview idProduct={id} data-test-id="review-modal"></WriteReview> 
        </div> :
        null
      }

     

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

              <button className='write__review' data-test-id="review-button"
                                    onClick={()=> {window.scrollTo(0,0);
                                    dispatch(ontoggleReviewForm()); 
                                    document.body.style.overflow = "hidden";}}>
                <img src={message} alt="message" />
                <span> Write a review</span>
              </button>

              

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



function WriteReview ({idProduct}){
  const [ratingNumber, setRatingNumber] = useState(1);
  
  const {reviewResult, isLoadingReview} = useSelector(state => state);
  console.log(reviewResult)
  const dispatch = useDispatch();

  const onChangeRating = (rating) => {
    setRatingNumber(rating)
  }

  const validate = (values) => {
    const errors = {};
  
    if(!values.name){
      errors.name = 'Введите имя'
    }
    if(!values.text){
      errors.text = 'Напишите отзыв'
    }
    return errors
  }

  return(
    
      <div className='review-form__container'>
      <h1>Write a review</h1>
      <RatingReview ratingNumber={ratingNumber} onChangeRating={onChangeRating}></RatingReview>
      <Formik
            initialValues={{
              id:idProduct,
              name:'',
              text:'',
              }}
              
              validate={validate}
              
              onSubmit = {(values, {resetForm}) => 
                            { values.rating = ratingNumber;
                               dispatch(loadingReviewData());

                               dispatch(getReviewData(values));
                                                            
                              if(reviewResult){
                                console.log('test')
                                resetForm({});
                                setRatingNumber(1);
                              }
                              
                               }
                            }> 
             
{({ isValid, touched}) =>(
   <Form className='review-form' action="#" > 
       
   <Field data-test-id="review-name-field" className='review_info' type="text" 
          id='name' name='name' placeholder='Name'>
    </Field>
   <ErrorMessage className='error' name='name' component='div'></ErrorMessage>
   
   <Field  data-test-id="review-text-field" className='review_info review' type="text"
          id='text' name='text' placeholder='Reviw' 
           as='textarea'></Field>
   <ErrorMessage className='error' name='text' component='div'></ErrorMessage>

  <button data-test-id="review-submit-button" className='submit-review' type='submit' 
          disabled={!touched.name || !isValid }>
    {isLoadingReview? <Loader></Loader>: null} 
    Send
  </button>
  {reviewResult ? <div>{reviewResult}</div> : null}

</Form>
)}
         

      </Formik>

      
      
      </div>
  
  )
}