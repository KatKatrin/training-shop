import './writeReview.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Loader from '../main-blocks/subscribeBlock/Loader';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import RatingReview from './RatingReview';
import { getReviewData, loadingReviewData, } from '../../actions';


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
    
  <div className='review-form__container' data-test-id="review-modal">
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
      <Form className='review-form' action="https://training.cleverland.by/shop/product/review" > 
          
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

      </Form> )}         

    </Formik>
      
  </div>
  
  )
}

export default WriteReview;