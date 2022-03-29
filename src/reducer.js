
const initialState = {
  order:[],
  openCart:false,
  openFormReview: false,
  
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
        openFormReview: !state.openFormReview
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
          return{
            ...state,
          isLoadingReview: false,
          reviewResult: action.payload,
          isLoadedReview: true,
          //openFormReview: false
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
        subscriptionData: action.payload,
        subscriptionResult: false,
        
      };

    case 'LOADING_SUBSCRIBTION_DATA':
      return{
        ...state,
        isLoadingSubscriptionData: true
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
        isLoaded: true
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
      return {
        ...state,
       openCart: action.payload
      };
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
       order: [...state.order, {...action.payload, quantity:1 }]
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
    default:
      return state
  }
}

export default reducer;