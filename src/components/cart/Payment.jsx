import  {useState}  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import Eye from './Eye';
import TotalPrice from './TotalPrice';
import { validationPayment } from './validation';
import { useHttpPost } from '../../services/useHttp.hook';
import { onOpenDelivery, setDeliveryData, setPaymentData, setSuccesShoping, setUnSuccesShoping } from '../../actions';

import visa from './img/visa.png';
import master from './img/mastercard.png';
import paypal from './img/paypal.png';




const Payment = ({totalPrise}) => {

  const {paymentData, order, deliveryData} = useSelector(state => state);
  const [openEye, setOpenEye] = useState(false);
  const [cvv, setCvv] = useState('');

  const {requestPost}= useHttpPost();

  const{paymentMethod, card, cardDate, cardCVV, cashEmail} = paymentData;
  
  const dispatch = useDispatch();


  const onHandleInputCardNum = (e, touched)=> {
    touched[e.target.name] = true
  }

  const onHandleInputDate = (e, touched) => {
    touched[e.target.name] = true
    if(e.target.name === 'cardDate' && e.target.value.length === 2 && !e.target.value.includes('/')){
      e.target.value = e.target.value + "/"
    }
  }

  const onhandleChangeEye = (e, values) => {
      
    setOpenEye(!openEye)
    
    if(!openEye){
      values.cardCVV = cvv;
      console.log(values.cardCVV)
    } else {
      values.cardCVV.replace(/./gm,'*')
      values.cardCVV = values.cardCVV.replace(/./gm,'*')
    }
  }

  const onPutCVV = (e) => {
        
    if(!openEye && cvv.length < 3) { 
      console.log(e.target.value)
      setCvv(`${cvv}${e.target.value.replace(/\*/gm,'')}`)
      e.target.value = e.target.value.replace(/./gm,'*')
    } else 
    if(cvv.length < 3){
      setCvv(`${e.target.value}`)
    }

    if(!e.target.value){
      setCvv('')
    }
    if(e.target.value.length < cvv.length){
      setCvv(cvv.substring(0, e.target.value.length))
    }
   
  }


  return(
   <>
   <Formik
    initialValues={{
      paymentMethod:paymentMethod,
      card:card,
      cardDate:cardDate,
      cardCVV:cardCVV, 
      cashEmail:cashEmail,
    }}

    validationSchema = { validationPayment()}

      onSubmit={values => {

        if(values.paymentMethod === 'visa' || values.paymentMethod === 'master' ){
          const resPayment = {...values, paymentMethod:'card', cardCVV:cvv, cashEmail:''}
         
          
          const finalObj = {products: order, totalPrice: totalPrise, ...resPayment, ...deliveryData};

          
           requestPost("https://training.cleverland.by/shop/cart", finalObj)
              .then(() => {dispatch(setSuccesShoping()); dispatch(setDeliveryData()); dispatch(setPaymentData()) })
              .catch((err) => {dispatch(setUnSuccesShoping(err.toString())); dispatch(setPaymentData(resPayment));})

        } else {
          let finalObj = {};
          let resPaym = {};
          if(values.paymentMethod === 'PayPall'){
              resPaym = {...values, card:'', cardCVV:'', cardDate:''}
             finalObj = {products: order, totalPrice: totalPrise, ...values, ...deliveryData, ...resPaym};
          } else{
            resPaym = {...values, card:'', cardCVV:'', cardDate:'', cashEmail:''}
            finalObj = {products: order, totalPrice: totalPrise, ...values, ...deliveryData, ...resPaym};
          }
          
           requestPost("https://training.cleverland.by/shop/cart", finalObj)
              .then(() => {dispatch(setSuccesShoping()); dispatch(setDeliveryData()); dispatch(setPaymentData()) })
              .catch((err) => {dispatch(setUnSuccesShoping(err.toString())); dispatch(setPaymentData(resPaym));})
        }
        

          
      }}

      // validateOnMount={true}
   
   >

     {({ values, errors, touched}) => (
       
      
      <Form   className="main-cart-form delivery">
      <div className='form-payment'>
                
         <h2>Method of payments</h2>
       
          <div className='payment-method__radio'>
            <label className='payment-label-block label__method'>
              <Field type='radio' name="paymentMethod" value='PayPall' ></Field>
              <img src={paypal} alt="paypal" />
            </label>

            <label className='payment-label-block label__method'>
              <Field type='radio' id='visa' name="paymentMethod" value='visa'></Field>
              <img src={visa} alt="visa" />
            </label>

            <label className='payment-label-block label__method'>
              <Field type='radio' id='master' name="paymentMethod" value='master'></Field>
              <img src={master} alt="mastercard" />
            </label>

            <label className='payment-label-block label__method'>
              <Field type='radio' name="paymentMethod" value='cash'></Field>
              <span>Cash</span>
            </label>
          </div>

        { values.paymentMethod === "PayPall" ?
          <div className='payment-email'>
          <label htmlFor="cashEmail" className='cart-input-name'>E-MAIL</label>
          <Field  id="cashEmail" name="cashEmail" type="email" placeholder='e-mail' className='field-input'/>
          <ErrorMessage className='error' name='cashEmail' component ='div'></ErrorMessage>
          </div> : null
        }

        { values.paymentMethod === "visa" || values.paymentMethod ==='master' ?
          <div className='payment-card-data'>
            <div className='cart-input-name'>CARD</div>
            <Field  id="card" name="card" placeholder='---- ---- ---- ----'  maxLength="16" className={`field-input ${errors.card && touched.card && 'is-invalid'}`}
            onInput={(e) => onHandleInputCardNum(e, touched)}/>
             <ErrorMessage className='error' name='card' component ='div'></ErrorMessage> 
            
           
            <div className='payment-card-info'>
              <div>
               <Field  id="cardDate" name="cardDate" type='text' maxLength="5"  placeholder='MM/YY' className={`field-input_half ${errors.cardDate && touched.cardDate && 'is-invalid'}`}
                       onInput={(e) => onHandleInputDate(e, touched)}  />
               <ErrorMessage className='error' name='cardDate' component ='div'></ErrorMessage> 
              </div>

              <div>
              <div className={`cardCVV-input with-eye field-input_half ${errors.cardCVV && touched.cardCVV && 'is-invalid'}`}>
                <Field type='text' id="cardCVV" placeholder="CVV" name="cardCVV" className='input-cvv-space field-input_half' maxLength='3'
                onInput={(e)=> onPutCVV(e)} />
                <div onClick={(e)=> onhandleChangeEye(e, values)}><Eye openEye={openEye} /></div>
              </div>
                <ErrorMessage className='error' name='cardCVV' component ='div'></ErrorMessage>
              </div>

            </div>
          </div> :
          null
        }


      </div>
      
      <TotalPrice totalPrice={totalPrise}/>
        <button type="submit" className='button-big cart-footer delivery'>
          {values.paymentMethod === 'cash' ? 'READY' : 'CHECK OUT'}
      </button>

      <div className='cart-footer back-button inside'>
          <button className='button-big view-card' onClick={( )=> {dispatch(onOpenDelivery()); dispatch(setPaymentData(values))}}>
            VIEW CART
          </button>
      </div> 

      </Form>
    )}

   </Formik>
   </>
  )
}

export default Payment;