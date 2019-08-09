import {watchRequestLogin} from './login';
import {watchRequestLogout} from './login';
import {all} from 'redux-saga/effects';



export default function* rootSaga() {
  yield all([
    watchRequestLogin(),
    watchRequestLogout(), 
  ])
}

