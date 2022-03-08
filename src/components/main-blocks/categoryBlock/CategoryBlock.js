import CardItem from '../../card-item/CardItem';
import './categoryBlock.scss';


const CategoryBlock = ({category, items, filter}) => {

  const renderItems = (arrCards) => {

      const card = arrCards.map( (itemCard, i) => {

        if(itemCard.particulars[filter]){

          return(
            <li className="cloth__item" key={i}>
              {<CardItem category={category} itemCard={itemCard}></CardItem>}
            </li>
          )
        }

        return ''
      });

    return card
  }

  
  const result= renderItems(items);


  return (
    <section className="content-type catalog">
    <ul className="clothes__list grid">
        {result}
    </ul>
  </section>
  )
}


export default CategoryBlock;

