import { all } from "redux-saga/effects";
import { reviewWatcher } from "./reviewSaga";
import { subscribtionWatcher } from "./subscribeSaga";

function* rootWatcher(){
  yield all([reviewWatcher(), subscribtionWatcher()] )
}

export default rootWatcher;