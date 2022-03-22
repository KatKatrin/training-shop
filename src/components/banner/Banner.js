import './banner.scss';
import { Link } from 'react-router-dom';
import arrow from './img/arrow.png';
import share from './img/share.png';

function Banner ({bannerName, product}) {

  return (
    <>

      <div className="banner-block">
        
        <div className="banner-information">
          <Link to={'/'}>
            <span>Home</span>
          </Link>
          
          <span>
            <img src={arrow} alt="arrow" />
          </span>

          <Link to={`/${bannerName}`}>
            <span>{bannerName}</span>
          </Link>

         {product ? 
            <span>
              <img src={arrow} alt="arrow" />
              {` ${product}`}
            </span> 
          :  null
          }
        </div>

        <div className="banner-share">
          <span>
            <img src={share} alt="share" />
          </span>
          <span className='share-text'>Share</span>
        </div>
      </div>

      <div className="banner-block-name">{product}</div>

    </>
  )
};

export default Banner;