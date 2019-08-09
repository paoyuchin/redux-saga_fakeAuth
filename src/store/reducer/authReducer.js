import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_CANCEL,
  LOGOUT,
  LOGIN_FAILED,
  LOGOUT_SUCCESS,
} from '../action/actions'

const authReducer = (state = {
  isAuthenticated: false,
  error:null,
  isLoginCancel: null, 
  isLoginFailed: null,
  status: null
}, action) => {
  console.log('authReducer action:',action)
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        status: 'loading'
      }
    case LOGIN_SUCCESS:
      return {
        isAuthenticated: true,
      }
    case LOGOUT:
      return {
        isAuthenticated: false,
      }
    case LOGIN_ERROR:
      return {
        isAuthenticated: false,
        error: action.error
      }
    case 'LOGIN_FAILED':
      return {
        isAuthenticated: false,
        isLoginFailed: true,
      }
    case LOGOUT_SUCCESS:
      return {
        isAuthenticated: false,
      }
    case LOGIN_CANCEL:
      return {
        isLoginCancel: true
      }
      default:
        return state
  }
}

export default authReducer;
