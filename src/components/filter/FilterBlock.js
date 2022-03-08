import './filterBlock.scss';
import serverData from '../main-blocks/serverData/serverData';

import filterImg from './img/adjustments.png';
import arrowDown from './img/arrow-down.png';
import viewGrid from './img/view-grid.png';
import viewList from './img/view-list.png';



const FilterBlock = ({category, onChangeInput, onHandleChangeStatusFilter, statusFilter}) => {


  const allFilters = getAllFilters(serverData, category);

  function renderMoneyFilter () {
    const allPrices = [[0,50], [51, 100], [101, 200], [201, 400]];
  
   const result = allPrices.map((item,i) => {
      return (
        <div className='filter-item' key={i} onChange={(e) => {onChangeInput(e)} } >
          <input type="checkbox"  name={item} className='price' data-info={item}/>
          <label htmlFor={item[1]}>{`$${item[0]} - $${item[1]}`}</label>
      </div>
      )
    })
    
    return(
      <div className='filter-container price'>
        {result}
      </div>
    )
  }

  
  const renderFilters = (allFilters) => {

    return (
      allFilters.map((filter,i) => {
          const filterName =Object.keys(filter)[0];

          const oneOfFilter = filter[filterName].map((item,i) => {
            return(
              <div className={`filter-item ${item}`} key={item} onChange={(e) => {onChangeInput(e)} } data-test-id={`filter-${filterName}-${item}`}>
                <input type="checkbox" className={filterName} name={item}/>
                <label htmlFor={item}>{item}</label>
              </div>
            )
          });
    
        return(
          <div className='filter-container' key={filterName} data-test-id={`filters-${filterName}`}>
            {oneOfFilter}
          </div>
        )
      })
    )
  };

 
  return(

    <>
    <div className="filter-string">

            <div className="filter-string__item" onClick={onHandleChangeStatusFilter} data-test-id={'filter-button'}> 
            <div>
              {!statusFilter ? <img src={filterImg} alt="filter"/> :<div>{`X ${"\u00A0" }`}</div>} 
            </div>
              
              <div>FILTER</div>
            </div>

            <div className="filter-string__item">
              <img src={viewList} alt="view-list" />
              <img src={viewGrid} alt="view-grid" />
            </div>

            {!statusFilter ? 
              <div className="filter-string__item">
                <div>BESTSELLERS</div>
                <img src={arrowDown} alt="arrow-down" />
              </div>
            : null}
           
    </div>
      
      {statusFilter ? 
        <div data-test-id={`filters-${category}`}>
            <div className='filter-header active'>
              <div>COLOR</div>
              <div>SIZE</div>
              <div>BRAND</div>
              <div>PRICE</div>
            </div>
            <div className='filter-main-block active'>
              {renderFilters(allFilters)}
              {renderMoneyFilter()}
            </div>
          
        </div>
      : null}
      

    </>
  )
}

export  default FilterBlock;


export function getAllFilters(serverData, category) {
    let allColors = [];
    let allSizes = [];
    let allBrands = [];
        
    serverData[category].forEach((item) => {

      const {images, sizes, brand} = item;
      
      images.forEach(item => {

        if (!allColors.includes(item.color)){
          allColors = [...allColors, item.color]
         return (allColors)
        }
        return;
      })

      sizes.forEach(item => {

        if (!allSizes.includes(item)){
          allSizes = [...allSizes, item]
         return (allSizes)
        }
        return;
      })

      if (!allBrands.includes(brand)){
        allBrands = [...allBrands, brand]
       return (allBrands)
      }
    })
    return([{color: allColors}, {sizes:allSizes}, {brand:allBrands}])
}