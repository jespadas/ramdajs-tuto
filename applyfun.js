// The apply function invokes a provided function on a list of arguments.
import * as R from 'ramda';

let nums = [3, 5, 7, 8, 2, 1];

let res = R.apply(Math.min, nums);

console.info('res', res);

let res2 = R.apply(Math.max, nums);

console.info('res2', res2);

// The example uses the apply function to compute minimum and maximum.
