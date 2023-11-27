// The prop function returns the specified property of an object if it exists.
import * as R from 'ramda';

const obj = {
  name: 'John',
  age: 34
}

// With the prop function, we get the values of the name and age properties.
console.info('log 1', R.prop('name', obj))
console.info('log 2', R.prop('age', obj))