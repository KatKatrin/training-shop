import { NavLink } from "react-router-dom";
import "./footer.scss";

import { useState } from "react";
import icons from "../header/img/Group 1.png";
import phoneImg from '../header/img/group.png';
import locationImg from './img/location-marker.png';
import timeImg from './img/clock.png';
import paySystems from './img/paySystems.png';
import envelope from './img/mail.png';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getSubscribtionData, loadingSubscribtionData } from "../../actions";
import Loader from "../main-blocks/subscribeBlock/Loader";
import { useEffect } from "react";


function Footer (){
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
    setSubmitedForm(false)
   
    if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.target.value)){
      setSubmitForm(true);
      setErrorMail(false)
      const userData = {mail:{mail: e.target.value},usedField:2 }
      dispatch(getSubscribtionData(userData));
    } else {
      setErrorMail("Неверный mail")
      setTimeout(() => {
        setErrorMail(false);
        e.target.value = null;
      }, 4000);
    }
  }

  const onSubmitMail = (e) => {
    e.preventDefault();
    
   if(submitForm){
      setSubmitedForm(true)
      dispatch(loadingSubscribtionData(2))
      e.target.reset()

      setTimeout(() => {
        setServerResult('')
      }, 4000);
    }
     
  }
  

  return(
    <footer className="footer">
      
    <div className="footer__join-form">
     
      <label htmlFor="email">BE IN TOUCH WITH US:</label>
      <form action="https://training.cleverland.by/shop/email" className="footer__form" onSubmit={(e) => onSubmitMail(e)}>
        <div className="input__block">
          <input id="email" name="user_email" required type="email" data-test-id="footer-mail-field"
                 placeholder="Enter your email"
                 onInput={(e) => onChangeEmail(e)} />
          <button className="button_submit" type="submit" data-test-id="footer-subscribe-mail-button"
                  disabled={ ((usedFieldSubscr === 2) && isLoadingSubscriptionData) || (!submitForm )} >
                    {isLoadingSubscriptionData && submitedForm && (usedFieldSubscr === 2) ? <Loader/> : null }
            Join Us
          </button>
        </div>
      </form>
        <div>
          { !(usedFieldSubscr === 2)  ? '' :  serverResult}
          {errorMail? <span style={{color:'red'}}>{errorMail}</span>  : null}
        </div>
        <div className='icons'>
              <img src={icons} alt="icons" />
        </div>
    </div>
    

    <div className="footer__navigations">

      <div className="footer__navigation__block">
        <h4> 
          Categories 
        </h4>
        <p> <NavLink to='/men' className={'link-style'}> Men </NavLink> </p>
        <p> <NavLink to='/women' className={'link-style'}> Women </NavLink></p>
        <p> <span className="link-style">Accessories</span></p>
        <p> <span className="link-style">Beauty</span></p>
      </div>

      <div className="footer__navigation__block">
        <h4>Infomation</h4>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Blog</p>
        <p>FAQs</p>
      </div>

      <div className="footer__navigation__block">
        <h4>Useful links</h4>
        <p>Terms & Conditions</p>
        <p>Returns & Exchanges</p>
        <p>Shipping & Delivery</p>
        <p>Privacy Policy</p>
      </div>

      <div className="footer__navigation__block">
            
            
            <h4>Contact us</h4>

            <div className="contacts__content">
              <img src={locationImg} alt="address" className='content locationImg'/>
              <span className='top-bar__content address'> Belarus, Gomel, Lange 17</span>
            </div>

            <div className="contacts__content">
              <img src={phoneImg} alt="phone" className='content phoneImg'/>
              <a href="tel:+375291002030" className='content phoneNumber'> +375 29 100 20 30</a>
            </div>

            <div className="contacts__content">
              <img src={timeImg} alt="time" className='content timeImg'/>
              <span className='content schedule'> All week 24/7</span>
            </div>

            <div className="contacts__content">
              <img src={envelope} alt="envelope" className='content envelope'/>
              <a href="mailto:info@clevertec.ru" className='content email'> info@clevertec.ru</a>
            </div>

            
      </div>
      
    </div>

    <div className="footer__informations">
      <div className="footer__information rights">
        Copyright © 2032 all rights reserved
      </div>

      <div className="footer__information paySystems">
        <img src={paySystems} alt="paySystems" />
      </div>

      <div className="footer__informatio site" >
        Clevertec.ru/training
      </div>
    </div>

  </footer>
  )
}

export default Footer;