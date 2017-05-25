const unsafePasswordList = require('rockyou')(70)
const UnsafePassword = require('./lib/errors')

module.exports = checkPassword

function checkPassword (pw, username) {
  if (pw === username) {
    return { isSafe: false, err: new UnsafePassword.Username() }
  } else if (pw.length < 7) {
    return { isSafe: false, err: new UnsafePassword.Short() }
  } else if (unsafePasswordList.indexOf(pw) !== -1) {
    return { isSafe: false, err: new UnsafePassword.Common() }
  } else {
    return { isSafe: true }
  }
}
