const unsafePasswordList = require('rockyou')(75)
const UnsafePassword = require('./lib/errors')

module.exports = checkPassword

function checkPassword (pw, username) {
  if (pw === username) {
    const msg = 'The provided password matches the user name. Please pick a different password.'
    return { isSafe: false, err: new UnsafePassword.Username(msg) }
  } else if (pw.length < 7) {
    const msg = 'The provided password is too short. Please pick a password longer than 7 characters.'
    return { isSafe: false, err: new UnsafePassword.Short(msg) }
  } else if (usernameOverrepresented(pw, username)) {
    const msg = 'The provided password is not significantly different than the user name. Please pick a different password.'
    return { isSafe: false, err: new UnsafePassword.Username(msg) }
  } else if (unsafePasswordList.has(pw)) {
    const msg = 'The provided password is too common. Please pick a more unique password.'
    return { isSafe: false, err: new UnsafePassword.Common(msg) }
  } else {
    return { isSafe: true }
  }
}

function usernameOverrepresented (pw, username) {
  const containsUsername = pw.includes(username)
  const notEnoughExtraChars = (pw.length - username.length) < 4
  return containsUsername && notEnoughExtraChars
}
