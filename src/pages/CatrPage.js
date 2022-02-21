import './banner.scss';

import Banner from "../components/banner/Banner";
import Rating from "../components/rating/Rating";

import cloth from '../components/card-item/img/cloth.png';
import clothBig from '../components/card-item/img/bigCloth.png';
import sizes from '../components/card-item/img/sizes.png';
import addCard from '../components/card-item/img/addCard.png';
import paySystem from '../components/card-item/img/paySystem.png';
import lineCloth from '../components/card-item/img/lineCloth.png';
import sizeGuide from '../components/card-item/img/sizeGuide.png';

import car from '../components/card-item/img/truck.png';
import returnImg from '../components/card-item/img/refresh.png';
import envelope from '../components/card-item/img/mail.png';
import message from '../components/card-item/img/message.png';

import relatedItems from '../components/main-blocks/relatedBlock/relatedItems';
import CategoryBlock from '../components/main-blocks/categoryBlock/CategoryBlock';

import arrow from '../constant/arrows/arrow.png';


function CartPage () {

  return(
    <div className="main-content">
      <Banner bannerName={"Women's tracksuit Q109"}></Banner>

      <div className='under-banner-info'>
        <div className='info-block stars-rating'>
          <Rating color={'#F0CC84'}/>
          <span className='quantity__review'> 2 Reviews</span>
        </div>
        <div className='info-block availability'>
          <div> SKU: <span>777</span></div>
          <div className='stock-availability'>Availability: <span>In Stock</span></div>
        </div>
      </div>


      <div className="card-content">

        

        <div className="card-content__container small">

        <div className='slider arrows__block'>
          <div className='arrows__block-prev'>
            <img src={arrow} alt="arrow-up" className='arrow-up'/>
          </div>
          <div  className='arrows__block-next'>
            <img src={arrow} alt="arrow-down" className='arrow-down' />
          </div>
        </div>

          <div>
           <img src={cloth} alt="cloth-small" />
          </div>
         
        </div>

        <div className="card-content__container-second big">

       

          <div className='main-cloth-big'>
            <img src={clothBig} alt="main-cloth-big" />
          </div>

          <div className='slider arrows__block'>
            <div className='arrows__block-prev'>
              <img src={arrow} alt="arrow-left" className='arrow-left'/>
            </div>
            <div  className='arrows__block-next'>
              <img src={arrow} alt="arrow-right" className='arrow-right' />
            </div>
          </div>
          
          
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

          <div className='information__servise'>
            
              <div className="info info-shipping">
                <img src={car} alt="car" className='picture' />
                <div className="text">
                  Shipping & Delivery
                </div>
              </div>

              <div className="info info-returning">
                <img src={returnImg} alt="return" className='picture' />
                <div className="text">
                  Returns & Exchanges
                </div>
              </div>

              <div className="info info-questions">
                <img src={envelope} alt="questions" className='picture'/>
                <div className="text">
                  Ask a question
                </div>
              </div>

          </div>

          <div className='information__guarantee'>
            guaranteed safe checkout
          </div>

          <div className='information__paysystem'>
            <img src={paySystem} alt="paySystem" />
          </div> 

          <div className='information__description-cloth'>

            <div className='descrirtion-header'>DESCRIPTION</div>

            <div className='additional-information'>
              <h4>ADDITIONAL INFORMATION</h4>

              <div className='additional-information__cloth'>
                <p>Color: <span>Blue, White, Black, Grey</span></p>
                <p>Size: <span>XS, S, M, L</span> </p>
                <p>Material: <span>100% Polyester</span></p>
              </div>
            </div>
          
          </div>

          <div className='information__review'>
            <h4>REVIEWS</h4>

            <div className='rating__review'>

              <div className='stars-rating'>
                <Rating color={'#F0CC84'}/>
                <span className='quantity__review'> 2 Reviews</span>
              </div>

              <div className='write__review'>
                <img src={message} alt="message" />
                <span> Write a review</span>
              </div>

            </div>

            <div className='person-review'>

              <div className='person-review__header'>
                <h4>Oleh Chabanov</h4>
                <div>
                  <span className='person-review__time'> 3 months ago</span>
                  <Rating color={'#F0CC84'}/>
                </div>
              </div>
              
              <div className='person-review__text'>
                On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment
              </div>

            </div>

            <div className='person-review'>

              <div className='person-review__header'>
                <h4>ShAmAn design</h4>
                <div>
                  <span className='person-review__time'> 3 months ago</span>
                  <Rating color={'#F0CC84'}/>
                </div>
              </div>

              <div className='person-review__text'>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              </div>

            </div>

          </div>

        </div>

      </div>

      <div className='content__block related-products'>
        <div className='related-products__header'>
          <h3>RELATED PRODUCTS</h3>

          <div className='slider arrows__block'>
            <div className='arrows__block-prev'>
              <img src={arrow} alt="arrow-left" className='arrow-left'/>
            </div>
            <div  className='arrows__block-next'>
              <img src={arrow} alt="arrow-right" className='arrow-right' />
            </div>
          </div>

        </div>

        <CategoryBlock category='related' items={relatedItems}></CategoryBlock>

      </div>

    </div>

  )
}

export default CartPage;