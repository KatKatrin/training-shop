
const MAIN_CLOTHES_MENU = [
  {
    particulars: 'isNewArrivals',
    name: 'NEW ARRIVALS'
  },
  {
    particulars: 'isSpecial',
    name: 'SPECIALS'
  },
  {
    particulars: 'isBestseller',
    name: 'BESTSELLERS'
  },
  {
    particulars: 'isMostViewed',
    name: 'MOST VIEWED'
  },
  {
    particulars: 'isFeatured',
    name: 'FEATURED PRODUCTS'
  }
]




const ProductsFilter = ({category, classHeader, filter, onFilterSelect}) => {

  const buttons = MAIN_CLOTHES_MENU.map(({particulars, name}) => {
    const active = filter === particulars;
    const clazz = active ? 'active' : '';
 
    return (
        <span 
            className={`${clazz}`}
            key={name}
            onClick={() => {onFilterSelect(particulars)}}
            data-test-id={`clothes-${classHeader}-${particulars}`}>            
            {name}
        </span>
    )
})


return (
  <div className={`content__block__header ${classHeader}`}>
        <div className="content__block__title"><h3>{category}</h3></div>
        <div className="content__block__title-menu" >
            {buttons}
        </div>
  </div>
)

}

export default ProductsFilter;