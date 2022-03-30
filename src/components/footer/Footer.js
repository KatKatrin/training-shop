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

function Footer (){
  const [submitForm, setSubmitForm] = useState(false);
  const [submitedForm, setSubmitedForm] = useState(false);
  const [errorMail, setErrorMail] = useState(false);
  const {isLoadingSubscriptionData, subscriptionResult} = useSelector(state => state);
  const dispatch = useDispatch();
  

  const onChangeEmail = (e) => {
    setSubmitForm(false);
    setSubmitedForm(false)
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

  const onSubmitMail = (e) => {
    e.preventDefault();
   if(submitForm){
     setSubmitedForm(true)
      dispatch(loadingSubscribtionData())
      dispatch(getSubscribtionData())
      e.target.reset()
   }
     
  }
  

  return(
    <footer className="footer">
      
    <div className="footer__join-form">
     
      <label htmlFor="email">BE IN TOUCH WITH US:</label>
      <form action="#" className="footer__form" onSubmit={(e) => onSubmitMail(e)}>
        <div className="input__block">
          <input id="email" name="user_email" required type="email" data-test-id="footer-mail-field"
                 placeholder="Enter your email"
                 onInput={(e) => onChangeEmail(e)} />
          <button className="button_submit" type="submit" data-test-id="footer-subscribe-mail-button"
                  disabled={ (submitedForm && isLoadingSubscriptionData) || (!submitForm && !submitedForm)} >
                    {isLoadingSubscriptionData && submitedForm ? <Loader/> : null }
            Join Us
          </button>
        </div>
      </form>
        <div>
          {( !submitedForm)  ? '' :  subscriptionResult}
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