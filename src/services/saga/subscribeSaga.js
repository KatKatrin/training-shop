import {put, takeEvery, call, select} from 'redux-saga/effects';
import { setSubscribtion} from '../../actions';



export const postData  = (subscriptionData) => {
 
  return( fetch('https://training.cleverland.by/shop/email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(subscriptionData)
                  })
  )
}


export function* getSubscribtionWorker () {

  const {isLoadingSubscriptionData, subscriptionData} = yield select();

  
  if(isLoadingSubscriptionData){

    try{
      const data = yield call(() => postData(subscriptionData));

      if (data.ok){
        yield put(setSubscribtion('Данные отправлены успешно'))
      } else {
        yield put(setSubscribtion('Что-то пошло не так...'))
      }
    } catch (err){
      yield put(setSubscribtion('Что-то пошло не так...'))
    }
    
  }
 
}


export function* subscribtionWatcher () {

  yield takeEvery('LOADING_SUBSCRIBTION_DATA', getSubscribtionWorker) 

}