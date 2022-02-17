
function ProductsHeader ({category, classHeader}) {


  return (
    <div className={`content__block__header ${classHeader}`}>
      
      <div className="content__block__title"><h3>{category}</h3></div>
      
      <div className="content__block__title-menu">
        <span className="active"> NEW ARRIVALS</span>
        <span>SPECIALS</span>
        <span>BESTSELLERS</span>
        <span>MOST VIEWED</span>
        <span>FEATURED PRODUCTS</span>
      </div>
    
  </div>
  )
}

export default ProductsHeader;