
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

export const incOrder = (id, size, color) => 
      ({type: 'INC_ORDER', payload: {id,  size, color}});

export const decrOrder = (id, size, color) => 
      ({type: 'DECR_ORDER', payload: {id,  size, color}});

export const ontoggleReviewForm = () => 
      ({type: 'TOGGLE_FORM'});


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





