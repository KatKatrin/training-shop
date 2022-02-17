import './banner.scss';

import Banner from "../components/banner/Banner";

import cloth from '../components/card-item/img/cloth.png';
import clothBig from '../components/card-item/img/bigCloth.png';
import sizes from '../components/card-item/img/sizes.png';
import addCard from '../components/card-item/img/addCard.png';
import paySystem from '../components/card-item/img/paySystem.png';
import lineCloth from '../components/card-item/img/lineCloth.png';


function CartPage () {

  return(
    <div className="main-content">
      <Banner bannerName={"Women's tracksuit Q109"}></Banner>


      <div className="card-content">

        <div className="card-content__container">
          <img src={cloth} alt="cloth" />
        </div>

        <div className="card-content__container">
          <img src={clothBig} alt="main-cloth" />
        </div>

        <div className="card-content__container information">
          <div className='information-block'>

            <div>
              COLOR: <span>Blue</span>
            </div>

            <div>
              <img src={lineCloth} alt="clothes" />
            </div>

            <div>
              SIZE: <span>S</span>
            </div>

            <div>
              <img src={sizes} alt="sizes" />
            </div>

          </div>

          <div className='information-block container add-card'>
            <div> $ 379</div>
            <div><img src={addCard} alt="add card" /></div>
          </div>

          <div className='information-block'>
            guaranteed safe checkout
          </div>

          <div className='information-block'>
            <img src={paySystem} alt="paySystem" />
          </div>

        </div>
      </div>

    </div>

  )
}

export default CartPage;