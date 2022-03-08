import './banner.scss';

import arrow from './img/arrow.png';
import share from './img/share.png';

function Banner ({bannerName}) {

  return (
    <>

      <div className="banner-block">
        <div className="banner-information">
          <span>Home</span>
          <span>
            <img src={arrow} alt="arrow" />
          </span>
          <span>{bannerName}</span>
        </div>

        <div className="banner-share">
          <span>
            <img src={share} alt="share" />
          </span>
          <span className='share-text'>Share</span>
        </div>
      </div>

      <div className="banner-block-name">{bannerName}</div>

    </>
  )
};

export default Banner;