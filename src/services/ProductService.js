import { useHttp } from "./useHttp.hook";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {fetchedProducts, loadingProducts, errorLoadingProducts} from "../actions";

const ProductService = () => {
  const {products, isLoadedReview} = useSelector(state => state);
    const dispatch = useDispatch();
    const {request} = useHttp();
    
  useEffect(() => {

    dispatch(loadingProducts());
    request("https://training.cleverland.by/shop/products")
        .then(data => dispatch(fetchedProducts(data)))
        .catch(() => dispatch(errorLoadingProducts()))
    // eslint-disable-next-line
}, [isLoadedReview]);

  return products;
}

export default ProductService;