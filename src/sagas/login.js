import {
    takeEvery
} from 'redux-saga/effects';
import {call, put, fork, take, cancel} from 'redux-saga/effects';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_CANCEL,
  LOGOUT,
  LOGINFAILED,
  LOGOUT_SUCCESS,
  LOGOUT_REQUEST
} from '../store/action/actions';
import {loginAPI} from '../API'

export function* watchRequestLogin() {
    console.log(1, 'watch request')
    yield takeEvery(LOGIN_REQUEST, loginFlow);
};
export function* watchRequestLogout(){
    console.log(886, 'watch logout')
    yield takeEvery(LOGOUT_REQUEST, logoutFlow);
};
export function* logoutFlow() {
    console.log(886, 'logoutFlow')
    yield put({
        type: LOGOUT_SUCCESS,
        response: 'logout success'
    })
}


export function* authorize(action){
    console.log(3, 'authorized', action.credential)
    try {
        const response = yield call(loginAPI, action.credential)
        yield put({
            type: LOGIN_SUCCESS,
            response: response
        })
    } catch (error) {
        console.log('error', error)
        yield put({
            type: LOGIN_ERROR,
            error
        })
    } finally {
        console.log('cancelled')
    }
}

export function* loginFlow(action) {
    console.log('login flow', action)
    const task = yield fork(authorize, action)
    yield take(LOGIN_CANCEL)
    yield cancel(task)
}
// export function* logout(action) {
//     console.log(886, 'logout', action)
//     const task = yield fork(authorize, action)
//     yield take(LOGIN_CANCEL)
//     yield cancel(task)
// }

// export function* logoutFlow(action) {
//     console.log(886, 'logoutflow',action)
//     const task = yield fork(logout, action)
// }
