import {Link} from 'react-router-dom';
import Rating from "../rating/Rating";

const CardItem = ({category, itemCard}) => {
  const {name, images, price, rating, id, discount} = itemCard;

    return(
      <>
        <Link to={`/${category}/${id}`} data-test-id={`clothes-card-${category}`}>
                <img src={`https://training.cleverland.by/shop${images[0].url}`} alt="clothes" /> 
                {discount ? <div className='discout'>{discount}</div> : null}
                
        </Link>
            <div className="cloth__item-name">{name}</div>
            <div className="cloth__information">
              <div className="cloth__item-price">{ price.toString().includes('.') ? (`$ ${price}`) : (`$ ${price}.00`)}</div>
              <Rating ratingNumber={rating}/>
            </div>
      </>
    )
};

export default CardItem;