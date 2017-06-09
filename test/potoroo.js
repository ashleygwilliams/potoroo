/* global describe:true, it:true */

const Password = require('../')
const UnsafePassword = require('../lib/errors')
const assert = require('chai').assert

describe('potoroo', function () {
  it('returns false and an error if the password is the same as the username', function () {
    const password = 'myusername'
    const username = 'myusername'
    assert.isFalse(Password(password, username).isSafe)
    assert.property(Password(password, username), 'err')
    assert.instanceOf(Password(password, username).err, Error)
    assert.instanceOf(Password(password, username).err, UnsafePassword.Username)
    assert.isTrue(Password(password, username).err.message.length > 0)
  })

  it('returns false and an error if the password is less than seven characters', function () {
    const password = '2short'
    const username = 'shorty'
    assert.isFalse(Password(password, username).isSafe)
    assert.property(Password(password, username), 'err')
    assert.instanceOf(Password(password, username).err, Error)
    assert.instanceOf(Password(password, username).err, UnsafePassword.Short)
    assert.isTrue(Password(password, username).err.message.length > 0)
  })

  it('returns false and an error if the password is not significantly different than the user name', function () {
    const password = 'myusername123'
    const username = 'myusername'
    assert.isFalse(Password(password, username).isSafe)
    assert.property(Password(password, username), 'err')
    assert.instanceOf(Password(password, username).err, Error)
    assert.instanceOf(Password(password, username).err, UnsafePassword.Username)
    assert.isTrue(Password(password, username).err.message.length > 0)
  })

  it('returns false and an error  if the password exists in the rockyou password list', function () {
    const password = '123456789'
    const username = 'rockyou'
    assert.isFalse(Password(password, username).isSafe)
    assert.property(Password(password, username), 'err')
    assert.instanceOf(Password(password, username).err, Error)
    assert.instanceOf(Password(password, username).err, UnsafePassword.Common)
    assert.isTrue(Password(password, username).err.message.length > 0)
  })

  it('returns true and no error if it passes all rules', function () {
    const password = 'iamverystrong'
    const username = 'strong'
    assert.isTrue(Password(password, username).isSafe)
    assert.notProperty(Password(password, username), 'err')
  })
})
