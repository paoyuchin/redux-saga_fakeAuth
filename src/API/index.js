function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}

function fetchAPI(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
}

export function loginAPI(credential) {
  console.log('credentai', credential)
  // return () => (
  //   {
  //     // username,
  //     // password,
  //   }
  // );
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(credential)
    if (credential.username === 'f' && credential.password === 'f') {
      console.log('right!!!!!!!!!!!')
          resolve(true);
      }else{
        console.log('wrong!!!!!!!!!')
        reject(new Error('wrong password or username'));
      }
    }, 500)
  });
}

//return fetchAPI('/api/login', {
//  headers: {
//    'Content-Type': 'application/json'
//  },
//  method: "POST",
//  body: JSON.stringify({
//    username,
//    password
//  })
//})
