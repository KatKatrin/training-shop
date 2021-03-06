import './header.scss';
import { ToogleBurgerMenu } from './ToggleBurgerMenu';

import phoneImg from './img/group.png';
import locationImg from './img/location-marker 2.png';
import timeImg from './img/clock.png';
import icons from './img/Group 1.png';

import { useSelector } from "react-redux";

function Header () {

 const {isError} = useSelector(state => state);

  return(
    <>
    
      <div className="top-bar">
            <div className="rectangle">
                <div className="top-bar__content">
                  <img src={phoneImg} alt="phone" className='top-bar__content phoneImg'/>
                  <a href="tel:+375291002030" className='top-bar__content phoneNumber'>+375 29 100 20 30</a>
                </div>

                <div className="top-bar__content">
                  <img src={locationImg} alt="address" className='top-bar__content locationImg'/>
                  <span className='top-bar__content address'>Belarus, Gomel, Lange 17</span>
                </div>

                <div className="top-bar__content">
                  <img src={timeImg} alt="time" className='top-bar__content timeImg'/>
                  <span className='top-bar__content schedule'> All week 24/7</span>
                </div>
            
                <div className='top-bar__icons'>
                  <img src={icons} alt="icons" />
                </div>
            </div>
      </div>
          
              <ToogleBurgerMenu></ToogleBurgerMenu>
              
      { isError ?
       <div className='loading-error' data-test-id="error">
          Ошибка получения данных
        </div> :
        null
      }
      

    </>
  )
}

export default Header;











