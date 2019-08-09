// function checkStatus(response) {
//   if (response.status >= 200 && response.status < 300) {
//     return response
//   } else {
//     var error = new Error(response.statusText)
//     error.response = response
//     throw error
//   }
// }

// function parseJSON(response) {
//   return response.json()
// }

// function fetchAPI(url, options) {
//   return fetch(url, options)
//     .then(checkStatus)
//     .then(parseJSON)
// }

export function loginAPI(credential) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (credential.username === 'guest' && credential.password === 'guest') {
        resolve(true);
      } else {
        reject(new Error('wrong password or username'));
      }
    }, 5000)
  });
}
