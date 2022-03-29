import {put, takeEvery, call, select} from 'redux-saga/effects';
import { setReview} from '../../actions';



export const postData  = (review) => {
   
  return( fetch('https://training.cleverland.by/shop/product/review', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(review)
                  })
  )
}


export function* sendReviwWorker () {

  try{
    
    const {review} = yield select();

    const data = yield call(() => postData(review));

        
    if (data.ok){
      yield put(setReview('Данные отправлены успешно'))
    } else {
      yield put(setReview('Что-то пошло не так...'))
    }

  } catch (err){
    yield put(setReview('Что-то пошло не так...'))
  }

}


export function* reviewWatcher () {

  yield takeEvery('GET_REVIEW_DATA', sendReviwWorker) 

}