# README

[![NPM version][npm-badge]][npm-url]
[![Build Status][travis-badge]][travis-url]
[![Coverage Status][coveralls-badge]][coveralls-url]
[![Gittip][gittip-image]][gittip-url]
[![NPM downloads][npm-downloads]][npm-url]


[npm-badge]: https://img.shields.io/npm/v/@hotoo/orderby.svg?style=flat
[npm-url]: https://www.npmjs.com/package/@hotoo/orderby
[npm-downloads]: http://img.shields.io/npm/dm/@hotoo/orderby.svg?style=flat
[travis-badge]: https://travis-ci.org/hotoo/orderby.svg?branch=master
[travis-url]: https://travis-ci.org/hotoo/orderby
[coveralls-badge]: https://coveralls.io/repos/hotoo/orderby/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/r/hotoo/orderby
[gittip-image]: https://img.shields.io/gittip/hotoo.svg?style=flat-square
[gittip-url]: https://www.gittip.com/hotoo/


SQL like syntax (ORDER BY) general sorting algorithm.

## USAGE

```js
const order = require('@hotoo/orderby');

[
 { a: 2, b: 'b' },
 { a: 1, b: 'b' },
 { a: 2, b: 'a' },
]
.sort(order.by('a', 'b DESC'));
```

return sorted array:

```js
[
 { a: 1, b: 'b' },
 { a: 2, b: 'b' },
 { a: 2, b: 'a' },
]
```
