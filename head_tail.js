// The head returns the first element of the given list or string. The tail returns all but the first element of the given list or string.
// The init returns all but the last element of the given list or string. The last returns the last element of the given list or string.
import * as R from 'ramda';

let nums = [2, 4, 6, 8, 10];

console.info('log 1', R.head(nums))
console.info('log 2', R.tail(nums))
console.info('log 3', R.init(nums))
console.info('log 4', R.last(nums))