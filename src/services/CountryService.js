import { useHttp } from "./useHttp.hook";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {fetchedCountry  } from "../actions";

const CountryService = () => {
  const {getCountry, country} = useSelector(state => state);
  console.log(getCountry)
    const dispatch = useDispatch();
    const {request} = useHttp();
    
  useEffect(() => {
      console.log('request it')
     request("hhttps://training.cleverland.by/shop/countries")
        .then(data => dispatch(fetchedCountry(data)))
        .catch((er) => console.log(er))
    // eslint-disable-next-line
}, []);

  return country;
}

export default CountryService;