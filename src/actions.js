
export const fetchedProducts = (products) => 
      ({type: 'FETCHED_PRODUCTS', payload: products});

export const selectedProduct = (product) => 
      ({type: 'SELECTED_PRODUCT', payload: product});

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