export const authAction_Login = (credential) => {
  return (dispatch, getState) => {
    if (credential.username === 'f' && credential.password === 'f') {
        dispatch({
          type: 'LOGIN_SUCCESS'
        })
    }else{
        dispatch({
          type: 'LOGIN_FAILED',
        })  
    }
  }
}


export const authAction_Logout = () => {
  return (dispatch, getState) => {
    dispatch({
      type:'LOGOUT'
    })
  }
}
