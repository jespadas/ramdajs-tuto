// The add function adds two values, and the subtract function sutracts two values.
import * as R from 'ramda';

console.info('first log', R.add(2, 5));
console.info('second log', R.subtract(2, 5));

// The example uses both add and subtract functions.
let res = R.add(R.add(2, 5), R.subtract(2, 10));

console.info('third log => res', res);