import {watchRequestLogin} from './login';
import {watchRequestLogout} from './login';
import {all} from 'redux-saga/effects';



export default function* rootSaga() {
  console.log('rootsaga')
  yield all([
    watchRequestLogin(),
    watchRequestLogout()
  ])
}

