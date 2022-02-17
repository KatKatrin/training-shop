import CategoryBlock from "../components/main-blocks/categoryBlock/CategoryBlock";
import womenItems from "../components/main-blocks/womenBlock/womenItems";

import './banner.scss';


import filterImg from '../components/filter/img/adjustments.png';
import arrowDown from '../components/filter/img/arrow-down.png';
import viewGrid from '../components/filter/img/view-grid.png';
import viewList from '../components/filter/img/view-list.png';
import Banner from "../components/banner/Banner";

function WomenPage () {

  return (
    <div className="main-content">

     <Banner bannerName={"Women"}></Banner>

      <div className="filter-string">
            <div className="filter-string__item"> 
              <div><img src={filterImg} alt="filter" /></div>
              <div>FILTER</div>
            </div>
            <div className="filter-string__item">
              <img src={viewList} alt="view-list" />
              <img src={viewGrid} alt="view-grid" />
            </div>
            <div className="filter-string__item">
              <div>BESTSELLERS</div>
              <img src={arrowDown} alt="arrow-down" />
            </div>
      </div>

      <div className="main-box content__block women">
          <CategoryBlock category="women" items={womenItems} />
      </div>

    </div>
  )
};

export default WomenPage;