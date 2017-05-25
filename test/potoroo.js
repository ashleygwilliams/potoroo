/* global describe:true, it:true */

const Password = require('../')
const assert = require('chai').assert

describe('potoroo', function () {
  it('returns false and an error if the password is the same as the username', function () {
    const password = 'myusername'
    const username = 'myusername'
    assert.isFalse(Password(password, username).isSafe)
    assert.property(Password(password, username), 'err')
    assert.instanceOf(Password(password, username).err, Error)
  })

  it('returns false and an error if the password is less than seven characters', function () {
    const password = '2short'
    const username = 'shorty'
    assert.isFalse(Password(password, username).isSafe)
    assert.property(Password(password, username), 'err')
    assert.instanceOf(Password(password, username).err, Error)
  })

  it('returns false and an error  if the password exists in the rockyou password list', function () {
    const password = '12345'
    const username = 'rockyou'
    assert.isFalse(Password(password, username).isSafe)
    assert.property(Password(password, username), 'err')
    assert.instanceOf(Password(password, username).err, Error)
  })

  it('returns true and no error if it passes all rules', function () {
    const password = 'iamverystrong'
    const username = 'strong'
    assert.isTrue(Password(password, username).isSafe)
    assert.notProperty(Password(password, username), 'err')
  })
})
