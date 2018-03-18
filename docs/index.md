# Waterline Extra

[![Beerpay](https://beerpay.io/jamrizzi/waterline-extra/make-wish.svg?style=flat-square)](https://beerpay.io/jamrizzi/waterline-extra?focus=wish)
[![GitHub stars](https://img.shields.io/github/stars/jamrizzi/waterline-extra.svg?style=social&label=Stars)](https://github.com/jamrizzi/waterline-extra)

> Extra methods for waterline

Please ★ this repo if you found it useful ★ ★ ★


# Features

* Promisfied save


# Installation

```sh
npm install --save waterline-extra
```


# API

## save

```eval_rst
.. autofunction:: save
```

### Example

```js
import { save } from 'waterline-extra';

async function modifyName(userId, name) {
  const user = await User.findOne(userId);
  user.name = name; // name not persisted to database
  user = await save(user);
  return user;
}
```


# Dependencies

* [NodeJS](https://nodejs.org)
* [Waterline ORM](https://sailsjs.com/documentation/reference/waterline-orm)


# Support

Submit an [issue](https://github.com/jamrizzi/waterline-extra/issues/new)


# Contributing

Review the [guidelines for contributing](https://github.com/jamrizzi/waterline-extra/blob/master/CONTRIBUTING.md)


# License

[MIT License](https://github.com/jamrizzi/waterline-extra/blob/master/LICENSE)

[Jam Risser](https://jamrizzi.com) © 2018


# Changelog

Review the [changelog](https://github.com/jamrizzi/waterline-extra/blob/master/CHANGELOG.md)


# Credits

* [Jam Risser](https://jamrizzi.com) - Author


# Support on Beerpay

A ridiculous amount of coffee ☕ ☕ ☕ was consumed in the process of building this project.

[Add some fuel](https://beerpay.io/jamrizzi/waterline-extra) if you'd like to keep me going!

[![Beerpay](https://beerpay.io/jamrizzi/waterline-extra/make-wish.svg?style=flat-square)](https://beerpay.io/jamrizzi/waterline-extra?focus=wish)
