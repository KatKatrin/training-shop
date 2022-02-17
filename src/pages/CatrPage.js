import './banner.scss';

import Banner from "../components/banner/Banner";

import cloth from '../components/card-item/img/cloth.png';
import clothBig from '../components/card-item/img/bigCloth.png';
import sizes from '../components/card-item/img/sizes.png';
import addCard from '../components/card-item/img/addCard.png';
import paySystem from '../components/card-item/img/paySystem.png';
import lineCloth from '../components/card-item/img/lineCloth.png';
import sizeGuide from '../components/card-item/img/sizeGuide.png';


function CartPage () {

  return(
    <div className="main-content">
      <Banner bannerName={"Women's tracksuit Q109"}></Banner>


      <div className="card-content">

        <div className="card-content__container small">
          <img src={cloth} alt="cloth-small" />
        </div>

        <div className="card-content__container-second">
          <img src={clothBig} alt="main-cloth-big" />
          
        </div>

        <div className="card-content__container information">

          <div className='information__cloth'>

            <div className='info color'>
              COLOR: <span>Blue</span>
            </div>

            <div className='info'>
              <img src={lineCloth} alt="clothes" />
            </div>

            <div className='info size'>
              SIZE: <span>S</span>
            </div>

            <div className='info size__picture'>
              <img src={sizes} alt="sizes" />
            </div>

            <div className='info size__guide'>
              <img src={sizeGuide} alt="size guide" />
            </div>

          </div>

          <div className='information__price'>
            <div className='price'> $ 379.99</div>
            <div><img src={addCard} alt="add card" /></div>
          </div>

          <div className='information__guarantee'>
            guaranteed safe checkout
          </div>

          <div className='information__paysystem'>
            <img src={paySystem} alt="paySystem" />
          </div> 
        </div>

      </div>

    </div>

  )
}

export default CartPage;