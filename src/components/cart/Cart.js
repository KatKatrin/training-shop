import './cart.scss';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toggleCart, deleteOrder, incOrder, decrOrder } from '../../actions';

import trash from './img/trash.png';

const Cart = () => {

   const {order, openCart} = useSelector(state => state);
   
   const dispatch = useDispatch();
 
   function closeCart (e) {
     if ((openCart && e.target.className === 'products-cart-wrapper') || e.target.className.includes('close-cart-button')){
       dispatch(toggleCart(false));
       document.body.style.overflow = "visible";
     }
   }

   function renderItems (arrItems){
     let totalPrice = 0;
     if(!arrItems.length){
       return(
         <>
          <div className='absent-items'>Sorry,  <br />  your cart  <br /> is empty</div>
          <div className='button-big back close-cart-button' onClick={(e)=> closeCart(e)}>BACK TO SHOPPING</div>
         </>
     
       )
     } else{
       const res = arrItems.map((item,i) => {
         const {id, name, size, color, price, image, quantity} = item;
             
         const finalPrise = (price % 1 === 0 ? quantity * price : Math.floor(quantity * price * 100) / 100 );
         totalPrice = totalPrice % 1 === 0 ? totalPrice + finalPrise :  Math.floor((totalPrice + quantity * price) * 100) / 100;
        
         return(
          <div className='item-cloth'key={i} value={id} data-test-id='cart-card'>
            <div className='item-img'>
              <img src={image}
              alt="clothes"/>
            </div>

            <div className='cart-selected-options'>
              <div className='item-name'>{name}</div>
              <div className='item-color-size'>{`${color},${size}`}</div>

              <div className='manage-item'>
                <div className='item-counter'>
                  <span>
                    <button onClick={()=> dispatch(decrOrder(id, size, color))} data-test-id='minus-product'>
                      -</button>
                  </span>
                  <span>{quantity}</span>
                  <span>
                    <button onClick={()=> dispatch(incOrder(id, size, color))} data-test-id='plus-product'>
                      +</button>
                  </span>
                </div>
                <div className='item-price'>{`$ ${finalPrise}`}</div>
                <div onClick={()=>dispatch(deleteOrder(id, size, color))} data-test-id='remove-product'>
                  <img src={trash} alt="trash" />
                </div>
              </div>
            </div>
        </div>
         )

       })

       return (
         <>
          <div className='cart-items-header'>
            <div className='items-header active'> Item in Cart</div>
            <div className='items-header'>{`/ \u00A0 Delivery Info \u00A0 /`}</div>
            <div className='items-header'>Payment </div>
           
          </div>
            <div className='render-items'>{res}</div>

           <div className='cart-footer'>
              <div className='total-price'>
                <div>Total</div>
                <div className='total item-price'>{`$ ${totalPrice}`}</div>
              </div>
              <div className='button-big black further'>FURTHER</div>
              <div className='button-big view-card close-cart-button' onClick={(e)=> closeCart(e)}>
                VIEW CART
              </div>
          </div> 
         </>
        )
     }
   }

   
   function OpenCart () {

    return(
      <div className='products-cart-wrapper' onClick={(e)=> closeCart(e)}>
        <div className='products-cart' data-test-id='cart'>

          <div className='cart-header'>
            <div>SHOPPING CART</div>
            <div className='close-cart-button' onClick={(e)=> closeCart(e)}>X</div>
          </div>

          <div className='items-information'>

            {renderItems(order)}
        

          </div>
          
        </div>
      </div>
      )
  }

  const result = openCart ? <OpenCart/>  : null;

   return(
     <>
        {result}
     </>
  
  )
}

export default Cart;

