import { useHttp } from "./useHttp.hook";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {  loadingProducts, selectedProduct} from "../actions";

const IDService = (id) => {
  const {isSelectedProduct} = useSelector(state => state);
    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {
      dispatch(loadingProducts());
      request(`https://training.cleverland.by/shop/product/${id}`)
          .then(data => dispatch(selectedProduct(data)))
          //.catch(() => dispatch(errorLoadingProducts()))
      // eslint-disable-next-line
  }, [id]);
  

  return isSelectedProduct;
}

export default IDService;