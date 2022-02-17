import './header.scss';
import {Link, NavLink} from 'react-router-dom';

import phoneImg from './img/group.png';
import locationImg from './img/location-marker 2.png';
import timeImg from './img/clock.png';
import icons from './img/Group 1.png';
import envelop from './img/envelop.png';
import earth from './img/earth.png';
import person from './img/person.png';
import search from './img/search.png';

function Header () {
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

      <div className="menu" data-test-id="menu">

         <div className='menu__rectangle'>
          <div className='menu__logo'>
            <Link to="/" className='menu__logo__text'>CleverShop</Link>
          </div>
          
            <nav className="menu__block">
              <ul className="menu__block__navigation lists"> 

                <NavigationMenuHeader></NavigationMenuHeader>

              </ul>
            </nav>
        
            <div className='menu__icons'>
              <img src={search} alt="navigation-icons" />
              <img src={earth} alt="navigation-icons" />
              <img src={person} alt="navigation-icons" />
              <img src={envelop} alt="navigation-icons" />
              <div className='elipse'>2</div>
            </div>
          </div>

          <div className='menu__rectangle__small'></div>
        </div>
    </>
  )
}

export default Header;

function NavigationMenuHeader () {

  const arrMenu = ['About Us', 'Women', 'Men', 'Beauty', 'Accessories', 'Blog', 'Contact'];

  const menuResult = arrMenu.map((item,i) => {
    let path = item.toLowerCase();

    return(
      <li key={i} className="menu__block__navigation list">
        <NavLink key={i + 1} to={`/${path}`}  className='menu-item' data-test-id={`menu-link-${path}`}>{item}</NavLink>  
      </li>
    )
  })

   return(
    <>
    {menuResult}
    </>
    
  )
}