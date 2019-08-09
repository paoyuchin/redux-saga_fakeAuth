
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_CANCEL = 'LOGIN_CANCEL';
export const LOGOUT = 'LOGOUT';
export const LOGINFAILED = 'LOGINFAILED';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';

export function LoginRequest(credential) {
  console.log('LoginRequest in action',  credential)
  return {
    type: LOGIN_REQUEST,
    credential
  }
};

export function LogOut() {
  return {
    type: LOGOUT_REQUEST,
  }
}

export function LoginCancel() {
  console.log(55, 'LoginCancel')
  return {
    type: LOGIN_CANCEL
  }
}

export function loginFailed(error) {
  return {
    type: LOGINFAILED,
    error
  }
}



export function loginRequest({username,password}) {
  return {
    type: LOGIN_REQUEST,
    username,
    password
  }
}

export function loginSuccess(response) {
  return {
    type: LOGIN_SUCCESS,
    response
  }
}

////////////////////////////////////////////////////////////////////////////////////
