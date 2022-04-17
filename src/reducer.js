
const initialState = {
  order:[],
  openCart:false,
  openFormReview: false,
 
  cartItemsOpen: false,
  cartDeliverOpen: false,
  cartPaymentOpen: false,

  successShopping:false,
  unSuccessShopping:{result:false, errorMessage:''},
  
  countrieSS: [],
  storeSS:[],

  deliveryData:{
    deliveryMethod:'pickup from post offices', 
    phone:'',  email:'', country:'', city:'', street:'', house:'', apartment:'', postcode:'',
    storeAddress:''
  },
  // deliveryData:{
  //   deliveryMethod:'pickup from post offices', 
  //   phone:'',  email:'kat12@gmail.com', country:'Беларусь', city:'барань', street:'ааааа', house:'32ф', apartment:'', postcode:'12',
  //   storeAddress:''
  // },

  paymentData:{
    paymentMethod:'visa', card:'', cardDate:'', cardCVV:'', cashEmail:''
  },
    
  
  products: {
    men: [],
    women: [],
  },

  isLoading: false,
  isError: false, 
  isLoaded: false,

  subscriptionData: {},
  isLoadingSubscriptionData: false,
  subscriptionResult: false,
  usedFieldSubscr:0,

  review: {},
  isLoadingReview: false,
  isLoadedReview: false,
  reviewResult: false
}


const reducer = (state = initialState, action) => {
  switch(action.type){

    case 'TOGGLE_FORM':
      return{
        ...state,
        reviewResult: false,
        openFormReview: !state.openFormReview,
      };
      case 'GET_REVIEW_DATA':
        return{
          ...state,
          review: action.payload,
          reviewResult: false,
        };
      case 'LOADING_REVIEW_DATA':
        return{
          ...state,
          isLoadingReview: true
        };
      case 'SET_REVIEW':
        if(action.payload === 'Данные отправлены успешно'){
          document.body.style.overflow = "visible";
          return{
            ...state,
          isLoadingReview: false,
          reviewResult: action.payload,
          isLoadedReview: true,
          openFormReview: false
          }
        } else{
        return{
          ...state,
          isLoadingReview: false,
          reviewResult: action.payload
        }
      };
 
    case 'GET_SUBSCRIBTION_DATA':
      return{
        ...state,
        subscriptionData: action.payload.mail,
        usedFieldSubscr: action.payload.usedField,
        subscriptionResult: false,
        
      };

    case 'LOADING_SUBSCRIBTION_DATA':
      return{
        ...state,
        isLoadingSubscriptionData: true,
        usedFieldSubscr: action.payload
      };

    case 'SET_SUBSCRIBTION':
      return{
        ...state,
        subscriptionResult: action.payload,
        isLoadingSubscriptionData: false
      };

    case 'FETCHED_PRODUCTS':
      return{
        ...state,
        products: action.payload,
        isLoading: false,
        isError: false,
        isLoaded: true,
      };
      case 'LOADING_PRODUCTS':
      return{
        ...state,
        isLoading: true
      };
      case 'ERROR_LOADING_PRODUCTS':
      return{
        ...state,
        isError: true,
        isLoading: false,
      };
    case 'TOGGLE_CART':
      if(action.payload){
        return {
          ...state,
        openCart: action.payload,
        cartItemsOpen: true,
        cartDeliverOpen: false,
        cartpayment: false,
        };
      } else {
        return {
          ...state,
        openCart: action.payload,
        cartItemsOpen: false,
        cartDeliverOpen: false,
        cartpayment: false,
        };
      }
    case 'INC_ORDER':
      const newStateQuantity =  state.order.map((item, i) => {
        if(item.id === action.payload.id && item.size === action.payload.size && item.color === action.payload.color){
            let newQuantity = state.order[i].quantity + 1;
          return {...item, quantity:newQuantity}
          } else{
            return item
          }
        })

      return {
        ...state,
        order: [...newStateQuantity]
      };
      case 'DECR_ORDER':
        const newStateQuantityDecr =  state.order.map((item, i) => {
          if(state.order[i].quantity > 1 && item.id === action.payload.id && item.size === action.payload.size && item.color === action.payload.color){
              let newQuantity = state.order[i].quantity - 1;
              
            return {...item, quantity:newQuantity}
            } else{
              return item
            }
          })
  
        return {
          ...state,
          order: [...newStateQuantityDecr]
        };
    case 'ADD_ORDER':
      return {
        ...state,
       order: [...state.order, {...action.payload, quantity:1 }],
       successShopping: false
      };
    case 'DELETE_ORDER':
      const newStateOrder = state.order.filter((item, i) => (
        !(item.id === action.payload.id &&
         item.size === action.payload.size && 
         item.color ===action.payload.color)) )

      return {
        ...state,
       order: [...newStateOrder] 
      };

    case 'DELETE_ALL_ORDER':
      return {
        ...state,
       order: [] 
      };

    case 'CART_DELIVERY_OPEN':
        return {
          ...state,
          cartItemsOpen: false,
          cartDeliverOpen: true,
          cartPaymentOpen: false,
        };
    case 'CART_ITEMS_OPEN':
         
            return {
              ...state,
              cartItemsOpen: true,
              cartDeliverOpen: false, 
              cartPaymentOpen:false
            };
     
    case 'CART_PAYMENT_OPEN':
      return {
        ...state,
        cartItemsOpen: false,
        cartDeliverOpen: false,
        cartPaymentOpen: true,
      };
  
    case 'FETCHED_COUNTRYS':
      return {
        ...state,
        countrieSS: action.payload,
        
      };
    // case 'FETCHED_STORES':
    //     return {
    //       ...state,
    //       stores: action.payload 
    //     };
    case 'SET_DELIVERY_DATA':
      return {
        ...state,
        deliveryData: action.payload 
      };
    case 'SET_PAYMENT_DATA':
        return {
          ...state,
          paymentData: action.payload,
          //cartPaymentOpen:false
        };

    case  'SET_STORE_ADDRESS':
      return {
        ...state,
        deliveryData: {...state.deliveryData, storeAddress: action.payload} 
      };  

    case  'SET_SUCCES_SHOPING':
        return {
          ...state,
          successShopping: true,
          unSuccessShopping: false,

          cartItemsOpen: false,
          cartDeliverOpen: false,
          cartPaymentOpen: false,
        }; 
    case  'SET_UNSUCCES_SHOPING':
          return {
            ...state,
            successShopping: false,
            unSuccessShopping: {result:true, errorMessage:action.payload},

            cartItemsOpen: false,
            cartDeliverOpen: false,
            cartPaymentOpen: false,
          }; 
    default:
      return state
  }
}

export default reducer; 

