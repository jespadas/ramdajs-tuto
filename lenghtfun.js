// The length function returns the number of elements in the list.
import * as R from 'ramda';

let nums = [1, 2, 2, 2, 4, 4, 5, 5, 5, 6, 7];

let n1 = R.length(nums);

console.info('n1', n1);

let n2 = R.length(R.uniq(nums));

console.info('n2', n2);

// In the example, we calculate the number of elements in list and the number of unique elements in the list.