import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getSubscribtionData, loadingSubscribtionData } from '../../../actions';
import Loader from './Loader';
import './subscribe.scss';
import { useState } from 'react';
import { useEffect } from 'react';


function Subscribe () {
  const [submitForm, setSubmitForm] = useState(false);
  const [submitedForm, setSubmitedForm] = useState(false);
  const [errorMail, setErrorMail] = useState(false);
   
  const {isLoadingSubscriptionData, subscriptionResult, usedFieldSubscr} = useSelector(state => state);
  const [serverResult, setServerResult] = useState(subscriptionResult);
  
  const dispatch = useDispatch();
  
  useEffect(()=>{
    setServerResult(subscriptionResult)
  }, [subscriptionResult])
   
  const onChangeEmail = (e) => {
    setSubmitForm(false);
    setSubmitForm(false);
   
    if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.target.value)){
      setSubmitForm(true);
      setErrorMail(false)
      const userData = {mail:{mail: e.target.value},usedField:1 }
      dispatch(getSubscribtionData(userData));
    } else {
      setErrorMail("Неверный mail");
      setTimeout(() => {
        setErrorMail(false);
        e.target.value = null;
      }, 4000);
    }
  }

  const onSubmitMail = async (e) => {
    e.preventDefault();
    if(submitForm){

      setSubmitedForm(true);
      dispatch(loadingSubscribtionData(1));
      e.target.reset()
      setSubmitForm(false)

      setTimeout(() => {
        setServerResult('')
      }, 5000);
    }
    
  }

  return(

    <div className="main-box subscribe-block">
      <form className="form main__form" action="https://training.cleverland.by/shop/email" 
            onSubmit={(e) => onSubmitMail(e)}>
        <p>Special Offer</p>
        <h2>Subscribe <br /> And <span style={{color:'#E91E63'}} >Get 10% Off</span> </h2>
        <input data-test-id={"main-subscribe-mail-field"} className="form-control form_input" 
                name="user_email" required type="email" placeholder="Enter your email" 
                onInput={(e) => onChangeEmail(e)} />
        <div>
          {  !(usedFieldSubscr === 1)  ? '' :  serverResult}
          {errorMail? <span style={{color:'red'}}>{errorMail}</span>  : null}
        </div>

        <button className="button_submit" type="submit" data-test-id="main-subscribe-mail-button"
                disabled={ ((usedFieldSubscr === 1) && isLoadingSubscriptionData) ||  (!submitForm)} >
          <div style={{display:'flex', justifyContent: 'space-around'}}> 
            {isLoadingSubscriptionData && submitedForm &&  (usedFieldSubscr === 1)? <Loader/> : null } SUBSCRIBE 
          </div>
        </button>
        
      </form>
    </div>
  )
};

export default Subscribe;

