import CategoryPage from './CategoryPage';
import Banner from '../components/banner/Banner';
import { useSelector } from 'react-redux';
import Spinner from '../components/spinner/Spinner';


function WomenPage () {

  const {isLoading, isLoaded} = useSelector(state => state);

  return(
    <div className="main-content" data-test-id={`products-page-${'women'}`}>
    <Banner bannerName={'women'}></Banner>
    {isLoading? <Spinner/> : isLoaded ?
    <CategoryPage category={'women'}></CategoryPage> :
    null
    }
    
    </div>
  )
};

export default WomenPage;