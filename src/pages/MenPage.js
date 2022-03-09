import { useState } from "react";
import CardItem from '../components/card-item/CardItem';
import serverData from '../components/main-blocks/serverData/serverData';

import './banner.scss';

import Banner from "../components/banner/Banner";
import FilterBlock from "../components/filter/FilterBlock";
import {getAllFilters} from '../components/filter/FilterBlock'

function MenPage ({category}) {

  const allFilters = getAllFilters(serverData, category);
  const [color, size, brand] = allFilters;
  
  const [selectedColor, setSelectedColor] = useState(color.color);
  const [selectedSizes, setSelectedSizes] = useState(size.size);
  const [selectedBrand, setSelectedBrand] = useState(brand.brand);
  const [selectedPrice, setSelectedPrice] = useState([[0,50], [51, 100], [101, 200], [201, 400]]);

  const [beforeColor, setBeforeSColor] = useState([]);
  const [beforeSizes, setBeforeSizes] = useState([]);
  const [beforeBrand, setBeforeBrand] = useState([]);
  const [beforePrice, setBeforePrice] = useState([]);

  
  const [statusFilter, setStatusFilter] = useState(false);
  
  const onHandleChangeStatusFilter = () => {
    setStatusFilter(!statusFilter)
  }

 
  const deleteFilter = (nameOffilter, selectTarget) => {
    switch(nameOffilter){
      case 'color':
        setBeforeSColor(beforeColor.filter(item => item !== selectTarget));
        setSelectedColor(selectedColor.filter(item => item !== selectTarget));
        break
      case 'size':
        setBeforeSizes(beforeSizes.filter(item => item !== selectTarget));
        setSelectedSizes(selectedSizes.filter(item => item !== selectTarget));
        break;
      case 'brand':
         setBeforeBrand(beforeBrand.filter(item => item !== selectTarget));
         setSelectedBrand(selectedBrand.filter(item => item !== selectTarget));
         break;
      case 'price' :
        setBeforePrice(beforePrice.filter(item => {
          const arr = selectTarget.split(',')
          return(item[0] !== arr[0]  && item[1] !== arr[1]) }))
         setSelectedPrice(selectedPrice.filter(item => {
            const arr = selectTarget.split(',')
            return(item[0] !== arr[0]  && item[1] !== arr[1]) }));
          break;
      default: return 
    }
  }

  function putAllFilters (stateOfFilter, nameOffilter) {
    console.log(stateOfFilter.length)
    if(stateOfFilter.length === 1){
      switch(nameOffilter){
        case 'color':
          return  setSelectedColor(color.color) ;
        case 'size':
          return  setSelectedSizes(size.size) ;
        case 'brand':
          return  setSelectedBrand(brand.brand) ;
        case 'price' :
          return setSelectedPrice([[0,50], [51, 100], [101, 200], [201, 500]]);
        default: return 
      }
    }
  }

 
  const onChangeInput = (e) => {

    if(!e.target.checked) {
      deleteFilter(e.target.classList.value, e.target.name)
      
      putAllFilters(selectedColor, 'color')
      putAllFilters(selectedSizes, 'size')
      putAllFilters(selectedBrand, 'brand')
      putAllFilters(selectedPrice, 'price')
    }
   
    if(e.target.classList.value === 'color' && e.target.checked) {
      
      const result = [...beforeColor, e.target.name]
      setSelectedColor(result)
      setBeforeSColor([...beforeColor, e.target.name])
    }

    if(e.target.classList.value === 'size' && e.target.checked) {
      
      const result = [...beforeSizes, e.target.name]
      setSelectedSizes(result)
      setBeforeSizes([...beforeSizes, e.target.name])
    }

    if(e.target.classList.value === 'brand' && e.target.checked) {
      
      const result = [...beforeBrand, e.target.name]
      setSelectedBrand(result)
      setBeforeBrand([...beforeBrand, e.target.name])
    }

    if(e.target.classList.value === 'price' && e.target.checked) {
      
      const arrTarget =  e.target.name.split(','); 
      const result = [...beforePrice, arrTarget ];
      setSelectedPrice(result)
      setBeforePrice([...beforePrice, arrTarget])
    }
  }


  return (
    <div className="main-content" data-test-id={`products-page-${category}`}>
     <Banner bannerName={category}></Banner>
     <FilterBlock category={category} onChangeInput={onChangeInput} 
     onHandleChangeStatusFilter={onHandleChangeStatusFilter}
     statusFilter={statusFilter}
     ></FilterBlock>
      
      <div className={`main-box content__block ${category}`}>
        
          <CategoryBlockMen 
          category={category} 
          items={serverData[category]} 
          statusFilter={statusFilter}
          filter={{colors: selectedColor, sizes: selectedSizes, brands:selectedBrand, prices:selectedPrice}}
          checkedInput={{color:beforeColor, size:beforeSizes, brand:beforeBrand, price:beforePrice}}
          />
        
      </div>
    </div>
  )
};

export default MenPage;


export const CategoryBlockMen = ({category, items, filter, statusFilter, checkedInput}) => {

  let quantity = 0;
    
  const {colors, sizes, brands, prices} = filter;

  const {color, size, brand, price} = checkedInput;
   
  const renderItems = (arrCards) => {
    
        const card = arrCards.map( (itemCard, i) => {
          
          if (itemCard.images.filter(item => colors.includes(item.color)).length &&
            itemCard.sizes.filter(item => sizes.includes(item)).length &&
            brands.includes(itemCard.brand) &&
            prices.some((element)=> ((element[0] < itemCard.price) && (element[1] > itemCard.price)) )) {

            quantity++

            return(
               <li className="cloth__item" key={i}>
                {<CardItem category={category} itemCard={itemCard}></CardItem>}
              </li> 
            )
          }
            
          return null
      });

    return card
  }

  const result = renderItems(items);

  return (
    <>
      <div className="input__chooses-item">
        <div className="found-item">{statusFilter ? `${quantity} items found ` : null }</div>
        {color.length ? ` COLOR:${color} ` : null}
        {brand.length ? ` BRAND:${brand} ` : null}
        {size.length ? ` SIZE:${size} ` : null}
        {price.length ? ` PRICE:${price} ` : null}
      </div>
      <section className="content-type catalog">
        <ul className="clothes__list grid">
            {result}
        </ul>
      </section>
    </>
 
  )
}





