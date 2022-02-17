
import MainBlock from "../components/main-blocks/MainBlocks";
import ProductsHeader from "../components/products-header/ProductsHeader"
import CategoryBlock from "../components/main-blocks/categoryBlock/CategoryBlock"
import womenItems from "../components/main-blocks/womenBlock/womenItems";
import menItems from "../components/main-blocks/mensBlock/menItems";
import ActualInfo from "../components/main-blocks/actualInformation/ActualInfo";
import Blog from "../components/main-blocks/blog/Blog";
import Subscribe from "../components/main-blocks/subscribeBlock/Subscribe";

function MainPage () {

  return(
    <>
   
    {/* <div className="main-content"> */}
      
      
      <MainBlock></MainBlock>

      <div className="main-box content__block women">
          <ProductsHeader category="WOMEN’S" classHeader="women"/>
          <CategoryBlock category="women" items={womenItems} />
          
          <button className="button button__main button__long">
              <div className="inner">SEE ALL</div>
          </button>
      </div>

      <div className="main-box content__block men">
          <ProductsHeader category="MEN’S" classHeader="men"/>
          <CategoryBlock category="mens" items={menItems} />
          
          <button className="button button__main button__long">
              <div className="inner">SEE ALL</div>
          </button>
      </div>

      <ActualInfo></ActualInfo>

      <Subscribe></Subscribe>

      <Blog></Blog>

      
    {/* </div> */}

   
    </>
  )
};

export default MainPage;