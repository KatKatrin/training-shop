import './actualInfo.scss';

import lookbook from "./actualInformationImg/lookbook.jpg";
import saleUp from "./actualInformationImg/saleUp.png";



function ActualInfo () {

  return (
     <div className="main-box content__actual-information">
          <img src={lookbook} alt="lookbook" />
          <img src={saleUp} alt="saleUp" />
      </div>
  )
}

export default ActualInfo;