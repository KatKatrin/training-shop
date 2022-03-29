import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getSubscribtionData, loadingSubscribtionData } from '../../../actions';
import Loader from './Loader';
import './subscribe.scss';

function Subscribe () {
  const {subscriptionData, isLoadingSubscriptionData, subscriptionResult} = useSelector(state => state);
  const dispatch = useDispatch();
 
  const onChangeEmail = (e) => {
    dispatch(getSubscribtionData())
    if(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(e.target.value)){
      const userData = {mail: e.target.value}
      dispatch(getSubscribtionData(userData));
    }
  }

  const onSubmitMail = (e) => {
    e.preventDefault();
    dispatch(loadingSubscribtionData())
    e.target.reset()
    dispatch(getSubscribtionData())
  }

  return(

    <div className="main-box subscribe-block">
      <form className="form main__form" action="#" 
            onSubmit={(e) => onSubmitMail(e)}>
        <p>Special Offer</p>
        <h2>Subscribe <br /> And <span style={{color:'#E91E63'}} >Get 10% Off</span> </h2>
        <input className="form-control form_input" name="user_email" required type="email" 
          data-test-id='main-subscribe-mail-field'
          placeholder="Enter your email" onChange={(e) => onChangeEmail(e)} />
        <div>
          {!subscriptionResult  ? '' :  subscriptionResult}
        </div>

        <button className="button_submit" type="submit" value={"SUBSCRIBE"} 
                data-test-id='main-subscribe-mail-button'
                disabled={!Object.keys(subscriptionData).length || isLoadingSubscriptionData} >
          <div style={{display:'flex', justifyContent: 'space-around'}}> {isLoadingSubscriptionData ? <Loader/> : null } SUBSCRIBE </div>
        </button>
        
      </form>
    </div>
  )
};

export default Subscribe;

