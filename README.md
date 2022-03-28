# ⛔️ DEPRECATED
1. It's generally recommended not to modify the prototypes of built-in objects.  
2. Add `Then` function to the prototype will make the script never terminate.  
3. The `Lodash` library works fine with custom function.  

# synchronous-then

Convert nested method calls to chaining method calls without class or wrapper functions.  

## Installation

    npm install synchronous-then

## Usage

This package adds a function `then` to prototypes of `String`, `Number`, `BigInt` and `Date`.  
To use in your package, you only need to require `synchronous-then`:

```javascript
require('synchronous-then');
```

`synchronous-then` doesn't overwrite existing `then` function and can be overwritten by yourself.

## API

The following functions are provided.

### Number.prototype.then(callback)

Before use `synchronous-then`:

```javascript
let someResult = divide(multiply(minus(plus(5, 5), 2), 3), 4);
```

After use `synchronous-then`:

```javascript
let someResult = plus(5, 5)
  .then(x => minus(x, 2))
  .then(x => multiply(x, 3))
  .then(x => divide(x, 4));
```

### Date.prototype.then(callback)

Before use `synchronous-then`:

```javascript
let someDate = addYears(addMonths(addDays(new Date("2022-01-01"), 5), 5), 5);
```

After use `synchronous-then`:

```javascript
let someDate = addDays(new Date("2022-01-01"), 5)
  .then(x => addMonths(x, 5))
  .then(x => addYears(x, 5));
```

### String.prototype.then(callback)

Before use `synchronous-then`:

```javascript
console.log(
  someFunction(
    `${someArray
    .map(x => `TARGET=${x}`)
    .join('-')}`,
    'SOURCE',
    args.join(',')
  )
);
```
After use `synchronous-then`:

```javascript
`${someArray.map(x => `TARGET=${x}`).join('-')}`
  .then(x => someFunction(x, 'SOURCE', args.join(',')))
  .then(x => console.log(x));
```

### BigInt.prototype.then(callback)

Before use `synchronous-then`:

```javascript
let someResult = divide(multiply(minus(plus(5n, 5n), 2n), 3n), 4n);
```

After use `synchronous-then`:

```javascript
let someResult = plus(5n, 5n)
  .then(x => minus(x, 2n))
  .then(x => multiply(x, 3n))
  .then(x => divide(x, 4n));
```

## Acknowledgements

Thanks to [theScottyJam](https://es.discourse.group/u/thescottyjam/summary) for his useful [sharing](https://es.discourse.group/t/await-postfix-operator/1244/4).
