const unsafePasswordList = require('rockyou')(70)
const UnsafePassword = require('./lib/errors')

module.exports = checkPassword

function checkPassword (pw, username) {
  if (pw === username) {
    const msg = 'The provided password matches the user name. Please pick a different password.'
    return { isSafe: false, err: new UnsafePassword.Username(msg) }
  } else if (pw.length < 7) {
    const msg = 'The provided password is too short. Please pick a password longer than 7 characters.'
    return { isSafe: false, err: new UnsafePassword.Short(msg) }
  } else if (unsafePasswordList.indexOf(pw) !== -1) {
    const msg = 'The provided password is too common. Please pick a more unique password. See <a href="https://github.com/ashleygwilliams/rockyou/blob/master/data/70.txt">this list of too common passwords</a>.'
    return { isSafe: false, err: new UnsafePassword.Common(msg) }
  } else {
    return { isSafe: true }
  }
}
