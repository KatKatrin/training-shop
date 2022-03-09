import './mainBlocks.scss'
import men from "./img/men.png";
import accessories from "./img/accessories.png";
import women from "./img/block.png";
import car from "./img/car.png";
import support from "./img/support.png"
import returnImg from "./img/return.png"


import SliderMainPage from '../slider/Slider';



function MainBlock () {

  return(
    <>
    <div className="main-box main-content__block">


            <div className="main-content__block__item banner" >

              <div className='main-title-banner' data-test-id="main-slider">

                <SliderMainPage ></SliderMainPage>

              </div> 

              

            </div>

            <div className="main-content__block__item women">
              <img src={women} alt="women" />
            </div>
            <div className="main-content__block__item men">
              <img src={men} alt="men" />
            </div>
            <div className="main-content__block__item accessories">
              <img src={accessories} alt="accesories" />
            </div>
    </div>   

        
        <div className="main-box main-content__conditions">

              <div className="main-content__conditions__item shipping">
                <div className="picture">
                  <img src={car} alt="car" />
                </div>
                
                <div className="text">
                  <h4>FREE SHIPPING</h4>
                  On all UA order or order above $100
                </div>
              </div>

              <div className="main-content__conditions__item returning">
                <div className="picture">
                <img src={returnImg} alt="return" />
                </div>
                
                <div className="text">
                  <h4>30 DAYS RETURN</h4>
                  Simply return it within 30 days for an exchange
                </div>
              </div>

              <div className="main-content__conditions__item support">
                <div className="picture">
                  <img src={support} alt="support" />
                </div>
                
                <div className="text">
                  <h4>SUPPORT 24/7</h4>
                  Contact us 24 hours a day, 7 days a week
                </div>
              </div>

        </div>
    </>
  )
};

export default MainBlock;