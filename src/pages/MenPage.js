import CategoryPage from './CategoryPage';
import Banner from '../components/banner/Banner';
import { useSelector } from 'react-redux';
import Spinner from '../components/spinner/Spinner';


function MenPage () {

  const {isLoading, isLoaded} = useSelector(state => state);

  return(
    <div className="main-content" data-test-id={`products-page-${'men'}`}>
     <Banner bannerName={'men'}></Banner>
     {isLoading? <Spinner/> : isLoaded ?
    <CategoryPage category={'men'}></CategoryPage> :
    null
    }
    
    </div>
  )
};

export default MenPage;