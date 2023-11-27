// The flip function return a new function from the supplied one where its arguments are reversed.
import * as R from 'ramda';

let val = R.subtract(2, 10);

console.info('val', val);

// The example reverses the arguments of the subtract function with flip.
let val2 = R.flip(R.subtract)(2, 10);

console.info('val 2', val2);