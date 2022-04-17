export const fetchedProducts = (products) => 
      ({type: 'FETCHED_PRODUCTS', payload: products});

export const loadingProducts = () => 
      ({type: 'LOADING_PRODUCTS'});

export const errorLoadingProducts = () => 
      ({type: 'ERROR_LOADING_PRODUCTS'});

export const toggleCart = (open) => 
      ({type: 'TOGGLE_CART', payload: open});

export const addOrder = (id, name, size, color, price, image) => 
      ({type: 'ADD_ORDER', payload: {id, name, size, color, price, image}});

export const deleteOrder = (id, size, color) => 
      ({type: 'DELETE_ORDER', payload: {id,  size, color}});

export const deleteAllOrder = () => 
      ({type: 'DELETE_ALL_ORDER'});


export const incOrder = (id, size, color) => 
      ({type: 'INC_ORDER', payload: {id,  size, color}});

export const decrOrder = (id, size, color) => 
      ({type: 'DECR_ORDER', payload: {id,  size, color}});

export const ontoggleReviewForm = () => 
      ({type: 'TOGGLE_FORM'});

export const onOpenCartItem = () => 
      ({type: 'CART_ITEMS_OPEN'});

export const onOpenDelivery = () => 
      ({type: 'CART_DELIVERY_OPEN'});

export const onOpenPayment = () => 
      ({type: 'CART_PAYMENT_OPEN'});

export const fetchedCountry = (countries) => 
      ({type: 'FETCHED_COUNTRYS', payload: countries});

// export const fetchedStores = (stores) => 
//       ({type: 'FETCHED_STORES', payload: stores});

export const setDeliveryData = ( deliveryData = {
                                          deliveryMethod:'pickup from post offices', 
                                          phone:'',  email:'', country:'', city:'', street:'', house:'', apartment:'', 
                                          postcode:'', storeAddress:''
                                    }) => 
      ({type: 'SET_DELIVERY_DATA', payload: deliveryData});

export const setPaymentData = (paymentData = {
                                          paymentMethod:'visa', card:'', cardDate:'', cardCVV:'', cashEmail:''
                                    }) => 
      ({type: 'SET_PAYMENT_DATA', payload: paymentData});

// delivery INFO

// export const setDeliveryMethod = (method) => 
//       ({type: 'SET_DELIVERY_METHOD', payload: method});

// export const setPhoneNum = (phoneNum) => 
//       ({type: 'SET_PHONE_NUM', payload: phoneNum});

// export const setMAIL = (mail) => 
//       ({type: 'SET_MAIL', payload: mail});

// export const setCountry = (country) => 
//       ({type: 'SET_COUNTRY', payload: country});

// export const setCity = (city) => 
//       ({type: 'SET_CITY', payload: city});

// export const setStreet = (street) => 
//       ({type: 'SET_STREET', payload: street});

// export const setHouse = (house) => 
//       ({type: 'SET_HOUSE', payload: house});

// export const setApartment = (apartment) => 
//       ({type: 'SET_APARTMENT', payload: apartment});

// export const setPostCode = (postcode) => 
//       ({type: 'SET_POSTCODE', payload: postcode});

// export const setStoreAddress = (storeAd) => 
//       ({type: 'SET_STORE_ADDRESS', payload: storeAd});

// payment      

// export const setCardNum = (cardNum) => 
//       ({type: 'SET_CARD_NUM', payload: cardNum});

// export const setCardDate = (date) => 
//       ({type: 'SET_CARD_DATE', payload: date});

// export const setCardCVV = (cvv) => 
//       ({type: 'SET_CARD_CVV', payload: cvv});

// shoping result

export const setSuccesShoping = () => 
      ({type: 'SET_SUCCES_SHOPING'});

export const setUnSuccesShoping = (erroeMes) => 
      ({type: 'SET_UNSUCCES_SHOPING', payload: erroeMes});


//saga

export const getSubscribtionData = (data = {}) => 
      ({type: 'GET_SUBSCRIBTION_DATA', payload: data});

export const loadingSubscribtionData = (field) => 
      ({type: 'LOADING_SUBSCRIBTION_DATA', payload: field});

export const setSubscribtion = (response) => 
      ({type: 'SET_SUBSCRIBTION', payload: response});

export const getReviewData = (review = {}) => 
      ({type: 'GET_REVIEW_DATA', payload: review});

export const loadingReviewData = () => 
      ({type: 'LOADING_REVIEW_DATA'});

export const setReview = (response) => 
      ({type: 'SET_REVIEW', payload: response});





