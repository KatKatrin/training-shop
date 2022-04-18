import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import TotalPrice from './TotalPrice';
import { validationDelivery } from './validation';
import { useHttp, useHttpPost } from '../../services/useHttp.hook';
import { fetchedCountry, onOpenCartItem, onOpenPayment, setDeliveryData } from '../../actions';



function Delivery ({totalPrise}) {

  const {countrieSS, deliveryData} = useSelector(state => state);
  
  const [countries, setCountriesState] = useState([]);
  const [stores, setStores] = useState([]);

 
  const dispatch = useDispatch();
         
  const {deliveryMethod, phone, email, country, city, street, house, apartment, postcode, storeAddress} = deliveryData;
  
  const {request} = useHttp();
  const {requestPost}= useHttpPost();


  const setAllValues = (values) => {
   dispatch(setDeliveryData(values))
   dispatch(fetchedCountry(countries))
  }
 

  const onHandleChangeStore = (e, values) => {
    if(e.target.name === 'storeAddress' && e.target.value.length > 2 ){

      if(e.target.value.length === 3){
        requestPost("https://training.cleverland.by/shop/search/cities", {city:e.target.value, country:values.country})
        .then(data => { if(!data.length){ 
                        e.target.value='Store address not founded'} else {
                            setStores(data)
                          }
                        })
        .catch((er) => e.target.value = er);
      } else 

      if(!stores.some(item => item.city.toLowerCase().includes(e.target.value.toLowerCase()))){
          e.target.value = 'Store address not founded'
      }
      
    }
  }

  const onhandleChangeMethod = (e) => {
    if(e.target.value === 'store pickup' && !countrieSS.length){
      request("https://training.cleverland.by/shop/countries")
        .then(data => setCountriesState(data))
        .catch((er) => (er));
    } 
  }


  const onHandleInputPhone = (e) => {
           
    if(e.target.value.length === 2 && /^\d+$/.test(e.target.value)){
      e.target.value = '+375(' + e.target.value + ')';
    } 
    if(e.target.value.length === 6 && /^[0-9,+]+$/.test(e.target.value) ){
      e.target.value = e.target.value.substring(0,4) +"(" + e.target.value.substring(4,6) +")"
    }

  }

  const customHandleBlur = (e, touched, values) => {
    touched.storeAddress = true;
    
    if(stores.length){
      if(!stores.some(item => item.city.toLowerCase() === e.target.value.toLowerCase())){
        values.storeAddress = 'Store address not founded';
      }
    }
  }

  
  return (
    <>
    <Formik
    initialValues={{
        deliveryMethod:deliveryMethod,
        phone:phone,
        email:email,
        country:country, 
        city:city,
        street: street,
        house: house,
        apartment:apartment,
        postcode:postcode,
        storeAddress: storeAddress,
        terms:false
    }}

    validationSchema = { validationDelivery() }
    
    onSubmit={values => {
           
      if(values.deliveryMethod === 'store pickup' && stores.length){
        if(!stores.some(item => item.city.toLowerCase() === values.storeAddress.toLowerCase())){ 
          
          values.storeAddress = 'Store address not founded'
           setAllValues(values)
        } else {
          dispatch(onOpenPayment());
          setAllValues(values)
        }
      } else {
        dispatch(onOpenPayment());
        setAllValues(values)
      }
     
    }}
    
    validateOnMount={true}
    >

    { ({errors, touched, values, validateOnMount, handleBlur, ...prop}) => (
     
      <Form className="main-cart-form delivery" >
        
      <div className="form-delivery">
        <div className='label__method'>Choose the method of delivery of the items</div>

        <div className='delivery-method__radio' onChange={(e)=> onhandleChangeMethod(e, values)}>
        <label className='label__method'>
          
          <Field type='radio' name="deliveryMethod" value='pickup from post offices'  />
          <span >Pickup from post offices</span>
        </label>

        <label className='label__method'>
          <Field type='radio' name="deliveryMethod" value='express delivery'  />
          <span >Express delivery</span>
        </label>

        <label className='label__method'>
          <Field type='radio' name="deliveryMethod" value='store pickup'  />
          <span >Store pickup</span>
        </label>
      </div>

      <label htmlFor="phone" className='cart-input-name'>PHONE</label>
      <Field className={`field-input ${errors.phone && touched.phone && 'is-invalid'}`} type="tel" id="phone" name="phone" 
              maxLength='15' placeholder='+375 (_ _) _ _ _ _ _ _ _' onInput={(e) => onHandleInputPhone(e)} />
      <ErrorMessage className='error' name='phone' component ='div'></ErrorMessage>    

      <label htmlFor="email" className='cart-input-name'>E-MAIL</label>
      <Field className={`field-input ${errors.email && touched.email && 'is-invalid'}`} id="email" 
             name="email" type="email" placeholder='e-mail' />
      <ErrorMessage className='error' name='email' component ='div'></ErrorMessage>
     

      {values.deliveryMethod === 'pickup from post offices' || values.deliveryMethod === 'express delivery' ?
        (<div>
            <div className='cart-input-name'>ADDRESS</div>
            <Field className={`field-input ${errors.country && touched.country && 'is-invalid'}`} id="country" 
                   name="country" placeholder='Country'  />
            <ErrorMessage className='error' name='country' component ='div'></ErrorMessage>

            <Field className={`field-input ${errors.city && touched.city && 'is-invalid'}`} id="city" name="city" placeholder='City'  />
            <ErrorMessage className='error' name='city' component ='div'></ErrorMessage>

            <Field className={`field-input ${errors.street && touched.street && 'is-invalid'}`} id="street" name="street" placeholder='Street' />
            <ErrorMessage className='error' name='street' component ='div'></ErrorMessage>

            <div className='address-apartment-home'>
              <div>
                <Field className={`field-input_half ${errors.house && touched.house && 'is-invalid'}`} id="house" 
                       name="house"  placeholder='House'  />
                <ErrorMessage className='error' name='house' component ='div'></ErrorMessage>
              </div>
              
              <div>
                <Field id="apartment" name="apartment"  placeholder='Apartment' className="field-input_half"  />
                <ErrorMessage className='error' name='apartment' component ='div'></ErrorMessage>
              </div>
            </div>
        </div>) :  null
      }
      

      { values.deliveryMethod === 'pickup from post offices' ?
        (<div>
          <div><label htmlFor="poctcode" className='cart-input-name'>POSTCODE</label></div>
          <Field className={`field-input ${errors.postcode && touched.postcode && 'is-invalid'}`} id="postcode" maxLength='6'
                 name="postcode" placeholder='BY______' />
          <ErrorMessage className='error' name='postcode' component ='div'></ErrorMessage>
        </div>) : 
        null 
      }

      
      {values.deliveryMethod === 'store pickup' ?
        (<div className='address-store' onInput={(e) => onHandleChangeStore(e, values)}>
          <div className='cart-input-name'> ADDRESS STORE</div>
         
  
          
          <Field  className={`field-input ${errors.country && touched.country && 'is-invalid'}`} 
                  id="country" name="country" as='select' placeholder='Country'>
                    {/* <option value='' placeholder='Country'>Country</option>   */}
                  { countries.length ? countries.map((item, i) => (<option key={i} value={item.name}>{item.name}</option>)) :
                    countrieSS.length ? countrieSS.map((item, i) => (<option key={i} value={item.name}>{item.name}</option>)) 
                    : null } 
          </Field>
          <ErrorMessage className='error' name='country' component ='div'></ErrorMessage>

          <Field className={`field-input ${errors.storeAddress && touched.storeAddress && 'is-invalid'}`} id="storeAddress" 
                  name="storeAddress" placeholder='Store address' list='cityListStore' disabled={Boolean(!values.country)}
                  onBlur={(e) => {customHandleBlur(e, touched, values)}}>        
          </Field>
          <Field as='datalist' id='cityListStore'>
                {stores.length ?
                  stores.map((item,i) => (<option key={i} value={item.city}/>)) : null
                }
          </Field>
          <ErrorMessage className='error' name='storeAddress' component ='div'></ErrorMessage>
        </div>) :
        null 
      }
     
        <div className='checkbox-agree'>
          <Field className={`${errors.terms && touched.terms && 'is-invalid'}`} name="terms" type="checkbox" />
          <label className="checkbox">  I agree to the processing of my personal  information</label>
        </div>
        <ErrorMessage className='error' name='terms' component ='div'></ErrorMessage>

      </div>

      <TotalPrice totalPrice={totalPrise} />
        
      <button type="submit" className='button-big cart-footer delivery'>FURTHER</button>

      <div className='cart-footer back-button inside'>
            <button className='button-big view-card' onClick={()=> {dispatch(onOpenCartItem()); dispatch(setDeliveryData(values))}}>
              VIEW CART
            </button>
      </div> 

    </Form>
    )
    }

    </Formik>

  </>
)}

export default Delivery;
