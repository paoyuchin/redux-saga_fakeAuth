
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGIN_CANCEL = 'LOGIN_CANCEL';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT = 'LOGOUT';
// export const LOGINFAILED = 'LOGINFAILED';


export function loginRequest(credential) {
  return {
    type: LOGIN_REQUEST,
    credential
  }
};

export function logOut() {
  return {
    type: LOGOUT_REQUEST,
  }
}

export function loginCancel() {
  return {
    type: LOGIN_CANCEL
  }
}

export function loginSuccess(response) {
  return {
    type: LOGIN_SUCCESS,
    response
  }
}
