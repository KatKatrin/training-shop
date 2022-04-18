import { useDispatch, useSelector } from 'react-redux';

import ItemsInCart from './ItemsInCart';
import Delivery from './Delivery';
import Payment from './Payment';
import { onOpenCartItem, toggleCart, onOpenPayment, deleteAllOrder, setDeliveryData, setPaymentData} from '../../actions';

import './cart.scss';


const Cart = () => {
    
   const {order, openCart, cartItemsOpen, cartDeliverOpen, cartPaymentOpen, successShopping, unSuccessShopping} = useSelector(state => state);
    
   const dispatch = useDispatch();
 
   function closeCart (e) {
     
     if(typeof(e.target.className) === 'object'){
       return
     } else
     if ((openCart && e.target.className === 'products-cart-wrapper') || e.target.className.includes('close-cart-button')){
       dispatch(toggleCart(false));
       document.body.style.overflow = "visible";
     }
   }

   function getTotalPrice(order){
    let totalPrice = 0;
    order.forEach(item => {
      totalPrice +=  Math.floor(item.quantity * item.price * 100) / 100;
    })
    return totalPrice;
   }
   
   const totalPrise =  getTotalPrice(order);

   function renderOrderBlock (arrItems){
     
     if(!arrItems.length){
       return(
         <>
          <div className='absent-items'>Sorry,  <br />  your cart  <br /> is empty</div>
          <div className='button-big back close-cart-button' onClick={(e)=> closeCart(e)}>BACK TO SHOPPING</div>
         </>     
       )
     } else

    if(!successShopping && (cartItemsOpen || cartDeliverOpen || cartPaymentOpen)){
        return (
         <>
            <div className='cart-items-header'>
              <div className={`items-header ${cartItemsOpen ? 'active': null }`}> Item in Cart</div>
              <div className={`items-header ${cartDeliverOpen ? 'active': null }`}>
                {`/ \u00A0 Delivery Info \u00A0 /`}
              </div>
              <div className={`items-header ${cartPaymentOpen ? 'active': null }`}>Payment </div>
            </div>
                      
            {cartItemsOpen ? <ItemsInCart arrItems={arrItems} totalPrise={totalPrise} closeCart={closeCart}/> : null} 
            {cartDeliverOpen ? <Delivery totalPrise={totalPrise}/> : null}
            {cartPaymentOpen ? <Payment totalPrise={totalPrise}/> : null} 
         </>
        )
     } else{
        if(successShopping){
          return( 
          <>
            <div className='absent-items'>Thank you  <br /> for your order </div>
            <div className='cart-result_additional-info'>Information about your order <br />will appear in your e-mail.</div>
            <div className='cart-result_additional-info'>Our manager will call you back.</div>
            <div className='button-big back close-cart-button' onClick={(e)=> {closeCart(e); dispatch(deleteAllOrder())}}>
              BACK TO SHOPPING
            </div>
          </> )
        } else
        if(unSuccessShopping.result){
           return( 
            <>
              <div className='absent-items'>Sorry, <br /> your payment <br />has not been processed. </div>
              <div className='cart-result_additional-info'>{unSuccessShopping.errorMessage}</div>
               <div className='cart-footer button-big black error' onClick={()=> dispatch(onOpenPayment())}>
                 BACK TO PAYMENT
               </div> 
              <div className='cart-footer back-button error'>
                <button className='button-big view-card' onClick={()=> dispatch(onOpenCartItem())}>
                  VIEW CART
                </button>
              </div> 
            </>)
        } 
      }
   }
   
   function OpenCart () {

    return(
      <div className='products-cart-wrapper' onClick={(e)=> closeCart(e)}>
        <div className='products-cart' data-test-id='cart'>
          <div className='cart-header'>
            <div>SHOPPING CART</div>
            <div className='close-cart-button' 
                 onClick={(e)=> {closeCart(e); dispatch(setDeliveryData()); dispatch(setPaymentData())}}>
                   X
            </div>
          </div>

          <div className='items-information'>
            {renderOrderBlock(order)}
          </div>
          
        </div>
      </div>
      )
  }

  const result = openCart ? <OpenCart/> : null;

   return(
     <>
        {result}
     </>
    )
}

export default Cart;

