import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getSubscribtionData, loadingSubscribtionData } from '../../../actions';
import Loader from './Loader';
import './subscribe.scss';
import { useState } from 'react';

function Subscribe () {
  const [submitForm, setSubmitForm] = useState(false);
  const [errorMail, setErrorMail] = useState(false);
   
  const {subscriptionData, isLoadingSubscriptionData, subscriptionResult} = useSelector(state => state);
  
  const dispatch = useDispatch();
 
  const onChangeEmail = (e) => {
    setSubmitForm(false);
    dispatch(getSubscribtionData())
    if(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(e.target.value)){
      setSubmitForm(true);
      setErrorMail(false)
      const userData = {mail: e.target.value}
      dispatch(getSubscribtionData(userData));
    } else {
      setErrorMail("Неверный mail")
    }
  }

  const onSubmitMail =  (e) => {
    e.preventDefault();
    dispatch(loadingSubscribtionData())
    dispatch(getSubscribtionData())
    
    e.target.reset()
  }

  return(

    <div className="main-box subscribe-block">
      <form className="form main__form" action="#" 
            onSubmit={(e) => onSubmitMail(e)}>
        <p>Special Offer</p>
        <h2>Subscribe <br /> And <span style={{color:'#E91E63'}} >Get 10% Off</span> </h2>
        <input className="form-control form_input" name="user_email" data-test-id='main-subscribe-mail-field'
                required type="email" 
                placeholder="Enter your email" onInput={(e) => onChangeEmail(e)} />
        <div>
          {(!subscriptionResult || !submitForm)  ? '' :  subscriptionResult}
          {errorMail? <span style={{color:'red'}}>{errorMail}</span>  : null}
        </div>

        <button className="button_submit" type="submit" 
                data-test-id='main-subscribe-mail-button'
                disabled={!Object.keys(subscriptionData).length || isLoadingSubscriptionData || !submitForm} >
          <div style={{display:'flex', justifyContent: 'space-around'}}> 
            {isLoadingSubscriptionData && submitForm ? <Loader/> : null } SUBSCRIBE 
          </div>
        </button>
        
      </form>
    </div>
  )
};

export default Subscribe;

