import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_CANCEL,
  LOGOUT,
  LOGINFAILED
} from '../action/actions'

// const initState = {
//   isAuthenticated: false,
//   isLoginFailed: null,
// };

const authReducer = (state = {
  isAuthenticated: false,
  error:null
}, action) => {
  console.log('actionnnnnnn',action)
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
    case 'LOGOUT_SUCCESS':
      return {
        isAuthenticated: false,
      }
    case LOGIN_CANCEL:
      return {
        status: 'init'
      }
      default:
        return state
  }
}
// const authReducer = (state = initState, action) => {
//   switch (action.type) {
//     case 'LOGIN_SUCCESS':
//       return Object.assign({}, state, {
//         isAuthenticated: true,
//         isLoginFailed: null,        
//       })
//       break;
//     case 'LOGIN_FAILED':
//       return Object.assign({}, state, {
//         isAuthenticated: false,
//         isLoginFailed: true,
//       })
//       break; 
//     case 'LOGOUT':
//       return Object.assign({}, state, {
//         isAuthenticated: false,
//       })
//     break;
//     default:
//       return state;
//   }
// };

export default authReducer;
