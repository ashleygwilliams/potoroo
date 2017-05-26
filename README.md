# potoroo
> password rules for npm

[![Build Status](https://travis-ci.org/ashleygwilliams/potoroo.svg?branch=master)](https://travis-ci.org/ashleygwilliams/potoroo)

![potoroo](./potoroo.jpg)

## installation

```
npm install potoroo --save
```

## usage

```js
const Password = require('potoroo')

const username = 'auser'
const password = '12345'

isSafe = Password(username, password).isSafe
// false

err = Password(username, password).err
// UnsafePassword.Common
```

## rules

- Common: if the password exists on the rockyou common passwords list
- Short: if a password is less than 7 characters
- Username: if the password matches the username
