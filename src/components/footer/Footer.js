import { NavLink } from "react-router-dom";
import "./footer.scss";

import icons from "../header/img/Group 1.png";
import phoneImg from '../header/img/group.png';
import locationImg from './img/location-marker.png';
import timeImg from './img/clock.png';
import paySystems from './img/paySystems.png';
import envelope from './img/mail.png';

function Footer (){

  return(
    <footer className="footer">
      
    <div className="footer__join-form">
      <label htmlFor="email">BE IN TOUCH WITH US:</label>
      <div className="input__block">
        <input id="email" name="user_email" required type="email" placeholder="Enter your email"/>
        <input className="button_submit" type="submit" value={"Join Us"} />
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