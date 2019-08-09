// import {
// LOGIN_REQUEST,
// LOGIN_SUCCESS,
// LOGIN_ERROR,
// LOGIN_CANCEL,
// LOGOUT,
// LOGINFAILED
// } from '../action/actions'

const initState = {
 isAuthenticated: false,
 isLoginFailed: null,
};

// export default function login(state = {
//   status: 'init'
// }, action) {
//   switch (action.type) {
//     case LOGIN_REQUEST:
//       return {
//         status: 'loading'
//       }
//       case LOGIN_SUCCESS:
//         return {
//           status: 'logined',
//             username: action.response.username,
//             token: action.response.token
//         }
//         case LOGIN_ERROR:
//           return {
//             status: 'error',
//               error: action.error
//           }
//           case LOGIN_CANCEL:
//             return {
//               status: 'init'
//             }
//             default:
//               return state
//   }
// }
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return Object.assign({}, state, {
        isAuthenticated: true,
        isLoginFailed: null,        
      })
      break;
    case 'LOGIN_FAILED':
      return Object.assign({}, state, {
        isAuthenticated: false,
        isLoginFailed: true,
      })
      break; 
    case 'LOGOUT':
      return Object.assign({}, state, {
        isAuthenticated: false,
      })
    break;
    default:
      return state;
  }
};

export default authReducer;
