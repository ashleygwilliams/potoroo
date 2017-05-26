module.exports = UnsafePassword

function UnsafePassword () {}

UnsafePassword.Common = class CommonError extends Error {
  constructor (args) {
    super(args)
    Error.captureStackTrace(this, CommonError)
  }
}

UnsafePassword.Short = class ShortError extends Error {
  constructor (args) {
    super(args)
    Error.captureStackTrace(this, ShortError)
  }
}

UnsafePassword.Username = class UsernameError extends Error {
  constructor (args) {
    super(args)
    Error.captureStackTrace(this, UsernameError)
  }
}
