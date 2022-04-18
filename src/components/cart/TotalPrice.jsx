
function TotalPrice ({totalPrice}) {

  return(
    <div className='cart-footer total-price '>
      <div>Total</div>
      <div className='total item-price'>{`$ ${totalPrice}`}</div>
    </div>
  )
};

export default TotalPrice;