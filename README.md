# README


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
