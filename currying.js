// Currying is the process of transforming a function that expects multiple parameters into another function that,
// when supplied fewer parameters, returns a new function that awaits the remaining ones.
import * as R from 'ramda';

let addOneToAll = R.map(R.add(1));

// In the example, we create a addOneToAllfunction that increments each element in the list by one.
let res = addOneToAll([1, 2, 3]);

console.info('res', res);