import cart from './img/envelop.png';
import earth from './img/earth.png';
import person from './img/person.png';
import search from './img/search.png';
import burger from './img/bars-solid.svg';
import closeMark from './img/closeMark.svg';

import { useState } from 'react';
import {Link} from 'react-router-dom';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { toggleCart } from '../../actions';
import { useSelector } from 'react-redux';
import Spinner from '../spinner/Spinner';

export function ToogleBurgerMenu () {

  const {order, isLoading} = useSelector(state => state);
  const dispatch = useDispatch();
  
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [closeBtn, setCloseBtn] = useState(true);
  const [navMenu, setNavNenu] = useState(false);
  

  function onOpenNavigationMenu (){
    setBurgerMenu(true)
    setCloseBtn(false)
    setNavNenu(true)
    
    document.body.style.overflow = "hidden";
  }

  function onCloseNavMenu (e) {
    setBurgerMenu(false)
    setCloseBtn(true)
    setNavNenu(false)

    document.body.style.overflow = "visible";
  }

  function onToggleCart () {
    dispatch(toggleCart(true));
    document.body.style.overflow = "hidden";
  }

   
  return(
    <>
      
    <div className="main-menu__block" onClick={burgerMenu?  ((e) => onCloseNavMenu(e)): undefined} >
        
            <div className='menu__logo'>
              <Link to="/" className='header-nav-logo menu__logo__text' data-test-id="header-logo-link">CleverShop</Link>
            </div>
            
            <div className='menu' data-test-id="menu">
                <NavigationMenuHeader></NavigationMenuHeader>
            </div>
      
            <div className={cn('navigation-menu__toggle', {visible:navMenu})}
                 onClick={(e) => onCloseNavMenu(e)} data-test-id="burger-menu">
                <NavigationMenuHeader></NavigationMenuHeader>
            </div>

              
      <div className='menu__icons'>

          <div className='menu__icon active'>
            <img src={search} alt="navigation-icons" />
          </div>
          <div className='menu__icon active'>
            <img src={earth} alt="navigation-icons" />
          </div>
          <div className='menu__icon active' >
            <img src={person} alt="navigation-icons" />
          </div>
          <div className='menu__icon mail active' onClick={onToggleCart} data-test-id='cart-button'>
            <img src={cart} alt="navigation-icons" />

          {order.length ? <div className='black-round'>{order.length}</div> : null }
            
          </div>

                          
        <div className={cn('menu__icon toggle toggle-burger', {hidden:burgerMenu})} data-test-id="burger-menu-btn" onClick={onOpenNavigationMenu}> 
          <img src={burger} alt="burger-menu" className='burger-menu'/>
        </div>
        <div className={cn('menu__icon toggle toggle-close', {hidden:closeBtn})} onClick={onCloseNavMenu}>
          <img src={closeMark} alt="close" className='close-mark' />
        </div>

      </div>

      <div className='menu__rectangle__small'></div>

    </div>
    </>
  )
}

export function NavigationMenuHeader () {

  const arrMenu = ['About Us', 'Women', 'Men', 'Beauty', 'Accessories', 'Blog', 'Contact'];

  const menuResult = arrMenu.map((item,i) => {
    let path = item.toLowerCase();

    return(
      <li key={i} className="menu__list-item">
        <Link key={i + 1} to={`/${path}`}  className='menu-item' data-test-id={`menu-link-${path}`}>{item}</Link>  
      </li>
    )
  })

   return (
    <>
     <nav className="menu__block__navigation">
      <ul className="menu__navigation-list"> 
        {menuResult}
      </ul>
    </nav>
    </>
  )
};