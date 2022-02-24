import Rating from "../../rating/Rating";
import './categoryBlock.scss';

import {Link} from 'react-router-dom';



function CategoryBlock ({category, items}) {

  
  function renderItems (arr) {
    const items = arr.map((item, i) => {
          
      return (
            <li className="cloth__item" key={i}>

             <Link to={'/women/page'}>
               <img src={require(`../${category}Block/${category}Img/${i+1}.jpg`)} alt={item.productType} className={`${category}__item-img `}/>
               </Link>
                                  
                    <div className="cloth__item-name">{item.productType}</div>
                    <div className="cloth__information">
                      <div className="cloth__item-price">{`$ ${item.price}.00`}</div>
                     <Rating color={'lightgray'}/>
                    </div>
            </li>
        )
    });

    return (
      <section className="content-type catalog">
        <ul className="clothes__list grid">
            {items}
        </ul>
      </section>
    )
}

  return (
          <>
          {renderItems(items)}
          </>
  )
}

export default CategoryBlock;




