import trash from './img/trash.png';
import {deleteOrder, incOrder, decrOrder, onOpenDelivery } from '../../actions';
import { useDispatch } from 'react-redux';
import TotalPrice from './TotalPrice';



function ItemsInCart ({arrItems, totalPrise, closeCart}) {
  
  const dispatch = useDispatch();

  function onOpenDeliveryForm () {
    dispatch(onOpenDelivery())
  }
  
  function getItemsLayOut (arrItems){
    
    const result = arrItems.map((item,i) => {
      const {id, name, size, color, price, image, quantity} = item;
          
      const finalPrise = (price % 1 === 0 ? quantity * price : Math.floor(quantity * price * 100) / 100 );
                    
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
               <div>{quantity}</div>
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
   
    return(result)
  }
    

  let resultItems = getItemsLayOut(arrItems);
 
  return(
    <>
      <div className='render-items'>
        {resultItems}
      </div>

      <TotalPrice totalPrice={totalPrise}/>
      
      <button className='cart-footer button-big black further' onClick={onOpenDeliveryForm}>FURTHER</button>

      <div className='cart-footer back-button'>
              <button className='button-big view-card close-cart-button' onClick={(e)=> closeCart(e)}>
                VIEW CART
              </button>
      </div> 
    
    </>
  )
};

export default ItemsInCart;