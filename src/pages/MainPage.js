import { useState } from "react";
import {Link} from 'react-router-dom';
import MainBlock from "../components/main-blocks/MainBlocks";

import CategoryBlock from "../components/main-blocks/categoryBlock/CategoryBlock"

import ActualInfo from "../components/main-blocks/actualInformation/ActualInfo";
import Blog from "../components/main-blocks/blog/Blog";
import Subscribe from "../components/main-blocks/subscribeBlock/Subscribe";
import ProductsFilter from "../components/products-header/ProductsHeader";
import { useSelector } from "react-redux";
import Spinner from "../components/spinner/Spinner";


function MainPage () {

  const [filterWomen, setFilterWomen] = useState('isNewArrivals');
  const [filterMen, setFilterMen] = useState('isNewArrivals');

  const {isError, isLoading, products} = useSelector(state => state);

  const onFilterSelectWomen = (filter) => {
    return setFilterWomen(filter)
  }

  const onFilterSelectMen = (filter) => {
   return setFilterMen(filter)
  }

  

  
  return(
    <>
      <MainBlock></MainBlock>

      <div className="main-box content__block women">
       
         
          <ProductsFilter category="WOMEN’S" classHeader="women" filter={filterWomen} onFilterSelect={onFilterSelectWomen}></ProductsFilter>
          { isError ? null :
            isLoading ?
            <Spinner/> :
            <CategoryBlock category="women" items={products.women} filter={filterWomen} /> 
          }
          
          
          <Link to={'/women'}>
            <button className="button button__main button__long">
                <div className="inner">SEE ALL</div>
            </button>
          </Link>
        
      </div>

      <div className="main-box content__block men">
          
          <ProductsFilter category="MEN’S" classHeader="men" filter={filterMen} onFilterSelect={onFilterSelectMen}></ProductsFilter>
          { isError ? null :
            isLoading ?
            <Spinner/> :
            <CategoryBlock category="men" items={products.men} filter={filterMen} /> 
          }
          
          <Link to={'/men'}>
            <button className="button button__main button__long">
                <div className="inner">SEE ALL</div>
            </button>
          </Link>
      </div>

      <ActualInfo></ActualInfo>
      <Subscribe></Subscribe>
      <Blog></Blog>

     

    </>
  )
};

export default MainPage;